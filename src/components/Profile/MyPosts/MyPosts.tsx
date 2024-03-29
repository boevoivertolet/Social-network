import {Post} from './Post/Post';
import styles from './MyPosts.module.css'
import {addPostAC, onChangePostAC} from '../../../Redux/profileReducer';
import React from 'react';
import {StoreType} from '../../../Redux/Types';


type MyPostsPropsType = {

    store: StoreType
}




export function MyPosts(props: MyPostsPropsType) {


    let postDataElement = props.store.getState().profile.postData.map(post => <Post id={post.id} likesCount={post.likesCount} message={post.message}/>)



    let newTextareaValue = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.store.dispatch(addPostAC());

    }
    const onChangePost = () => {
        let value: any = newTextareaValue.current?.value
        let action = onChangePostAC(value);
        props.store.dispatch(action)

    }




    return (
        <div>
            <div className={styles.myPosts}>
                <div className={styles.newPost}>
                    <textarea  onChange={onChangePost} ref={newTextareaValue} value={props.store.getState().profile.newPostTextData[0].text}/>
                    <button onClick={addPost}>add post</button>
                </div>
                {postDataElement}
            </div>
        </div>
    )

}