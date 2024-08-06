import Link from 'next/link';
import styles from './navbar.module.sass';

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <h1 className={styles.navbarBrand}><Link className={styles.navbarLink} href={'/'}>Home</Link></h1>
                <ul className={styles.navbarItemContainer}>
                    <li className={styles.navbarItem}><Link className={styles.navbarLink} href={'/'}>Create a task</Link></li>
                </ul>
            </nav>
        </>
    );
}