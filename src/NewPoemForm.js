import React from "react";

class NewPoemForm extends React.Component {
  state = {

  }


  render() {
    return (
      <form onSubmit={e => this.props.handleSubmit(e)} className="new-poem-form">
        <input onChange={e => this.props.handleChange(e)} placeholder="Title" value={this.props.title} name="title" />
        <input onChange={e => this.props.handleChange(e)} placeholder="Author" value={this.props.author} name="author" />
        <textarea onChange={e => this.props.handleChange(e)} placeholder="Write your masterpiece here..." rows={10} value={this.props.content} name="content" />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
