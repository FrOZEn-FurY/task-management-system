'use client';

import Link from 'next/link';
import styles from './navbar.module.scss';
import { useThemeSelector } from '@/redux/theme/store';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '@/redux/theme/features/themeSlice';

export default function Navbar() {
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode);
    const dispatch = useDispatch();
    return (
        <>
            <nav className={isDark ? styles.navbarDark : styles.navbarLight}>
                <h1><Link href={'/'}>Home</Link></h1>
                <ul>
                    <li><Link href={'/'}>Create a task</Link></li>
                    {isDark ? <SunIcon className={styles.icon} onClick={themeToggler}></SunIcon> : <MoonIcon className={styles.icon} onClick={themeToggler}></MoonIcon>}
                </ul>
            </nav>
        </>
    );

    function themeToggler() {
        dispatch(toggleTheme());
    }
}