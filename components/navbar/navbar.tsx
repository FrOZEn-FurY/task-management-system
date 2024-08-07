import Link from 'next/link';
import styles from './navbar.module.sass';

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <h1><Link href={'/'}>Home</Link></h1>
                <ul>
                    <li><Link href={'/'}>Create a task</Link></li>
                </ul>
            </nav>
        </>
    );
}