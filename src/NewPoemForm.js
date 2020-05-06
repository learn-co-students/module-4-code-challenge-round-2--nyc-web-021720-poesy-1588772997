import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: '',
    author: '',
    content: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    let {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={(event) => this.props.handleSubmit(event, this.state.title, this.state.author, this.state.content)}>
        <input placeholder="Title" name='title' onChange={this.handleChange}/>
        <input placeholder="Author" name='author' onChange={this.handleChange}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name='content' onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
