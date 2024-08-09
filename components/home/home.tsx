'use client';
/**
 * This will be the home page of the application, this component is a higher-order component and will be rendered at the top level,
 * other contents will be placed here.
 */
import styles from './home.module.scss';
import Navbar from "../navbar/navbar";
import { useThemeSelector } from '@/redux/theme/store';


export default function Home() {
    const isDark = useThemeSelector(state => state.themeReducer.isDarkMode); // Checking the theme, and giving styles based on theme
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className={isDark ? styles.mainDark : styles.mainLight}> 
                <h1>Home</h1>
            </main>
            <footer className={isDark ? styles.footerDark : styles.footerLight}>
                Task Management System
            </footer>
        </>
    );
}