import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {StoreType} from './Redux/Types';
import {store} from './Redux/store';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (store: StoreType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(store);
/*store.subscribe(rerenderEntireTree);*/
store.subscribe(() => {
    let state = store;
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
