import '../css/SearchBar.css';

import {useState} from 'react';

function SearchBar({onSubmit}){
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };
    const onTermChange = (event) => {
        setTerm(event.target.value);
    };
    return (<div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter search term: </label>
            <input name="term" onChange={onTermChange} />
        </form>
    </div>);
}
export default SearchBar;