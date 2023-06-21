import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';
import {Provider} from "react-redux";
import {store} from "./redux/Store";

ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);