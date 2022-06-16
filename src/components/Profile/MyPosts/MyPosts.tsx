import {Post} from './Post/Post';
import styles from './MyPosts.module.css'
import { StateDataType} from '../../../Redux/state';
import React from 'react';


type MyPostsPropsType = {
    state: StateDataType
    addPost: (postMessage: string) => void
    changeText:(newText: string)=> void
}

export function MyPosts(props: MyPostsPropsType) {


    let postDataElement = props.state.profile.postData.map(post => <Post id={post.id} likesCount={post.likesCount}

                                                                         message={post.message}/>)
    let newTextareaValue = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let value: any = newTextareaValue.current?.value
        props.addPost(value);

    }
    const onChangePost = () => {
        let value: any = newTextareaValue.current?.value
        props.changeText(value)

    }

    const onKeyPressHandler = () => {

    }


    return (
        <div>
            <div className={styles.myPosts}>
                <div className={styles.newPost}>
                    <textarea  onChange={onChangePost} ref={newTextareaValue} value={props.state.profile.newPostTextData[0].text}/>
                    <button onClick={addPost}>add post</button>
                </div>
                {postDataElement}
            </div>
        </div>
    )

}