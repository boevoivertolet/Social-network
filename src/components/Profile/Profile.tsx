import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../Redux/state';


type ProfilePropsType = {
   /* state: StateDataType
    addPost: (postMessage: string) => void
    changeText:(newText: string)=> void*/
    store: StoreType
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                store={props.store}
            />
        </div>

    )

}

