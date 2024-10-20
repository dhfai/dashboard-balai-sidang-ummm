import Image from "next/image";
import logo from '../image/logo.png';
import styles from '@/style/module/navbar.module.scss'
import { CgMathPlus } from 'react-icons/cg';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Image src={logo} alt="logo-dashboard" width={70} height={70} />

            <div className={styles.navRight}>
                <CgMathPlus />
                <div className={styles.avatarContainer}>
                    <Image src='https://avatar.iran.liara.run/public/girl' alt="avatar" width={50} height={50} />
                    <h2 className={styles.avatarName}>
                        Admin 1
                        <span>admin@unismuh.ac.id</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}
