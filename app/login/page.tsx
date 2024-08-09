'use client';

import { useThemeSelector } from "@/redux/theme/store";
import { useUserSelector } from "@/redux/user/store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from './page.module.scss';
import { useDispatch } from "react-redux";
import { setName } from "@/redux/user/features/userSlice";

interface FormValues {
    username: string;
}

export default function Login() {
    const router = useRouter();
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode);
    const user = useUserSelector((state) => state.userReducer.name);
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const dispatch = useDispatch();

    if (user) {
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

    function submit(data: FormValues) {
        if (data.username) {
            localStorage.setItem("username", data.username);
            dispatch(setName(data.username));
            router.push("/");
        }
    }
}