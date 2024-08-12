'use client';
/**
 * This component has the duty of showing the input form and validating the input and user.
 * Of course, for this small application this is just a symbolic thing and really does nothing.
 * */
import { useThemeSelector } from "@/redux/theme/store";
import { useUserSelector } from "@/redux/user/store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from './page.module.scss';
import { useDispatch } from "react-redux";
import { setName } from "@/redux/user/features/userSlice";

interface FormValues { // Interface for the form values.
    username: string;
}

export default function Login() {
    const router = useRouter();
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode);
    const user = useUserSelector((state) => state.userReducer.name);
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    // register function handles the methods that must be done on an input.
    // handleSubmit handles form submission using a callback function we give to it.
    // errors object has all the error messages of the field.
    const dispatch = useDispatch();

    if (user) { // If the user was already logged in we are not showing them a login page if requested.
        router.push("/");
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={isDark ? styles.formDark : styles.formLight}>
            <label htmlFor="username">Username:</label>
            <input
                {...register("username", {required: "This field is required"})}
                id="username"
                placeholder="Enter your username"
                type="text"
                aria-invalid={errors.username ? "true" : "false"}
            />
            {errors.username && <span>{errors.username.message}</span>}
            <button type="submit">Login</button>
        </form>
    );

    function submit(data: FormValues) { // Handles the form submission, stores the task in both localStorage and todos array.
        if (data.username) {
            localStorage.setItem("username", data.username);
            dispatch(setName(data.username));
            router.push("/");
        }
    }
}