import styles from './ProfileInfo.module.css';
import React from 'react';

type ProfileInfoPropsType = {}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div className={styles.content}>
            <img
                src="https://images.wallpaperscraft.ru/image/single/gory_more_okean_oblaka_noch_96938_3840x2400.jpg"
                alt=""/>
            <div className={styles.avaDescription}>
                ava + description
            </div>
        </div>

    )
}