import React from 'react'
import styles from '@/style/module/sidebar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/image/logo.png'
import { RiHomeSmile2Line } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <Image src={logo} alt="Ghost icon" width={64} height={64} />
        <div className={styles.menu}>
            <Link href="/dashboard" className={styles.link}>
                <RiHomeSmile2Line size={24} />
                <span>DASHBOARD</span>
            </Link>
            <Link href="/torrents" className={styles.link}>
                <IoCalendarOutline size={24} />
                <span>Tambah Data</span>
            </Link>
        </div>
        <div className={styles.footerIcon}>
            <Image src={logo} alt="UK flag" width={32} height={32} />
        </div>
      </div>
  )
}

export default Sidebar
