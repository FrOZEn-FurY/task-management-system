'use client';
import { useThemeSelector } from '@/redux/theme/store';
import styles from './footer.module.scss';

export default function Footer() {
    const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode);
    return (
        <footer className={isDark ? styles.footerDark : styles.footerLight}>
            Task Management System
        </footer>
    );
}