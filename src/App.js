import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: []
  }

  getPoems = () => {
    fetch("http://localhost:3000/poems")
      .then(resp => resp.json())
      .then(data => this.setState({ poems: data }))
  }

  componentDidMount() {
    this.getPoems()
  }

  formButton = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.formButton()}>Show/hide new poem form</button>
          {this.state.show && <NewPoemForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}
//wish me luck
export default App;
