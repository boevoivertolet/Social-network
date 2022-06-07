import React from 'react';
import {Post} from './Post/Post';
import './MyPosts.module.css'


export function MyPosts() {
    return (
        <div>
            <div className="myPosts">
                My posts
                <div className="newPost">
                    <textarea placeholder="enter text"></textarea>
                    <button>add post</button>
                </div>
                <Post/>
            </div>
        </div>
    )

}