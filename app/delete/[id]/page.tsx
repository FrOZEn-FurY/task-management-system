'use client';

import {useParams, useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {removeTodo} from "@/redux/todo/features/todoSlice";

export default function Delete() {
    const id = Number(useParams()?.id);
    const dispatch = useDispatch();
    const router = useRouter();
    if (id) {
        localStorage.removeItem(`todo${id}`);
        dispatch(removeTodo(id));
    }
    router.replace('/');
    return null;
}