import GrandChildComponent from "./GrandChildComponent";
import GrandChildFunctional from "./GrandChildFunctional";
 
let styles = {
    padding : '10px', 
    border : '1px solid black', 
    margin : '20px'
} 

function ChildComponent() {
  return (
    <> 
    <div style={styles}> 
        <h2>Class Component Example</h2>
    <GrandChildComponent />
    </div> 
    <div style={styles}> 
        <h2>Functional Component Example</h2>
        <GrandChildFunctional />
    </div>
    </>
  );
}

export default ChildComponent;
