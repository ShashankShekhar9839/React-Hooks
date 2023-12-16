import React from "react";
import WindowSizeList from "./WindowSizeList";

class WindowSizeListParent extends React.Component { 
    constructor() {
        super() 
            this.state = {
                counter  : 0,
        }
    }  

    handleIncremement = () => {
        this.setState({counter : this.state.counter + 1})
    } 

    componentDidUpdate(prevProps, prevState) {
        if(prevState.counter !== this.state.counter) {
            console.log(prevState.counter, 'fs' , this.state.counter)
            console.log('inside component did update')
        }
    }

    render() {
        return (
            <div>Window Parent   
                <div>
                <button onClick={this.handleIncremement}>Increment</button>
                </div>
             <WindowSizeList 
             count = {this.state.counter}
             />
            </div>
        )
    }
} 

export default WindowSizeListParent;