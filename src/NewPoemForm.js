import React from "react";

class NewPoemForm extends React.Component {
  state = {
    newPoem: {
      title: '',
      content: '',
      author: ''
    }
  }
  // handleNewPoem = (e) => {
  //   this.setState( {
  //     newPoem: {
  //       e.target.placeholder: e.target.value
  //     }
  //   })
  // }
  render() {
    console.log(this.state)


  
  
    return (
      <form onChange={this.state.handleNewPoem} className="new-poem-form">
        <input placeholder="Title" value={this.state.newPoem.title}/>
        <input placeholder="Author" />
        <textarea placeholder="Content" rows={10}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
