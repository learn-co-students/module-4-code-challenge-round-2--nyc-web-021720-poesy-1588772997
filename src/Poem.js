import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  handleClick = () => {
    this.setState({
      read: !this.state.read
    })
  }

  render() {
    return (
      <div>
        <h3>Title: {this.props.poem.title}</h3>
        <p>Content: {this.props.poem.content}</p>
        <p>
        <strong>- By Author: {this.props.poem.author}</strong>
        </p>
        {this.state.read ? <button onClick={this.handleClick}>Read</button> : <button onClick={this.handleClick}>Mark as read</button>}
      </div>
    );
  }
}

export default Poem;
