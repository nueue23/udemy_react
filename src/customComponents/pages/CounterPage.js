import { useState, useEffect } from "react";
import Button from "../comps/Button";
function CounterPage({initialCount}){
    const [counter, setCounter] = useState(initialCount);
    useEffect(() => {
        console.log(counter);
    }, [counter]);
    const handleClick = () => {
        setCounter(counter + 1);
    }
    return <div>
        <h1>Count is : {counter}</h1>
        <Button onClick={handleClick} primary>Increment</Button>
    </div>
}
export default CounterPage;