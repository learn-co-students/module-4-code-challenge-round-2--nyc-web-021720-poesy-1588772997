import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
// Joey Guzz was here

class App extends React.Component {
  state = {
    poems: [],
    showPoemForm: false,
    read: false
  }
  componentDidMount() {
    fetch("http://localhost:6001/poems")
      .then((res) => res.json())
      .then((poemData) => this.setState({
        poems: poemData
      }))
  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.onNewPoemClick}>Show/hide new poem form</button>
          {this.state.showPoemForm && <NewPoemForm />}
        </div>
        <PoemsContainer renderButtonReadText toggleRead={this.toggleRead} read={this.state.read} poems={this.state.poems}/>
      </div>
    );
  }

  onNewPoemClick = () => {
    this.setState({showPoemForm: !this.state.showPoemForm})
  }
  toggleRead = () => {
    console.log(this.state.read)
    this.setState({
      read: !this.state.read
    })
  }

  
}

export default App;
