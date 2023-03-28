import { useState, useContext } from "react";
import BookEdit from './BookEdit';
import BooksContext from "../context/books";

//function BookShow({book, onDelete, onEdit}){
function BookShow({book}){
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useContext(BooksContext);
    const handleDeleteClick = ()=>{
        //onDelete(book.id);
        deleteBookById(book.id);
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    /*const handleEditSubmit = (id, newTitle) => {
        onEdit(id, newTitle);
        setShowEdit(false);
    };*/
    const handleEditSubmit = () => {
        setShowEdit(false);
    };
    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleEditSubmit} />;
    }
    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}
export default BookShow;