import { configureStore } from "@reduxjs/toolkit";
import { changeName, changeCost, formReducer } from "./slices/FormSlice";
import { addCar, removeCar, changeSearchTerm, carsReducer } from "./slices/CarsSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export {store, changeName, changeCost, addCar, removeCar, changeSearchTerm};