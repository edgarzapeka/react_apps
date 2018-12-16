import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);