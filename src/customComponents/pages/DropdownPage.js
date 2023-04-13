import DropDown from "./comps/Dropdown";
import { useState } from "react";
function DropdownPage(){
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelect = (option) =>{
        setSelectedOption(option);
    }
    const options = [
        {label:'Red', value:'red'},
        {label:'Green', value:'green'},
        {label:'Blue', value:'blue'}
    ];
    return <DropDown options={options} 
                     value={selectedOption}
                     onChange={handleSelect} />;
}
export default DropdownPage;