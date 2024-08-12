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
import { useUserSelector } from '@/redux/user/store';
import { setName } from '@/redux/user/features/userSlice';

export default function Navbar() {
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode); // Checking the theme and giving styles based on the theme.
    const user = useUserSelector((state) => state.userReducer.name); // Getting the user status.
    const dispatch = useDispatch(); // Using dispatch to toggle the theme stats
    return (
        <header>
            <nav className={isDark ? styles.navbarDark : styles.navbarLight}>
                <h1><Link href={'/'}>Home</Link></h1>
                <ul>
                    <li><Link href={'/create'}>Create a task</Link></li>
                    {user === "" ? (
                        <li><Link href={'/login'}>Login</Link></li>
                    ) : <li><a onClick={handleLogout}>Log out</a></li>}
                    {isDark ? <SunIcon className={styles.icon} onClick={themeToggler}></SunIcon> : <MoonIcon className={styles.icon} onClick={themeToggler}></MoonIcon>}
                </ul>
            </nav>
        </header>
    );

    function themeToggler() { // This function toggles the theme stats, using the dispatch we created above and toggleTheme reducer given by the redux.
        dispatch(toggleTheme());
    }

    function handleLogout() { // Logs the user out.
        localStorage.removeItem("username");
        dispatch(setName(""));
    }
}