import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {addMessage, addPost, changeMessage, changeText, state, StateDataType, subscribe} from './Redux/state';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

 const rerenderEntireTree = (state: StateDataType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    changeText={changeText}

                    changeMessage={changeMessage}
                    addMessage={addMessage}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(state);
/*subscribe(rerenderEntireTree);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
