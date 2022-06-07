import React from 'react';
import styles from './Post.module.css'

export function Post() {
    return (
        <div className={styles.post}>
            <img
                src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/e69a662c50fe9bfe3b37bef6797c11b0/960"
                alt="x"/>
            post
            <div>
                <span>like</span>
            </div>
        </div>
    )
}