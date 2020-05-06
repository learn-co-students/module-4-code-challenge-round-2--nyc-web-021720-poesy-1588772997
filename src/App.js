import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    title: "",
    author: "",
    content: "",
    favorites: [],
    currentPoem: null
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

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    fetch("http://localhost:3000/poems", {
      method: "POST",
      headers: { "content-type": "application/json", "accept": "application/json" },
      body: JSON.stringify({
        "author": this.state.author,
        "content": this.state.content,
        "title": this.state.title
      })
    })
      .then(resp => resp.json())
      .then(poem => this.setState({
        poems: [...this.state.poems, poem],
        title: "",
        author: "",
        content: ""
      }))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  delete = e => {
    fetch(`http://localhost:3000/poems/${e.target.id}}`, {
      method: "DELETE",
      header: { "content-type": "application/json", "accept": "application/json" }
    })
    this.getPoems()
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.formButton()}>Show/hide new poem form</button>
          {this.state.show && <NewPoemForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}
            title={this.state.title} content={this.state.content} author={this.state.author} />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}
//wish me luck
export default App;
