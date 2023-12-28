import { useContext } from "react";
import { ThemeContext } from "../App";

function GrandChildFunctional() { 
    const {theme, setTheme} = useContext(ThemeContext)
    let styles = {
         backgroundColor : `${theme ===  'dark' ? 'black' : 'white'}`, 
         color : `${theme === 'dark' ? 'white' : 'black'}`
    }

    return (
        <>
        <div style={styles}>The theme is {theme}</div> 
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Chnage Theme</button>
        </>
    )
} 

export default GrandChildFunctional;