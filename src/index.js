//import  './books/index.css';
import './customComponents/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import AppPlaylist from './playlist/AppPlaylist';
import { Provider } from 'react-redux';
import {store} from './playlist/store';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<Provider store={store}>
        <AppPlaylist />
    </Provider>);

