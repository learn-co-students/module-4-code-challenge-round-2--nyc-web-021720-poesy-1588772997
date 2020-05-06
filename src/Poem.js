import React from "react";

class Poem extends React.Component {


  handleDelete=(id)=>{
   
  
    fetch(`http://localhost:6001/poems/${id}`,{
      method: "DELETE",})
      .then(resp =>  resp.json())
      .then(result => this.setState({
      
      }))
  }

  
  render() {

    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
    <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={(e)=>this.handleDelete(this.props.poem.id)}>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
