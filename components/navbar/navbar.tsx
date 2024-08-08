'use client';

import Link from 'next/link';
import styles from './navbar.module.css';
import { useThemeSelector } from '@/redux/theme/store';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

export default function Navbar() {
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode);
    return (
        <>
            <nav className={styles.navbar}>
                <h1><Link href={'/'}>Home</Link></h1>
                <ul>
                    <li><Link href={'/'}>Create a task</Link></li>
                    {isDark ? <SunIcon className={styles.icon}></SunIcon> : <MoonIcon className={styles.icon}></MoonIcon>}
                </ul>
            </nav>
        </>
    );
}