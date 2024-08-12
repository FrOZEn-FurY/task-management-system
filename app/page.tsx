'use client';
import { addTodo, setLastID, toggleTodo } from "@/redux/todo/features/todoSlice";
/**
 * This is the Home Page, we try to get the todos stored in the localStorage and then render them.
 * If no such data is found, we render the Home Page, without any data.
 */
import { useTodoSelector } from "@/redux/todo/store";
import { useDispatch } from "react-redux";
import styles from './page.module.scss';
import { useThemeSelector } from "@/redux/theme/store";
import {useState} from "react";
import {XMarkIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

interface Todo {
    id: number,
    title: string,
    description: string,
    completed: boolean,
}

export default function HomePage() {
    const [showTodo, setShowTodo] = useState<Todo | undefined>(undefined);
    const {todos, lastID } = useTodoSelector((state) => {
        return {
            todos: state.todoReducer.value.todos,
            lastID: state.todoReducer.value.lastId
        }
    });
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode);
    const dispatch = useDispatch();
    if (todos.length === 0) {
        Object.keys(localStorage).
            filter(key => key.startsWith("todo")).
            forEach(key => {
                const task = JSON.parse(localStorage.getItem(key) as string);
                dispatch(addTodo(task));
                dispatch(setLastID(Math.max(lastID, task.id)));
        })
    }
    return (
        <>
            {showTodo &&
                <section className={isDark ? styles.showedTodoDark : styles.showedTodoLight}>
                    <h2>
                        {showTodo.title}
                        <span onClick={handleClose}>
                            <XMarkIcon width={24} height={24}></XMarkIcon>
                        </span>
                    </h2>
                    <p>{showTodo.description}</p>
                    <div>
                        <label htmlFor="completed">Completed:</label>
                        <input type="checkbox" checked={showTodo.completed} onChange={() => handleToggle(showTodo.id)} />
                        <Link href={`/delete/${showTodo.id}`}>Delete</Link>
                        <Link href={`/edit/${showTodo.id}`}>Edit</Link>
                    </div>
                </section>
            }
            {
                todos.map((todo) => {
                    return (
                        <section key={todo.id} className={isDark ? styles.todoDark : styles.todoLight}>
                            <h2>{todo.title}</h2>
                            <p>{todo.description}</p>
                            <div>
                                <label htmlFor="completed">Completed:</label>
                                <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                                <button data-id={todo.id} onClick={() => setShowTodo(todo)}>Show</button>
                            </div>
                        </section>
                    );
                })
            }
        </>
    );

    function handleClose() {
        setShowTodo(undefined);
    }

    function handleToggle(id: number) {
        const todo = JSON.parse(localStorage.getItem(`todo${id}`) as string);
        dispatch(toggleTodo(id));
        todo.completed = !todo.completed;
        localStorage.setItem(`todo${id}`, JSON.stringify(todo));
    }
}