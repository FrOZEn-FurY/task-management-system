'use client';
import { useThemeSelector } from '@/redux/theme/store';
import styles from './footer.module.scss';
/**
 * This is the wrapper function for the footer of the page.
 * */
export default function Footer() {
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode);
    return (
        <footer className={isDark ? styles.footerDark : styles.footerLight}>
            Task Management System
        </footer>
    );
}