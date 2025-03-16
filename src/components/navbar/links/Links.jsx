"use client"
import Link from 'next/link'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
import { useState } from 'react'
import Image from 'next/image'
import { handleGooglelogOut } from '@/lib/action'


const Links = ({ session }) => {
    const isAdmin = true;
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ]

    const [open, setOpen] = useState(false);
    return (
        <div className={styles.linksContainer}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}></NavLink>
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>}
                        <form action={handleGooglelogOut}>
                        <button className={styles.logout}>Logout</button>
                        </form>
                        
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)}></Image>
            {open && (
                <div className={`${styles.mobileLinks} ${open ? styles.open : ''}`}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title}></NavLink>
                    ))}
                    {session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )}
                </div>
            )}
        </div>
    )
}

export default Links
