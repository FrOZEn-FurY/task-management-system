'use client';
import { setName } from "@/redux/user/features/userSlice";
import { useDispatch } from "react-redux";
/**
 * This function is put in the layout.tsx of the top-level.
 * before anything else, it checks if a user logged in or not.
 * */
export default function GetInitialData() {
    const dispatch = useDispatch();
    const user = localStorage.getItem("username");
    if (user) {
        dispatch(setName(user));
    }
    return null;
}