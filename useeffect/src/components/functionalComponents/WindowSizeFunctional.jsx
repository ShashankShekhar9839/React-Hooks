import { useEffect, useRef, useState } from "react";

function WindowSizeFunctional({count}) {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
    const divRef = useRef(null); 

    const updateWindowWidth = () => {
        setWindowWidth(windowWidth.innerWidth) 
        if(divRef) {
            divRef.current.style.width = `${windowWidth / 2}px`;
        }
    } 

    const incraseWidth = (prevWidth) => {
         setWindowWidth(prevWidth => prevWidth + 1)
    }

    useEffect(()=>{
        window.addEventListener("resize", updateWindowWidth) 
       
        // this return function will remove the event listener 
        // Basically the role of this function is to clean up the side effect
        return function(){
            window.removeEventListener("resize", updateWindowWidth)
        }
    }, [windowWidth]) 

    // useeffect for prop change 

    useEffect(()=> {
        console.log('my value is changed')
    }, [count])

    return (
        <div className="wrapper"> 
        <h4>I am counter present in parent and my value is {count}</h4> 
            <p>Window Size functional Wrapper</p>
             <h3>Hii, I will tell you window size {windowWidth}</h3> 
             <div style={{ border : '1px solid red', height : '50px', margin : '10px'}} ref={divRef}>My width is {windowWidth / 2}px</div>
           <button onClick={incraseWidth}>Increase Width</button>
        </div>
    )
}

export default WindowSizeFunctional;