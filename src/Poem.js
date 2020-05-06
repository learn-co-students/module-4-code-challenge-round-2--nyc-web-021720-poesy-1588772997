import React from "react";

class Poem extends React.Component {
  state = {
    read : false,
    status : "Mark as read"
  }

  readPoem = () => {
    if(this.state.read === false){
      this.setState({read: true, status: "Mark as unread"})
    }else{
      this.setState({read: false, status : "Mark as read"})
    }
    }
  
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- {this.props.author}</strong>
        </p>
        <button onClick={() => this.readPoem()}>{this.state.status}</button>
      </div>
    );
  }
}

export default Poem;
