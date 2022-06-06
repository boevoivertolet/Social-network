import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header >
                <img
                    src='https://phototass1.cdnvideo.ru/width/1200_4ce85301/tass/m2/uploads/i/20220219/6621365.jpg'
                    alt=""/>
                <span><em>Benicio Monserrate Rafael del Toro Sánchez</em></span>
            </header>
            <nav>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>

            </nav>
            <div className='content'>
                main content
                <img src="https://images.wallpaperscraft.ru/image/single/gory_more_okean_oblaka_noch_96938_3840x2400.jpg" alt=""/>
                </div>
        </div>
    );
}

export default App;


