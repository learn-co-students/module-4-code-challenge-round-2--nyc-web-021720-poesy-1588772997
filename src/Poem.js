import React from "react";

class Poem extends React.Component {


  handleDelete=(id)=>{
   
  let poemId=this.props.poem.find(poem => poem.id === id)
  console.log(poemId)
    fetch(`http://localhost:6001/poems/${poemId}`,{
      method: "POST",
      headers:{
        "content-type" :"application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
          // title:this.state.title,
          // author: this.state.author,
          // content: this.state.content
      })
    })
  }

  
  render() {

    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
    <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={this.handleDelete}>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
