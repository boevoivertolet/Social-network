import React from 'react';


export function Profile() {
    return (
        <div className="content">
            <img
                src="https://images.wallpaperscraft.ru/image/single/gory_more_okean_oblaka_noch_96938_3840x2400.jpg"
                alt=""/>
            <div className="ava-description">
                ava + description
            </div>
            <div className="myPosts">
                My posts
                <div className="newPost">new post</div>
                <div className="post"> post 1</div>
                <div className="post"> post 2</div>
            </div>
        </div>
    )

}