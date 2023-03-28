import SearchBar from "./components/SearchBar";
import searchImageAPI from './searchImageAPI';
import ImageList from "./components/ImageList";
import {useState} from 'react';

function AppApi(){
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImageAPI(term);
        setImages(result);
    };
    return (<div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
    </div>);
}
export default AppApi;