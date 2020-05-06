import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.data.title}</h3>
        <p>{this.props.data.content}</p>
        <p>
          <strong>- By {this.props.data.author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
