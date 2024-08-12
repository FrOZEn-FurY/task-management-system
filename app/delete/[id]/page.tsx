'use client';
/**
 * Deletes a todo based on the given id.
 * The id is given through the URL, and then we try to remove the demanded task.
 * */
import {useParams, useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {removeTodo} from "@/redux/todo/features/todoSlice";

export default function Delete() {
    const id = Number(useParams()?.id); // Getting the id from URL.
    const dispatch = useDispatch();
    const router = useRouter();
    if (id) { // If the id were not given for any reason, we will not do anything.
        localStorage.removeItem(`todo${id}`);
        dispatch(removeTodo(id)); // Deleting the task from both localStorage and redux state.
    }
    router.replace('/');
    return null;
}