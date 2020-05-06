import React from "react";

class NewPoemForm extends React.Component {
  state = {
    newPoem : {}
  }

  handleFormChange = (e) => {
    this.setState({newPoem: {...this.state.newPoem, [e.target.name]:e.target.value}})
  }

  handlePost = () => {
    fetch('http://localhost:6001/poems',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        Accept : 'application.json'
      },
      body: JSON.stringify(this.state.newPoem)
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    
    return (
      <form className="new-poem-form">
        <input placeholder="Title" name="title" onChange={this.handleFormChange}/>
        <input placeholder="Author" name="author" onChange={this.handleFormChange}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" onChange={this.handleFormChange}/>
        <input type="submit" value="Share your masterpiece" onClick={this.handlePost}/>
      </form>
    );
  }
}

export default NewPoemForm;
