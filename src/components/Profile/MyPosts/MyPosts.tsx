import React from 'react';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css'
import {v1} from 'uuid';


export function MyPosts() {

    let postData = [
        {id: v1(), message: 'message1', likesCount: 3},
        {id: v1(), message: 'message2', likesCount: 5}
    ]

    let postDataElement =postData.map(post =>  <Post id={post.id} likesCount={post.likesCount} message={post.message}/>)

    return (
        <div>
            <div className={styles.myPosts}>
                My posts
                <div className={styles.newPost}>
                    <textarea></textarea>
                    <button>add post</button>
                </div>
                {postDataElement}

            </div>
        </div>
    )

}