import React, { Component } from 'react';
class App extends Component {
  state={
    count:0,
    isOn:false,
    x:null,
    y:null
  }
  componentDidMount(){
    document.title=`You have been clicked ${this.state.count} times`
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  componentDidUpdate(){
    document.title=`You have been clicked ${this.state.count} times`
  }
  componentWillUnmount(){
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove=event=>{
this.setState({
  x:event.pageX,
  y:event.pageY
})
  }

  incrementCount = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  toggleLight=()=>{
    this.setState(prevState => ({ isOn: !prevState.isOn }));
   } 

  render() {
    return (
      <>
      <button onClick={this.incrementCount}>
      I was clicked {this.state.count} time
      </button>
      <div style={{height:"50px", width:"50px", 
      background:this.state.isOn?"yellow":"grey"}}
      onClick={this.toggleLight}></div>
      <h2>Mouse position</h2>
      <p>X position: {this.state.x}</p>
      <p>Y position: {this.state.y}</p>
</>
    );
  }
}

export default App;
