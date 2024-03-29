import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import { Provider } from 'react-redux';
import './styles.css';


ReactDOM.render(
    <Provider store={store}>
    <div>Hello, world! Hello!!</div>
    </Provider>,
    document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);