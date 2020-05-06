import React from "react";

class Poem extends React.Component {

  


  handleDelete=(id)=>{
   
  
    fetch(`http://localhost:6001/poems/${id}`,{
      method: "DELETE",})
      .then(resp =>  resp.json())
      .then(result => this.props.deleteForm(result))
  }

  
  render() {

    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
    <strong>- {this.props.poem.author}</strong>
        </p>
        {/* misunderstanding "Mark as read" as a delete button instead of changing to "Mark as unread"  */}
        <button onClick={(e)=>this.handleDelete(this.props.poem.id)}>Mark as read</button>
        {/* this one is last minute I added if I have time .. and change the above code for toggling the "mark as read" and "mark as unread"  */}
        {/* <button onClick={(e)=>this.handleDelete(this.props.poem.id)}>Delete</button> */}

      </div>
    );
  }
}

export default Poem;
