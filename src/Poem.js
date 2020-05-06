import React from "react";

class Poem extends React.Component {
  state = {
    read : false,
    status : "Mark as Read"
  }

  readPoem = () => {
    if(this.state.read === false){
      this.setState({read: true, status: "Mark as Unread"})
    }else{
      this.setState({read: false, status : "Mark as Read"})
    }
    }

    // deletePoem = (event) => {
    //   fetch(`http://localhost:6001/poems/${event.target.id}`,{
    //     method: 'Delete',
    //     headers: {
    //       'Content-Type' : 'application/json',
    //       Accept : 'application.json'
    //     },
    //     body: JSON.stringify({ })
    //   })
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    // }
  
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- {this.props.author}</strong>
        </p>
        <button onClick={() => this.readPoem()}>{this.state.status}</button>
        {/* <button id={this.props.id} onClick={(event) => this.deletePoem(event)}>Delete Poem</button> */}
      </div>
    );
  }
}

export default Poem;
