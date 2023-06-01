import { useState } from "react";
//import Link from "./comps/Link";
import Route from "./comps/Route";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./comps/Sidebar";
function AppCustomComponents(){
    const [temp, setTemp] = useState(0);
    const handleClick = () => {setTemp(temp+1)};
    return (<div className="container mx-auto grid grid-cols-6 gap-4 mt-4" onClick={handleClick}>
        <Sidebar />
        <div className="col-span-5">
            <Route path="/button">
                <ButtonPage />
            </Route>
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/dropdown">
                <DropdownPage />
            </Route>
            <Route path="/">
                <DropdownPage />
            </Route>
        </div>
        </div>);
}
export default AppCustomComponents;