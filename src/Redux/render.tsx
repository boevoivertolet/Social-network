import ReactDOM from 'react-dom/client';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from '../App';
import {addPost, StateDataType} from './state';





export const rerenderEntireTree = (state:StateDataType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>
    );

}