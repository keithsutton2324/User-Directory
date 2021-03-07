import React from "react";

class Reset extends React.Component{
    state ={
        ResetString:""
    }
    getInput= (event) => {
        var usertext = event.target.value;
        this.setState({
            ResetString : usertext
        })
        console.log(this.state.ResetString)
    }
    ResetEmployee = () => {
        this.props.handleReset(this.state.ResetString)
    }
    render(){
        return(<div>
            <p align="center">
            <button onClick={this.ResetEmployee}>Reset</button>
            </p>
        </div>)
    }
}

export default Reset;
