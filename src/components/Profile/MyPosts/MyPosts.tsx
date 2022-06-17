import {Post} from './Post/Post';
import styles from './MyPosts.module.css'
import {StoreType} from '../../../Redux/state';
import React from 'react';


type MyPostsPropsType = {
    /*state: StateDataType
    addPost: (postMessage: string) => void
    changeText:(newText: string)=> void*/
    store: StoreType
}

export function MyPosts(props: MyPostsPropsType) {


    let postDataElement = props.store.getState().profile.postData.map(post => <Post id={post.id} likesCount={post.likesCount}

                                                                         message={post.message}/>)
    let newTextareaValue = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.store.dispatch({type:'ADD-POST'});

    }
    const onChangePost = () => {
        let value: any = newTextareaValue.current?.value
        props.store.dispatch({type:'CHANGE-TEXT', newText: value})

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