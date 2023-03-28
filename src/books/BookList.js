import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

//function BookList({books, onDelete, onEdit}){
    function BookList(){
    const {books} = useContext(BooksContext);
    const renderedBooks = books.map((book) => {
        //return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />;
        return <BookShow key={book.id} book={book} />;
    });
    //const num = useContext(BooksContext);
    //const {count, incrementCount} = useContext(BooksContext);
    return (
        <div className="book-list">
            {renderedBooks}
        </div>);
}
export default BookList;