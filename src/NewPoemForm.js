import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: null,
    author: null,
    content: null
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("submit")
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="new-poem-form">
        <input onChange={e => this.handleChange(e)} placeholder="Title" value={this.state.title} name="title" />
        <input onChange={e => this.handleChange(e)} placeholder="Author" value={this.state.author} name="author" />
        <textarea onChange={e => this.handleChange(e)} placeholder="Write your masterpiece here..." rows={10} value={this.state.content} name="content" />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
