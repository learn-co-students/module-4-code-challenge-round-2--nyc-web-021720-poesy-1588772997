import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    favorites: []
  }

componentDidMount() {
  fetch('http://localhost:6001/poems')
  .then(response => response.json())
  .then(data => {
    this.setState({poems: data})
  })
}

handleaAddedPoem = (dataPoem) => {
  const addedPoem ={
    ...dataPoem,
    author: this.state.title
  }
}

fetch('http://localhost:6001/poems', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Application: 'application/json'
  },
  body: JSON.stringify(addedPoem)
})
  .then(response => response.json())
  .then(addNewPoem => {
    this.setState({poems: [...poem]})
  }


handledFavorited = (poem) => {
  this.setState({ favorites: [...this.state.favorites, poem]})
}


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm addedPoem={this.handleaAddedPoem}/>}
        </div>
        <PoemsContainer poems={this.state.favorites}/>
      </div>
    );
  }
}

export default App;
