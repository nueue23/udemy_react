import { useState , useEffect, useContext } from "react";
import BookCreate from './BookCreate';
import BookList from "./BookList";
///import axios from "axios";
import BooksContext from "../context/books";

function AppBooks(){
    const {fetchBooks} = useContext(BooksContext);

    /*const [books, setBooks] = useState([]);
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }*/
    //load books from db on initial page render
    /*const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }*/
    useEffect(() => {fetchBooks();}, [fetchBooks]);

    /*const deleteBookById = async(id) =>{
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
    };*/
    /*return (<div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />
    </div>);*/
    return (<div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>);
}
export default AppBooks;