import { useState } from "react";

function FunctionalComponent() { 
    const [counter, setCounter] = useState({
        count : 0, 
        color : 'black',
    }) 
    
    function handleIncrease() {
    setCounter({
        count : counter.count + 1,
        color : 'blue'
    })
    } 

    function handleDecrease() {
        if(counter.count > 0) {
         setCounter({
            count : counter.count - 1, 
            color : 'red'
         })
        } 
        else {
            alert ("you can't decrease me below 0")
        }
        
    }

    return (
        <div style={{border : '1px solid black', margin : '20px 0px', padding : '20px'}}>
            <h2>State management from functional component example</h2> 
            <h2>Hii, my count is <span className="counter-span" style={{backgroundColor : counter.color, color : 'white'}}>{counter.count}</span> Click below buttons to change my value</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
} 

export default FunctionalComponent;