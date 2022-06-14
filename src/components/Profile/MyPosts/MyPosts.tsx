import React from 'react';
import {Post} from './Post/Post';
import styles from './MyPosts.module.css'
import {PostDataType} from '../../../Redux/state';



type MyPostsPropsType = {
    postData: PostDataType[]
}

export function MyPosts(props: MyPostsPropsType) {


    let postDataElement = props.postData.map(post => <Post id={post.id} likesCount={post.likesCount}
                                                           message={post.message}/>)

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