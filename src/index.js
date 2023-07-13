//import  './books/index.css';
import './customComponents/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

//import { Provider } from 'react-redux';
//import {store} from './testing/users/store';
import AppUsers from './testing/users/AppUsers';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<AppUsers />);

