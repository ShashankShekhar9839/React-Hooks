import { useEffect, useRef, useState } from "react";

function WindowSizeFunctional() {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
    const divRef = useRef(null); 

    const updateWindowWidth = () => {
        setWindowWidth(windowWidth.innerWidth)
        divRef.current.style.width = `${windowWidth / 2}px`;
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

    return (
        <div className="wrapper">
            <p>Window Size functional Wrapper</p>
             <h3>Hii, I will tell you window size {windowWidth}</h3> 
             <div style={{ border : '1px solid red', height : '50px', margin : '10px'}} ref={divRef}>My width is {windowWidth / 2}px</div>
           <button onClick={incraseWidth}>Increase Width</button>
        </div>
    )
}

export default WindowSizeFunctional;