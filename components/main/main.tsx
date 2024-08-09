"use client";
/**
 * This will be the home page of the application, this component is a higher-order component and will be rendered at the top level,
 * other contents will be placed here.
 */
import styles from "./main.module.scss";
import { useThemeSelector } from "@/redux/theme/store";

export default function Main({children}: Readonly<{ children: React.ReactNode }>) {
  const isDark = useThemeSelector((state) => state.themeReducer.isDarkMode); // Checking the theme, and giving styles based on theme
  return (
    <>
      <main className={isDark ? styles.mainDark : styles.mainLight}>
        {children}
      </main>
    </>
  );
}
