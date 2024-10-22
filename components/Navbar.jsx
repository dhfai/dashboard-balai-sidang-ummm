import styles from '@/style/module/navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={styles.searchBar}>
          <Link href="/help" className={styles.link}>
            Help & Support
          </Link>
        </div>
    );
}
