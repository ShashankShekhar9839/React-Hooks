import { Component } from "react";
import ClassState from "./ClassState";

class ParentClassState extends Component {
     
        constructor(props) {
        super(props);
        this.state = {
            count : 0,
            color : 'black',
        }
    } 
    
     increaseCount = () => {
        this.setState(prevState=> {
            return {count : prevState.count + 1, 
            color : 'blue',
            }
        })
    } 

    decreaseCount = () => {
        this.setState(prevState=> { 
            if(prevState.count > 0) {
                return {count : prevState.count - 1, 
                    color : 'red',
                    }
            }
            else {
                alert("you can't decrease me below 0" );
            }

        })
    } 
     
    componentDidUpdate(prevState) {
        if(prevState.count !== this.state.count) {
            console.log('i am rendered due to change in component did update');
        }
    }

    render(){
        return (
            <div className="parent-class-wrapper">
             <ClassState count = {this.state.count} color = {this.state.color} handleDecrease = {this.decreaseCount} handleIncrease = {this.increaseCount} />
            </div>
        )
    }
}

export default ParentClassState;