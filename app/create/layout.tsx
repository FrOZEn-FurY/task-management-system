'use client';

import {ReactNode} from "react";
import {useUserSelector} from "@/redux/user/store";
import {useRouter} from "next/navigation";

export default function PageLayout({ children }: { children: ReactNode }) {
    const user = useUserSelector((state) => state.userReducer.name);
    const router = useRouter();

    if (user === "")
        router.push('/login');

    return children;
}