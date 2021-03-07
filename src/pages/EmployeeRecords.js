import React from "react";
function EmployeeRecord(props){
    return(<tr>
        <td>{props.firstname}</td>
        <td>{props.lastname}</td>
        <td>{props.gender}</td>
        <td>{props.email}</td>
        <img src={props.picture}></img>
    </tr>)
}

export default EmployeeRecord;