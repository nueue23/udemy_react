import { useState, useContext } from "react";
import BooksContext from "../context/books";

//function BookCreate({onCreate}){
function BookCreate(){

    const {createBook} = useContext(BooksContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        //onCreate(title);
        createBook(title);
        setTitle('');
    }

    const [title, setTitle] = useState('');

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }
    
    return (<div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={changeTitle} />
            <button className="button">Create!</button>
        </form>
    </div>);
}
export default BookCreate;