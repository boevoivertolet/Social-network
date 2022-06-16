import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StateDataType} from '../../Redux/state';


type ProfilePropsType = {
    state: StateDataType
    addPost: (postMessage: string) => void
    addText:(newText: string)=> void
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                state={props.state}
                addPost={props.addPost}
                addText={props.addText}
            />
        </div>

    )

}

