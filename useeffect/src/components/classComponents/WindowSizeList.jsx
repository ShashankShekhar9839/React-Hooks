import { Component } from "react";
import WindowSizeListParent from "./WindowSizeListParent";

class WindowSizeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };

    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  updateWindowWidth() {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  } 

  componentDidUpdate(prevProps, currentProps) {
    if(prevProps.count !== currentProps.count) {
        // console.log('prevProps', prevProps.count);
        // console.log('currentProps', this.props.count);

    }
  }

  render() { 
    const {count} = this.props;
    return (
      <div className="wrapper" style={{ fontWeight: "bold" }}>
        Window size class {this.state.windowWidth} 
        <div className="counter">
            <h2>Hii My counter is {count}</h2>
        </div>
      </div>
    );
  }
}

export default WindowSizeList;
