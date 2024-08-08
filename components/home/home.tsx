'use client';
import styles from './home.module.scss';
import Navbar from "../navbar/navbar";
import { useThemeSelector } from '@/redux/theme/store';


export default function Home() {
    const isDark = useThemeSelector(state => state.themeReducer.isDarkMode);
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