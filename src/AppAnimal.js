import {useState} from 'react';
import AnimalShow from './AnimalShow';
import './AppAnimal.css';

function makeRandomAnimal(){
    const animals = ['dog', 'cat','rabbit','horse','cow'];
    return animals[Math.floor(Math.random() * animals.length)];
}
function AppAnimal(){
    const [count, setCount] = useState(0);
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setCount(count + 1);
        setAnimals([...animals, makeRandomAnimal()]);
    }
    const animalMap = animals.map((animal, index) => {
         return <AnimalShow type={animal} key={index} />
    });
    return <div className='appAnimal'>
                <button onClick={handleClick}>Add Animal</button>
                <div>Animals Added: {count}</div>
                <div className="animals-list">{animalMap}</div>
            </div>
}
export default AppAnimal;