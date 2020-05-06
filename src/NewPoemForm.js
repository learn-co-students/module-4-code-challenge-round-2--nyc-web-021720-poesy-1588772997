import React from "react";

class NewPoemForm extends React.Component {
  
  render() {
    
    return (
      <form className="new-poem-form" onSubmit={() => {}}>
        <input placeholder="Title" value={this.props.formInput} onChange={event => this.props.handleChange(event.target.value)}/>
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
