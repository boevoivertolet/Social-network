import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {initialStateProfileType, StoreType} from '../../Redux/Types';


type ProfilePropsType = {
   /* state: StateDataType
    addPost: (postMessage: string) => void
    changeText:(newText: string)=> void*/
    store: initialStateProfileType
    state: any
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                state={props.state}
                store={props.store}
            />
        </div>

    )

}

