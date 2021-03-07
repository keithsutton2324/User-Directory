import React from "react";

class Search extends React.Component{
    state ={
        searchString:""
    }
    getInput= (event) => {
        var usertext = event.target.value;
        this.setState({
            searchString : usertext
        })
        console.log(this.state.searchString)
    }
    searchEmployee = () => {
        this.props.handleSearch(this.state.searchString)
    }
    render(){
        return(<div>
            <input type="text" onChange={this.getInput} name="searchStr" value={this.state.searchString} />
            <button onClick={this.searchEmployee}>Search Employee</button>
        </div>)
    }
}

export default Search;
