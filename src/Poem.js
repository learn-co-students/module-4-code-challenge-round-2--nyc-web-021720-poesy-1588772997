import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  handleClick = () => {
    this.setState({ read: !this.state.read })
  }

  handleFavoritedClick = () => {
    this.props.onFavorited(this.props.poem)
  }

  render() {
    let colorObj = {color: 'green'}   //differenctiate when it is clicked
    if (this.state.read) {
      colorObj.color = 'blue'
    }
    return (
      <div onClick={this.handleClick} style={colorObj}>
        <h3>{this.propts.poem.title}</h3>
        <p>{this.propts.poem.content}</p>
        <p>
          <strong>- By {this.propts.poem}</strong>
        </p>
        <button>onClick={this.handlehandleFavoritedClick}</button>
      </div>
    );
  }
}

export default Poem;
