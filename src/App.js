import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: []
  }

componentDidMount() {
  fetch('http://localhost:6001/poems')
  .then(response => response.json())
  .then(data => {
    this.setState({poems: data})
  })
}

// handleaddedPoem = (data) => {
//   const addedPoem ={
//     ...data,
//     author: this.state.title
//   }
// }



  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
