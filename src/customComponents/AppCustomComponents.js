import { useState } from "react";
function AppCustomComponents(){
    const [temp, setTemp] = useState(0);
    const handleClick = () => {setTemp(temp+1)};
    return (<div style={{border:'1px solid red'}} onClick={handleClick}>
        {temp}
        <br/>
        </div>);
}
export default AppCustomComponents;