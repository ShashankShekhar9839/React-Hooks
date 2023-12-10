import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"; 

// useref is basically used for storing values between re-renders 

function Useref() { 
    let [name, setName] = useState('Shashank')
    let inputRef = useRef(null);
    let previousName = useRef(null);
     
    function handleFocus() {
           inputRef && inputRef.current.focus();
    } 
    
    useEffect(()=>{
        previousName.current = name;
    }, [name])

    return(
        <div style={{border : '1px solid black', padding : '20px'}}>
            <h2>Use Ref example for functional component</h2> 
            <input  style={{padding:'10px'}} onChange={e => setName(e.target.value)} ref={inputRef} /> 
            <h2>My current name is {name}, previously it was {previousName.current}</h2>
            <button style={{marginTop : '15px'}} onClick={handleFocus}>Change State of Input</button>
        </div>
    )
} 

export default Useref;