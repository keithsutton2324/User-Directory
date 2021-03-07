import React from "react";

class Sort extends React.Component{
    state ={
        sortString:""
    }
    getInput= (event) => {
        var usertext = event.target.value;
        this.setState({
            sortString : usertext
        })
        console.log(this.state.sortString)
    }
    sortEmployee = () => {
        this.props.handleSort(this.state.sortString)
    }
    render(){
        return(<div>
            <input type="text" onChange={this.getInput} name="sortStr" value={this.state.sortString} />
            <button onClick={this.sortEmployee}>Sort Employees by Gender</button>
        </div>)
    }
}

export default Sort;
