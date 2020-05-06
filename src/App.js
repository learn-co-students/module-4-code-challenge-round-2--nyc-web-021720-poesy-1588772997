import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    visible : false
  }

  toggleState = () => {
    if(this.state.visible === false){
      this.setState({visible: true})
    }else{
      this.setState({visible: false})
    }
  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.toggleState()}>Show/hide new poem form</button>
          {this.state.visible ? <NewPoemForm /> : null}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
