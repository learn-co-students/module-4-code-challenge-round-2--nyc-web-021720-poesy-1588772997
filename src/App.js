import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
const poemUrl = "http://localhost:6001/poems"
//Sam starting
class App extends React.Component {
  state = {
    poems: [],
    show: false,
    read: false,
    text: "Mark as read"
  }

  componentDidMount(){
    fetch(poemUrl)
      .then(res => res.json())
      .then(data => this.setState({ poems: data}))
  }

  showPoems = ()=>{
    this.setState({show: !this.state.show})
  }

  addPoems = (newPoem)=>{
    this.setState({poems: [...this.state.poems, newPoem]})
  }

  handleRead = (e)=>{
    console.log(e.target.value)
    this.setState({read: !this.state.read, text: "Read"})
      if(this.state.read ){
        e.target.textContent = "Mark as read" 
       } 
       else{
         e.target.textContent = "Read"
       }
    
    // e.target.textContent= this.state.text
  }
  
  handleText = (e)=>{
    if(this.state.read){
      e.target.textContent = "Read"
    }
    else{
      e.target.textContent = "Mark as read"
    }
     
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.read !== this.state.read){
  //     this.state.text = "Read"
  //   }
  // }

  render() {
    const text = this.state.read ? "Read" : "Mark as read"
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showPoems}>Show/hide new poem form</button>
          {this.state.show && <NewPoemForm addPoems={this.addPoems}/>}
        </div>
        <PoemsContainer poems={this.state.poems} handleRead={this.handleRead} read={text}/>
      </div>
    );
  }
}

export default App;
