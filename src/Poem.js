import React from "react";

class Poem extends React.Component {

  state = {
    markedRead: true
  }

  handleReadClick = () => {
    console.log("clicked")
    this.setState({ markedRead: !this.state.markedRead})
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
        <strong>-{this.props.poem.author}</strong>
        </p>
        <button onClick={this.handleReadClick}>{this.state.markedRead ? "Mark as read" : "Read!"}</button>
      </div>
    );
  }
}

export default Poem;
