import React from 'react';
import styles from './Post.module.css'



type PostPropsType={
    message: string
    likeCount:number
}


export function Post(props: PostPropsType) {
    return (
        <div className={styles.post}>
            <img
                src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/e69a662c50fe9bfe3b37bef6797c11b0/960"
                alt="x"/>
            {props.message}
            <div>
                <span>like</span><span>{props.likeCount}</span>
            </div>
        </div>
    )
}