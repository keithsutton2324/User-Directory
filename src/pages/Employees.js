import React from "react";
import axios from "axios";
import EmployeeRecord from "./EmployeeRecords";
import Search from "./Search";

class Employees extends React.Component {
    state = {
        employeeRecords: [],
        masterEmployeeRecords: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then(apiData => {

                let apiresult = apiData.data.results
                console.log("API", apiresult)
                let employeedb = []
                for (let n = 0; n < apiresult.length; n++) {
                    employeedb.push({
                        firstname: apiresult[n].name.first,
                        lastname: apiresult[n].name.last,
                        gender: apiresult[n].gender,
                        email: apiresult[n].email,
                        picture: apiresult[n].picture.thumbnail
                    })
                }
                this.setState({
                    employeeRecords: employeedb,
                    masterEmployeeRecords: employeedb
                })
                console.log(this.state.employeeRecords)
            })
    }
    handleSearchEmployee = (searchString) => {
        console.log(searchString)

        var searchEmployees = []
        let employeesList = this.state.masterEmployeeRecords
        for (let i = 0; i < employeesList.length; i++) {
            if (employeesList[i].firstname.toUpperCase() ==
                searchString.toUpperCase() ||
                (employeesList[i].lastname.toUpperCase() ==
                    searchString.toUpperCase())) {
                searchEmployees.push(employeesList[i])
            }
        }
        this.setState({
            employeeRecords: searchEmployees
        })
    }
    render() {
        return (<div>
            <h1>Employee Directory</h1>
            <Search
                handleSearch={this.handleSearchEmployee} />
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employeeRecords.map((rec, key) => {
                        return (
                            <EmployeeRecord
                                firstname={rec.firstname}
                                lastname={rec.lastname}
                                gender={rec.gender}
                                email={rec.email}
                                picture={rec.picture}
                                key={key}
                            />
                        )
                    })}
                </tbody>

            </table>
        </div>)
    }
}

export default Employees;
