import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StateDataType} from '../../Redux/state';





type ProfilePropsType = {
    state: StateDataType
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>

    )

}

