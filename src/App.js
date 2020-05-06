import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
const poemUrl = "http://localhost:6001/poems"
//Sam starting
class App extends React.Component {
  state = {
    poems: [],
    show: false,
    read: false
  }

  componentDidMount(){
    fetch(poemUrl)
      .then(res => res.json())
      .then(data => this.setState({ poems: data}))
  }

  showPoems = ()=>{
    this.setState({show: !this.state.show})
  }

  addPoems = (newPoem)=>{
    this.setState({poems: [...this.state.poems, newPoem]})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showPoems}>Show/hide new poem form</button>
          {this.state.show && <NewPoemForm addPoems={this.addPoems}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
