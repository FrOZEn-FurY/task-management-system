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
import {useEffect, useState} from "react";
import {XMarkIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function HomePage() {
    const [showTodo, setShowTodo] = useState<number>(-1);
    const todos = useTodoSelector((state) => state.todoReducer.value.todos);
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode);
    const dispatch = useDispatch();
    if (todos.length === 0) {
        let cntr = 1;
        while (true) {
            console.log(localStorage.getItem("todo1"));
            if (!localStorage.getItem(`todo${cntr}`))
                break;
            let todo = JSON.parse(localStorage.getItem(`todo${cntr}`) as string);
            dispatch(addTodo(todo));
            dispatch(setLastID(cntr));
            cntr++;
        }
    }
    return (
        <>
            {showTodo !== -1 && 
                <section className={isDark ? styles.showedTodoDark : styles.showedTodoLight}>
                    <h2>
                        {todos[showTodo - 1].title}
                        <span onClick={handleClose}>
                            <XMarkIcon width={24} height={24}></XMarkIcon>
                        </span>
                    </h2>
                    <p>{todos[showTodo - 1].description}</p>
                    <div>
                        <label htmlFor="completed">Completed:</label>
                        <input type="checkbox" checked={todos[showTodo - 1].completed} onChange={() => handleToggle(showTodo)} />
                        <Link href={`/delete/${showTodo}`}>Delete</Link>
                        <Link href={`/edit/${showTodo}`}>Edit</Link>
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
                                <button data-id={todo.id} onClick={() => setShowTodo(todo.id)}>Show</button>
                            </div>
                        </section>
                    );
                })
            }
        </>
    );

    function handleClose() {
        setShowTodo(-1);
    }

    function handleToggle(id: number) {
        const todo = JSON.parse(localStorage.getItem(`todo${id}`) as string);
        dispatch(toggleTodo(id));
        todo.completed = !todo.completed;
        localStorage.setItem(`todo${id}`, JSON.stringify(todo));
    }
}