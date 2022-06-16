import ReactDOM from 'react-dom/client';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from '../App';
import {addPost, addText, StateDataType} from './state';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerenderEntireTree = (state:StateDataType) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addText={addText}/>
            </BrowserRouter>
        </React.StrictMode>
    );

}