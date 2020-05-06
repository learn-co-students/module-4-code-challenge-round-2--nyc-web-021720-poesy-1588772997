import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const PoemsURL = 'http://localhost:3000/poems'
class App extends React.Component {

  state = {
    poems: [],
    display: false
  }

  componentDidMount(){
    fetch(PoemsURL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        poems: data
      })
    })
  }

  clickHandle = () => {
    this.setState({
      display: !this.state.display
    })
  }

  handleSubmit = (event, title, author, content) => {
    event.preventDefault()

    console.log(title, author, content)

    const newPoem = { 
      method: 'POST',
      headers: { 
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({ 
          title: title,
          author: author,
          content: content
        })
    };
    fetch(PoemsURL, newPoem)
    .then(resp => resp.json())
    .then(poem => this.setState({
      poems: [...this.state.poems, poem]
    }))
  }
  

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandle}>Show/hide new poem form.</button>
          {this.state.display && <NewPoemForm handleSubmit={this.handleSubmit}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
