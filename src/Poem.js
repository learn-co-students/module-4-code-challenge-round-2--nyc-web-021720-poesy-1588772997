import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  onClick = () => {
    this.setState({ read: !this.state.read })
  }

  deleteButton = () => {
    console.log(this.props.data.id)
    fetch(`http://localhost:3000/poems/${this.props.data.id}`, {
      method: "DELETE",
      header: { "content-type": "application/json", "accept": "application/json" }
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.data.title}</h3>
        <p>{this.props.data.content}</p>
        <p>
          <strong>- By {this.props.data.author}</strong>
        </p>
        <button onClick={() => this.onClick()}>{this.state.read ? "Read, Bro" : "Mark as read"}</button>
        <button id={this.props.data.id} onClick={() => this.deleteButton()}>Delete</button>
      </div>
    );
  }
}

export default Poem;
