import { Component } from "react";
import { ThemeContext } from "../App";

class GrandChildComponent extends Component { 

    render() {
        return (
            <ThemeContext.Consumer>
                {({theme, setTheme, name, setName}) => {
                    return (
                        <>
                         <div className="theme-wrapper">The theme is {theme}</div> 
                         
                         <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change Theme</button>
                         <>
                        <div>The name is {name}</div>
                        <button onClick={() => setName(name === 'Shashank' ? 'Yadav' : 'Shashank')}>Change Name</button>
                        </>
                        </>
                    )
                }} 

              

         
            </ThemeContext.Consumer>
        )
    }
}

export default GrandChildComponent;