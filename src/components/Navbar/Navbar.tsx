import React from 'react';
import  './Navbar.module.css'


export function Navbar() {
    return (
        <nav>
            <div><a href="/Profile">Profile</a></div>
            <br/>
            <div><a href="/Dialogs">Dialogs</a></div>
            <br/>
            <div><a href="/News">News</a></div>
            <br/>
            <div><a href="/Music">Music</a></div>
            <br/>
            <div ><a href="/Settings">Settings</a></div>
        </nav>
    )

}