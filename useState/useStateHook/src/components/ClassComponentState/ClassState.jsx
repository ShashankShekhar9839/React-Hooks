import { Component } from "react";

class ClassState extends Component { 

    // state is maintained inside this component itself

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count : 0,
    //         color : 'black',
    //     }
    // } 
    
    //  increaseCount() {
    //     this.setState(prevState=> {
    //         return {count : prevState.count + 1, 
    //         color : 'blue',
    //         }
    //     })
    // } 

    // decreaseCount() {
    //     this.setState(prevState=> { 
    //         if(prevState.count > 0) {
    //             return {count : prevState.count - 1, 
    //                 color : 'red',
    //                 }
    //         }
    //         else {
    //             alert("you can't decrease me below 0" );
    //         }

    //     })
    // } 


    // below code is state from parent component 

    // constructor(props) {
    //     super(props);
    // } 


    render() {
        let {count, color, handleIncrease, handleDecrease} = this.props;
        return ( 

            // below structure for state maintained inside this component itself

            // <div style={{border : '1px solid black', padding : '20px'}}>
            //     <h2>Class component state management example</h2> 
            //     <h2>Hii, my count is <span className="counter-span" style={{backgroundColor : this.state.color, color : 'white'}}> {this.state.count} </span> Click below buttons to change me</h2>
            //     <button onClick={() => this.increaseCount()}>Increase</button>
            //     <button onClick={()=>this.decreaseCount()}>Decrease</button>

            // </div> 

            // below code is for state maintained in its parent component
            
            <div style={{border : '1px solid black', padding : '20px'}}>
            <h2>Class component state management example</h2> 
                 <h2>Hii, my count is <span className="counter-span" style={{backgroundColor : color, color : 'white'}}> {count} </span> Click below buttons to change me</h2>
                 <button onClick={handleIncrease}>Increase</button>
                 <button onClick={handleDecrease}>Decrease</button>
            </div>
        )
    }
} 

export default ClassState;