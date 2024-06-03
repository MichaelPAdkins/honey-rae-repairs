import { useParams } from "react-router-dom"
import { getEmployeeById } from "../../services/employeeService.jsx"
import "./Employee.css"
import { useEffect, useState } from "react"


export const EmployeeDetails = () => {
    const { employeeId } = useParams()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeById(employeeId).then(data => {
            const singleEmployee = data[0]
            setEmployee(employeeObj)
        })
    }, [employeeId])

    useEffect(() => {
        setEmployeeTicketCount(employee.employeeTickets)
        
    }, [employee])


    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email: </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty: </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info">Rate: </span>
                {employee.rate}
            </div>
            <footer className="employee-footer">{`Currently working on ${ticketCount?.length} ticket(s)`}</footer>
        </section>
    )
}