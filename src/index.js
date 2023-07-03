//import  './books/index.css';
import './customComponents/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import {store} from './media/store';
import AppMedia from './media/AppMedia';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<Provider store={store}>
        <AppMedia />
    </Provider>);

