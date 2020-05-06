import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.poems.map(poem => {
            return <Poem key={poem.id} data={poem} />
          })
        }
      </div>
    );
  }
}

export default PoemsContainer;
