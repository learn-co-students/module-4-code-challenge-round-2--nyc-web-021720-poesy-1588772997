import React from "react";

class Poem extends React.Component {
  render() {
    // const {title, author, content} = this.props
    return (
      <div>
        <h3>Title: {this.props.poem.title}</h3>
        <p>Content:{this.props.poem.content}</p>
        <p>
    <strong>- By Author: {this.props.poem.author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
