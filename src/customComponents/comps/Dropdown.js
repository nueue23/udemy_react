import { useState, useEffect, useRef } from "react";
import {GoChevronDown} from "react-icons/go";
import Panel from "./Panel";
function DropDown({options, value, onChange}){
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen);
    }
    const handleSelect = (option) => {
        setOpen(false);
        onChange(option);
    }
    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor:pointer p-1"
                onClick={()=>handleSelect(option)} 
                key={option.value}>{option.label}</div>
    });
    const divEl = useRef();
    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)){
                setOpen(false);
            }
        }
        document.addEventListener('click', handler, true);
        //cleanup function
        return () => {
          document.removeEventListener('click', handler);  
        };
    }, []);
    return (<div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor:pointer" 
            onClick={()=> handleClick()}>
            {value?.label || 'Select...'}
            <GoChevronDown className="text-lg"/>
        </Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>);
}
export default DropDown;