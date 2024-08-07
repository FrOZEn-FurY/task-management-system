import Navbar from "@/components/navbar/navbar";
import styles from './home.module.sass'

export default function Home() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className={styles.main}>
                <h1>Home</h1>
            </main>
            <footer className={styles.footer}>
                Task Management System
            </footer>
        </>
    );
}