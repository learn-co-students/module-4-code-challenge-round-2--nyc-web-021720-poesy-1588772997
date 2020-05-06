import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: '',
    author: '',
    content: ''
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value})
  }

  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value})
  }

  handleContentChange = (e) => {
    this.setState({ content: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPoem(this.state)
    this.setState({title: '', author: '', content: ''})
  }

  render() {
    return (
     <div className="add-poem">
        <form onSubmit={this.handleSubmit} className="add-poem-form">
          <input onChange={this.handleTitleChange} value={this.state.title} placeholder="Title" />
          <input onChange={this.handleAuthorChange} value={this.state.title}  placeholder="Author" />
          <textarea onChange={this.handleContentChange} value={this.state.title} placeholder="Write your masterpiece here..." rows={10} />
          <input type="submit" value="Share your masterpiece" />
        </form>
      </div>
    )
  }
}

export default NewPoemForm;
