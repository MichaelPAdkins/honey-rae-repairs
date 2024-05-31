import { useState, useEffect } from "react";
import { User } from "../../users/User.jsx"
import { getStaffUsers } from "../../services/userService";
import "./Employee.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect (() => {
        getStaffUsers().then((employeeArray) => {
            setEmployees(employeeArray)
        })
        }, [])

        return ( 
            <div className="employees">
                {employees.map((employeeObj) => {
                    return <User user={employeeObj} />  
                })}
            </div>

        )
}

