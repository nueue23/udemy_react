import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import 'bulma/css/bulma.min.css';
import './styles.css';

function AppCars(){
    return (<div>
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
    </div>);
}

export default AppCars;