import React from 'react';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css'


export function MyPosts() {

    let postData = [
        {id: '1', message: 'message1', likesCount: 3},
        {id: '2', message: 'message2', likesCount: 5}
    ]


    return (
        <div>
            <div className={styles.myPosts}>
                My posts
                <div className={styles.newPost}>
                    <textarea></textarea>
                    <button>add post</button>
                </div>
                <Post id={'1'} likesCount={postData[0].likesCount} message={postData[0].message}/>
                <Post id={'2'} likesCount={postData[1].likesCount} message={postData[1].message}/>
            </div>
        </div>
    )

}