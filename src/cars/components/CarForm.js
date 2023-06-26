import { useDispatch, useSelector } from "react-redux";
import {changeName, changeCost, addCar} from "../store";
function CarForm(){
    const dispatch = useDispatch();
    const handleNameChange = (event)=>{
        dispatch(changeName(event.target.value));
    };
    const handleCostChange = (event)=>{
        dispatch(changeCost(parseFloat(event.target.value) || 0.0));
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addCar({name, cost}));
    }
    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    });
    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded" 
                           value={name}
                           onChange={handleNameChange}></input>
                </div>
            </div>
            <div className="field-group">
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expanded" 
                           value={cost || ''}
                           onChange={handleCostChange}
                           type="number"></input>
                </div>
            </div>
            <div className="field">
                <button className="button is-Link">Submit</button>
            </div>
        </form>
    </div>;
}

export default CarForm;