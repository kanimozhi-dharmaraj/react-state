import React, { Component } from 'react'

export class ChildLifecycle extends Component {
    constructor(){
        super();
        console.log("constructor",constructor);
        this.state={
            name : "kani",
            count : 1
        }
    }
    componentDidMount(){
       this.timer = setInterval(()=>{
            console.log(this.setState({count:this.state.count+1}))
        },1000)
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    // shouldComponentUpdate(nextProps,nextState){
    //          console.log("nextState",nextState,"this.state",this.state,"nextProps",nextProps,"this.props",this.props)
    //          if(this.state.name!==nextState.name || this.props.dep!==nextProps.dep){
    //             return true;
    //          }
    //          else{
    //             return false;
    //          }
    //      }
  render() {
    console.log("render")
    return (
      <div>{this.state.name} {this.props.dep} {this.state.count}
        <button onClick={()=>this.setState({name:"updated"})}>Update name</button>
        
      </div>
    )
  }
}

export default ChildLifecycle