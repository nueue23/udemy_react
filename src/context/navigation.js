import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
const NavigationContext = createContext();
function NavigationProvider({children}){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(()=>{
        const handler = () => {
            console.log('inside handler');
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);
        return ()=>{
            console.log('inside cleanup');
            window.removeEventListener('popstate', handler);
        }
    }, []);
    const navigate = (to) =>{
        window.history.pushState({},'',to);
        setCurrentPath(to);
    };
    return <NavigationContext.Provider value={{currentPath, navigate}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}
export {NavigationProvider };
export default NavigationContext;