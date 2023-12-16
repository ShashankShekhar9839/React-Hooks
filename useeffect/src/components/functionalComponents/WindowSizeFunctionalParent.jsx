import { useState } from "react";
import WindowSizeFunctional from "./WindowSizeFunctional";

function WindowSizeFunctionalParent() { 
     
    const [counter, setCounter] = useState(0); 

    let incerement = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="wrapper"> 
            <button onClick={incerement}>Increment</button>
            <WindowSizeFunctional  
             count = {counter}
            />
        </div>
    )
} 

export default WindowSizeFunctionalParent;