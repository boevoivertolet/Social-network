import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from 'uuid';

export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
let postData = [
    {id: v1(), message: 'message1', likesCount: 3},
    {id: v1(), message: 'message2', likesCount: 5}
]
export type DialogDataType = {
    id: string
    name: string
}
let dialogData = [
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Ulya'}

]
export type MessageDataType = {
    id: string
    messageText: string
}
let messageData = [
    {id: v1(), messageText: 'text1'},
    {id: v1(), messageText: 'text2'}
]


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App postData={postData} dialogData={dialogData} messageData={messageData} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
