import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: ""
  }
  
  handleTitleChange = event => {
    this.setState({ title: event.target.value })
  }

  handleAuthorChange = event => {
    this.setState({ author: event.target.value })
  }

  handleContentChange = event => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = event => {
    fetch("http://localhost:6001/poems", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        content: this.state.content
      })
    })
    .then(response => response.json())
   
  }
  
  render() {
    console.log(this.state.title)
    return (
      <form className="new-poem-form" onSubmit={event => this.handleSubmit(event)}>
        <input placeholder="Title" value={this.state.value} onChange={event => this.handleTitleChange(event)}/>
        <input placeholder="Author" value={this.state.value} onChange={event => this.handleAuthorChange(event)}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} value={this.state.value} onChange={event => this.handleContentChange(event)}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
