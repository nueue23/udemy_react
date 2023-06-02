import Route from "./comps/Route";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./comps/Sidebar";
import ModalPage from "./pages/ModalPage";
function AppCustomComponents(){
    return (<div className="container mx-auto grid grid-cols-6 gap-4 mt-4" >
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
            <Route path="/modal">
                <ModalPage />
            </Route>
            <Route path="/">
                <DropdownPage />
            </Route>
        </div>
        </div>);
}
export default AppCustomComponents;