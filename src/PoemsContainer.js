import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  renderPoems = () => {
    return this.props.poems.map((poem) => <Poem toggleRead={this.props.toggleRead} read={this.props.read} poem={poem} key={poem.id} />);
  };
  render() {
    return <div className="poems-container">{this.renderPoems()}</div>;
  }
}

export default PoemsContainer;
