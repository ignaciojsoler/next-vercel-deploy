import Link from 'next/link';
import React from 'react';
import { Inter } from '@next/font/google'
import styles from './Navbar.module.css'
import ActiveLink from './ActiveLink';

const inter = Inter({ subsets: ['latin'] })

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

const Navbar = () => {
    return (
        <nav className={`${inter.className} ${styles['menu-container']}`}>
            {
                menuItems.map((item, idx) => {
                    return <ActiveLink key={idx} text={item.text} href={item.href}/>
                })
            }
        </nav>
    );
};

export default Navbar;