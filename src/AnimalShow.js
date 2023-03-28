import cat from './animalImg/cat.jpg';
import dog from './animalImg/dog.jpg';
import cow from './animalImg/cow.jpg';
import horse from './animalImg/horse.jpg';
import rabbit from './animalImg/rabbit.jpg';
import heart from './animalImg/heart.jpg';

import { useState } from 'react';

import './AnimalShow.css';

const animalMap = {
    cat,
    dog,
    cow,
    horse,
    rabbit
};

function AnimalShow({type}){

    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
    };
    return <div className='app-animal' onClick={handleClick}>
                <img className="animal" alt={type} src={animalMap[type]} />
                <img 
                    className="heart"
                    alt="heart" 
                    src={heart}
                    style={{width: 10 + 10*clicks +'px'}} />
            </div>
}
export default AnimalShow;