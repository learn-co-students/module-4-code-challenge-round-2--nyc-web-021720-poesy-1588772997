import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  
  state = {
    poems : []
  }
  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(poems => this.setState({poems}))
  }




  render() {
    
    return (
      <div className="poems-container">
        {
          this.state.poems.map(poem => 
            <Poem key={poem.id} title={poem.title} author={poem.author} content={poem.content} poem={poem}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
