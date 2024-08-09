'use client';
/**
 * This component is the navbar, and it will be displayed in all the pages, thanks to the method we have implemented in the home component,
 * and the higher-ordering call of it.
 */
import Link from 'next/link'; // Link is used to navigate throughout the pages.
import styles from './navbar.module.scss';
import { useThemeSelector } from '@/redux/theme/store';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '@/redux/theme/features/themeSlice';

export default function Navbar() {
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode); // Checking the theme and giving styles based on the theme.
    const dispatch = useDispatch(); // Using dispatch to toggle the theme stats
    return (
        <>
            <nav className={isDark ? styles.navbarDark : styles.navbarLight}>
                <h1><Link href={'/'}>Home</Link></h1>
                <ul>
                    <li><Link href={'/'}>Create a task</Link></li>
                    <li><Link href={'/'}>Login</Link></li>
                    {isDark ? <SunIcon className={styles.icon} onClick={themeToggler}></SunIcon> : <MoonIcon className={styles.icon} onClick={themeToggler}></MoonIcon>}
                </ul>
            </nav>
        </>
    );

    function themeToggler() { // This function toggles the theme stats, using the dispatch we created above and toggleTheme reducer given by the redux.
        dispatch(toggleTheme());
    }
}