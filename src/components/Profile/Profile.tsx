import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';


export function Profile() {
    return (
        <div className={styles.content}>
            <img
                src="https://images.wallpaperscraft.ru/image/single/gory_more_okean_oblaka_noch_96938_3840x2400.jpg"
                alt=""/>
            <div className="ava-description">
                ava + description
            </div>
            <MyPosts/>
        </div>
    )

}