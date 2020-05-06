import React from "react";

class NewPoemForm extends React.Component {

  state={
    title:'',
    author:'',
    content:'',
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  handleSubmit=(e)=>{
    e.preventDefault()

    fetch('http://localhost:6001/poems',{
      method: "POST",
      headers:{
        "content-type" :"application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
          title:this.state.title,
          author: this.state.author,
          content: this.state.content
      })
    })
    .then(resp =>resp.json())
    .then(newPoem => this.props.addForm(newPoem))
    .then(this.setState({
      state ={
        title:'',
        author:'',
        content:'',
      }
    }))
  }


  render() {
    // let toggled=this.state.toggle && 
    return (
      <form className="new-poem-form" >
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
