import styles from './Dialog.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemPropsType = {
    name: string
    id: string
}


export function Dialog(props: DialogItemPropsType) {
    let path = '/Dialogs/' + props.id
    return (

        <div className={styles.dialog}>
            <NavLink to={path} className={navData => navData.isActive ? styles.active : ''}>{props.name}</NavLink>
        </div>
    )
}