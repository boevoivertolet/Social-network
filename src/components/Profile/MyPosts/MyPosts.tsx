import React from 'react';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css'



export function MyPosts() {
    return (
        <div>
            <div className={styles.myPosts}>
                My posts
                <div className={styles.newPost}>
                    <textarea></textarea>
                    <button>add post</button>
                </div>
                <Post likesCount={3} message ='1 message'/>
                <Post likesCount={5} message ='2 message'/>
            </div>
        </div>
    )

}