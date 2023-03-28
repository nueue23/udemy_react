import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({book, onSubmit}){
    const {editBookById} = useContext(BooksContext);
    const handleSubmit = (event) =>{
        event.preventDefault();
        editBookById(book.id, title);
        //onSubmit(book.id, title);
        onSubmit();
    }
    const [title, setTitle] = useState(book.title);

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }
    return (<div className="book-edit">
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={changeTitle} />
            <button className="button is-primary">Save</button>
        </form>
        </div>);
}
export default BookEdit;