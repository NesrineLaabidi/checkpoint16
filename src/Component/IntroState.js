import React, { Component } from 'react'
export class IntroState extends Component{
    constructor (props){
        console.log("constructors()")
        super(props)
        this.state = {
            count:0,
            timer:0,
            interval:null
        }
    }
    
    reset =()=>{
        this.setState({count:this.state.count=0})
    }
    componentDidMount(){
        this.timerId = setInterval(() =>
        this.setState({count: this.state.count+1,}),1500
        );
      }
    render() {
        return(
            <div>               
                <button>{this.state.count}</button>
                <button onClick={this.reset}>Reset</button>
            </div>

        );
    }
}
