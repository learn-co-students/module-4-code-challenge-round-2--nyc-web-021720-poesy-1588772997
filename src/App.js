import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showPoemForm: false,
    formInput: ""
  }

  componentDidMount() {
    fetch("http://localhost:6001/poems")
    .then(response => response.json())
    .then(data => this.setState({ poems: data}))
  }

  handleClick = () => {
   this.setState({ showPoemForm: !this.state.showPoemForm})
  }

  handleChange = event => {
    this.setState({ formInput: event.target.value })
   }
  

  render() {

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.showPoemForm ? <NewPoemForm handleChange={this.handleChange} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}


export default App;


// {false && <NewPoemForm />}
