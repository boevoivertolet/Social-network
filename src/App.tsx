import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';



function App() {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/Dialogs" element={<Dialogs/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Music" element={<Music/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
                <Header/>
                <Navbar/>

            </BrowserRouter>
        </div>
    );
}

export default App;


