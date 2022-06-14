import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../index';





type ProfilePropsType = {
    postData: PostDataType[]
}

export function Profile(props: ProfilePropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>

    )

}

