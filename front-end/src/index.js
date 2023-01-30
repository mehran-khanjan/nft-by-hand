import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/bootstrap-reboot.min.css';
import './assets/css/bootstrap-grid.min.css';
import './assets/css/blueimp-gallery.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/select2.min.css';
import './assets/css/splide.min.css';
import './assets/css/main.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import reduxStore from "./store/ReduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
