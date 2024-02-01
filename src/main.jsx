import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Router from './Router';
import { RouterProvider } from 'react-router';
import store from './Redux/store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={Router} />
        </Provider>
    </React.StrictMode>
);
