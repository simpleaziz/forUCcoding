import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"
import {store} from "./redux"
import './index.css'
import Sidebar from './components/sidebar/sidebar'
import sidebar from './components/sidebar/sidebar'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
