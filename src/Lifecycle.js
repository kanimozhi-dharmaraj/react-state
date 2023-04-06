import React, { Component } from 'react'
import ChildLifecycle from './ChildLifecycle';
//lifeCycle is used to monitor and manipulate during three phases
// 1.Initial Phase =>Constructor
// 2.Mounting phase
// 3. Updating Phase
export class Lifecycle extends Component {
    constructor(){
        super();
        console.log("Constructor");
        this.state={
            count : 1,
            age : 50,
            dep : "ece",
            show : true
        }
    }
    componentDidMount(){
        // setInterval(()=>{
         this.setState({count:this.state.count+1},()=>
         {console.log('this.state',this.state)});
        //         },
        // 1000);
        console.log("componentDidMount",this.state)
    }
    getData(){
        console.log("Hello World!");
    }
    componentDidUpdate(prevState){
        console.log("componentDidUpdate",this.state)
        if(prevState.age!==this.state.age){
            this.getData();
        }
    }
    // shouldComponentUpdate(){
    //     return false;
    // }
    
  render() {
    console.log("render");
    return (
      <div>Lifecycle {this.state.count} <button onClick={()=> this.setState({count:this.state.count+1})}>Update</button> 
      {this.state.age} <button onClick={()=>this.setState({age:20},(()=> this.getData()))}>Update Age</button>
      {this.state.dep}<button onClick={()=>this.setState({dep:"cse"})}> Update dep </button>
      <button onClick={()=>this.setState({show:!this.state.show})}>show/hide</button>
      {this.state.show ? <ChildLifecycle  dep={this.state.dep}/> : null}
      </div>
    )
  }
}

export default Lifecycle