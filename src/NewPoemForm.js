import React from "react";

class NewPoemForm extends React.Component {
  render() {
    console.log(this.props)

  
  
    return (
      <form onChange={this.props.handleNewPoem} className="new-poem-form">
        <input placeholder="Title" value={this.props.newPoem.title}/>
        <input placeholder="Author" />
        <textarea placeholder="Content" rows={10}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
