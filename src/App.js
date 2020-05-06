import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems:[],
    toggle: false
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        poems: data
      })
    })
  }

  handleToggle=()=>{
    this.setState({
      toggle: !this.state.toggle
    })
  }


  addForm=(newpoems)=>{
    this.setState({
      poems:[...this.state.poems,newpoems]
    })
  }

  deleteForm=()=>{
    // slicing the last index of the array 
let form=this.state.poems.slice(0,this.state.poems.length-1)
    
    this.setState({
      poems:form
    })
  }



  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={()=>this.handleToggle()}>Show/hide new poem form</button>
          {this.state.toggle && <NewPoemForm addForm={this.addForm}/>}
        </div>
        <PoemsContainer poems={this.state.poems} deleteForm={this.deleteForm}/>
      </div>
    );
  }
}

export default App;
