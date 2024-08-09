'use client';
import { setName } from "@/redux/user/features/userSlice";
import { useDispatch } from "react-redux";

export default function GetInitialData() {
    const dispatch = useDispatch();
    const user = localStorage.getItem("username");
    if (user) {
        dispatch(setName(user));
    }
    return null;
}