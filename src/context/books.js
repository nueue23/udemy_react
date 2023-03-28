import {createContext, useState, useCallback} from 'react';
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){
    /*const [count, setCount] = useState(5);
    const valueToShare = {
        count: count,
        incrementCount: () => {setCount(count + 1);}
    }*/
    const [books, setBooks] = useState([]);
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }
    //load books from db on initial page render
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    },[]);
    const deleteBookById = async(id) =>{
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book)=>{
            return (book.id !== id);
        });
        setBooks(updatedBooks);
    };
    const editBookById = async (id, newTitle)=>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        });
        const updatedBooks = books.map((book)=>{
            if (book.id === id){
                return {
                    ...book, ...response.data
                };
            }
            return book;
        });
        setBooks(updatedBooks);
    };
    const valueToShare = {
        books,
        createBook,
        fetchBooks,
        deleteBookById,
        editBookById
    };
    return (<BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>)
}

export {Provider};
export default BooksContext;