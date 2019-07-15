// import React from 'react';
 import React, { Component } from 'react';
 
// const Common = (props) => {
//     return (
//         <div>
//             name : {props.name}
//         </div>
//     );
// }
 
// export default Common;

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date : new Date(),
            incre : 0 ,
            hi : "ali"

         }
    }
    componentDidMount(){
        setInterval(()=>{
        this.setState({
        date : new Date()
  })
        },1000)
    }
    onBuClick=()=>
    
      
      {  this.setState({
           incre : this.state.incre + 1 ,
      })}
    
    onCuClick=()=>
   { if(this.state.incre>=1)
       { this.setState({
           incre : this.state.incre - 1,
         
      })}}
      
      
    
    render() { 
        return(
            <div>
                <h1>Time : {this.state.date.toLocaleTimeString()}</h1>
                <button onClick={this.onBuClick} > increment</button>
               
                <button onClick={this.onCuClick} >decrement </button>
                <p>{this.state.incre}</p>
                <p>{this.state.hi}</p>
            </div>    
        )
    }
}
 

