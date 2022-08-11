import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
/*import {store} from './Redux/store';*/
import store from './Redux/reduxStore';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: any) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    /*store={store}*/
                    store={store}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());
/*store.subscribe(rerenderEntireTree);*/
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
