import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import { StoreType} from './Redux/state';
import {Sidebar} from './components/Sidebar/Sidebar';


type AppPropsType = {
   /* state: StateDataType
    addPost: (postMessage: string) => void
    changeText: (newText: string) => void
    changeMessage: (newMessage: string) => void
    addMessage: (id:string) => void*/
    store: StoreType
}

function App(props: AppPropsType) {


    return (
        <div className="app-wrapper">
            <Routes>
                <Route
                    path="/Profile" element={
                    <Profile
                        store={props.store}
                       /* addPost={props.addPost}
                        changeText={props.changeText}*/
                    />}/>

                <Route path="/Dialogs" element={
                    <Dialogs
                        store={props.store}
                        /*changeMessage={props.changeMessage}
                        addMessage={props.addMessage}*/
                    />}/>


                <Route path="/News" element={<News/>}/>
                <Route path="/Music" element={<Music/>}/>
                <Route path="/Settings" element={<Settings/>}/>
            </Routes>
            <Header/>
            <Navbar/>
            <Sidebar store={props.store}/>
        </div>
    );
}

export default App;


