import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export function Dialogs() {
    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    <NavLink to='/Dialogs/1' className = { navData => navData.isActive ? styles.active : '' }>Ulya</NavLink>
                </div>
                <br/>
                <br/>
                <div className={styles.dialog}>
                    <NavLink to='/Dialogs/2' className = { navData => navData.isActive ? styles.active : '' }>Taras</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laboriosam nam nulla quibusdam unde. A esse quia quo sit tenetur! Accusamus architecto aspernatur assumenda at consequatur  vero voluptate voluptates?
                </div>
                <div className={styles.message}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, non?
                </div>

            </div>
        </div>


    )
}