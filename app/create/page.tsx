'use client';
/**
 * Creates a new todo.
 * Shows a form to the user, validates it and the does a submission to create a new todo.
 * */
import {useForm} from "react-hook-form";
import {useThemeSelector} from "@/redux/theme/store";
import styles from './page.module.scss';
import {useTodoSelector} from "@/redux/todo/store";
import {useDispatch} from "react-redux";
import {addTodo, setLastID} from "@/redux/todo/features/todoSlice";
import {useRouter} from "next/navigation";

interface FormFields { // Form types.
    title: string;
    description: string;
    completed: boolean;
}

export default function CreatePage() {
    const {register, handleSubmit, formState: { errors }} = useForm<FormFields>();
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode);
    const lastID = useTodoSelector(state => state.todoReducer.value.lastId) + 1;
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <form onSubmit={handleSubmit(submit)} className={isDark ? styles.formDark : styles.formLight}>
            <label htmlFor="title">Title:</label>
            <input
                {...register("title", {required: "This field is required", maxLength: { value: 20, message: "Maximum length for title is 20 characters." }})}
                id="title"
                placeholder="Enter the title"
                type="text"
                aria-invalid={errors.title ? "true" : "false"}
            />
            {errors.title && <span>{errors.title.message}</span>}

            <label htmlFor="description">Description:</label>
            <textarea
                {...register("description", {required: "This field is required"})}
                id="description"
                placeholder="Enter the jobs description"
                aria-invalid={errors.description ? "true" : "false"}
            />
            {errors.description && <span>{errors.description.message}</span>}

            <div>
                <label htmlFor="state">Completed:</label>
                <input
                    {...register("completed")}
                    id="state"
                    type="checkbox"
                    defaultChecked={true}
                    aria-invalid={errors.completed ? "true" : "false"}
                />
                {errors.completed && <span>{errors.completed.message}</span>}
            </div>

            <button type="submit">Add task</button>
        </form>
    );

    function submit(values: FormFields) { // A submission to the form that adds a todo.
        const task = {
            id: lastID,
            ...values
        }
        localStorage.setItem(`todo${lastID}`, JSON.stringify(task));
        dispatch(addTodo(task));
        dispatch(setLastID(lastID));
        router.replace('/');
    }
}