import { useState, useEffect } from "react";
import Button from "../comps/Button";
import Panel from "../comps/Panel";

function CounterPage({initialCount}){
    const [counter, setCounter] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0);
    useEffect(() => {
        console.log(counter);
    }, [counter]);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        setValueToAdd(value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setCounter(counter + valueToAdd);
        setValueToAdd(0);
    }
    return <Panel className="m-3">
        <h1 className="text-lg">Count is : {counter}</h1>
        <div className="flex flex-row">
            <Button onClick={increment} primary>Increment</Button>
            <Button onClick={decrement} primary>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot</label>
            <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" 
                value={valueToAdd || ""}
                onChange={handleChange} />
            <Button primary>Add It</Button>
        </form>
    </Panel>
}
export default CounterPage;