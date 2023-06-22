import { useReducer } from "react";
import Button from "../comps/Button";
import Panel from "../comps/Panel";

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_VALUE = 'change-value';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

function reducer(state, action){
    switch(action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                counter : state.counter + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                counter: state.counter -1
            }
        case CHANGE_VALUE:
            return {
                ...state,
                valueToAdd : action.payload
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                counter: state.counter + state.valueToAdd,
                valueToAdd: 0
            }
        default: return state;
    }
}
function CounterPage({initialCount}){
    //const [counter, setCounter] = useState(initialCount);
    //const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        counter: initialCount,
        valueToAdd : 0
    });
    /*useEffect(() => {
        console.log(state.counter);
    }, [state.counter]);*/
    const increment = () => {
        //setCounter(counter + 1);
        dispatch({
            type: INCREMENT_COUNT
        });
    }
    const decrement = () => {
        //setCounter(counter - 1);
        dispatch({
            type: DECREMENT_COUNT
        });
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        //setValueToAdd(value);
        dispatch({
            type: CHANGE_VALUE,
            payload: value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //setCounter(counter + valueToAdd);
        //setValueToAdd(0);
        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
    }
    return <Panel className="m-3">
        <h1 className="text-lg">Count is : {state.counter}</h1>
        <div className="flex flex-row">
            <Button onClick={increment} primary>Increment</Button>
            <Button onClick={decrement} primary>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot</label>
            <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" 
                value={state.valueToAdd || ""}
                onChange={handleChange} />
            <Button primary>Add It</Button>
        </form>
    </Panel>
}
export default CounterPage;