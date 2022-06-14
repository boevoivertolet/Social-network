import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {Sidebar} from '../Sidebar/Sidebar';


type NavbarPropsType ={
    name: string
}

export function Navbar() {
    return (
        <div className={styles.nav}>
            <nav >
                <div className={styles.anchor}><NavLink to="/Profile"className = { navData => navData.isActive ? styles.active : '' }>Profile</NavLink></div>
                <div className={styles.anchor}><NavLink to="/Dialogs" className = { navData => navData.isActive ? styles.active : '' }>Dialogs</NavLink></div>
                <div className={styles.anchor}><NavLink to="/News" className = { navData => navData.isActive ? styles.active : '' }>News</NavLink></div>
                <div className={styles.anchor}><NavLink to="/Music" className = { navData => navData.isActive ? styles.active : '' }>Music</NavLink></div>
                <div className={styles.anchor}><NavLink to="/Settings" className = { navData => navData.isActive ? styles.active : '' }>Settings</NavLink></div>
            </nav>

        </div>

    )

}
