import React from 'react';
import './App.css';
import {Header} from './components/Header';

function App() {
    return (
        <div className="app-wrapper">
          <Header/>
            <nav>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>

            </nav>
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
        </div>
    );
}

export default App;


