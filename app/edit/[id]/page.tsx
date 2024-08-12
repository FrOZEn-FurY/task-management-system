'use client';
/**
 * Handles editing a todo, based on the id parameter passed by URL.
 * We show a form to the user and let them edit the todo as they like.
 * */
import {useForm} from "react-hook-form";
import {useParams, useRouter} from "next/navigation";
import {useTodoSelector} from "@/redux/todo/store";
import {useDispatch} from "react-redux";
import styles from "@/app/create/page.module.scss";
import {useThemeSelector} from "@/redux/theme/store";
import {editTodo} from "@/redux/todo/features/todoSlice";

interface FormFields { // Form interface.
    title: string;
    description: string;
    completed: boolean;
}

export default function EditPage() {
    const id = Number(useParams()?.id); // Getting the id given by params.
    const router = useRouter();
    const todos = useTodoSelector(state => state.todoReducer.value.todos);
    const isDark = useThemeSelector(state => state.themeReducer.isDarkMode);

    if (todos.find(todo => todo.id === id) === undefined) { // If book with such ID didn't exist, we navigate them to home page.
        router.push("/");
    }

    const { register, handleSubmit, formState: {errors} } = useForm<FormFields>({
        defaultValues: {
            title: todos.find(todo => todo.id === id)?.title,
            description: todos.find(todo => todo.id === id)?.description,
            completed: todos.find(todo => todo.id === id)?.completed,
        } // defaultValues parameter determines what are the initialValues for the inputs.
    });

    const dispatch = useDispatch();

    return (
        <form onSubmit={handleSubmit(submit)} className={isDark ? styles.formDark : styles.formLight}>
            <label htmlFor="title">Title:</label>
            <input
                {...register("title", {
                    required: "This field is required",
                    maxLength: {value: 20, message: "Maximum length for title is 20 characters."}
                })}
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
                    aria-invalid={errors.completed ? "true" : "false"}
                />
                {errors.completed && <span>{errors.completed.message}</span>}
            </div>

            <button type="submit">Edit task</button>
        </form>
    );

    function submit(values: FormFields) { // Submission of the form and editing.
        const task = {
            id,
            ...values
        }
        localStorage.setItem(`todo${id}`, JSON.stringify(task));
        dispatch(editTodo({id, ...values}));
        router.replace('/')
    }
}