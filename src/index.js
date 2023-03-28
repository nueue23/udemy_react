//import  './books/index.css';
import './customComponents/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

/*import App from './App';
import AppAnimal from './AppAnimal';
import AppApi from './apis/AppApi';
import AppBooks from './books/AppBooks';

import BooksContext from './context/books';
import { Provider } from './context/books';*/

import AppCustomComponents from './customComponents/AppCustomComponents';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

//root.render(<App />);
//root.render(<AppAnimal />);
//root.render(<AppApi />);
/*root.render(<BooksContext.Provider value={5}>
        <AppBooks />
    </BooksContext.Provider>);*/
/*root.render(<Provider>
    <AppBooks />
</Provider>)*/
root.render(<AppCustomComponents />);