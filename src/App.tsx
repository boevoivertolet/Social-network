import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import { Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {StateDataType} from './Redux/state';
import {Sidebar} from './components/Sidebar/Sidebar';




type AppPropsType ={
    state: StateDataType
}

function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/Profile" element={<Profile postData={props.state.profile.postData}/>}/>
                    <Route path="/Dialogs" element={<Dialogs dialogData={props.state.dialogs.dialogData} messageData={props.state.dialogs.messageData}/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Music" element={<Music/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
                <Header/>
                <Navbar/>
                <Sidebar friendData={props.state.sidebar.friendData}/>
            </BrowserRouter>
        </div>
    );
}

export default App;


