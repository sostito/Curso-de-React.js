import React from 'react';
import ReactDOM from 'react-dom';
import  'bootstrap/dist/css/bootstrap.css'

import './global.css'
import App from './components/App'

import { Provider } from 'react-redux';
import store from './redux/store'

const container = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
container);
