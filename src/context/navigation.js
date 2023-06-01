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
    return <NavigationContext.Provider value={{}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}
export {NavigationProvider };
export default NavigationContext;