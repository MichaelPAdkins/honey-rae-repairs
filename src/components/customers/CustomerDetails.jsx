import { useParams } from "react-router-dom"
import { useState } from "react"
import { getCustomerByUserId } from "../../services/customerService.jsx"
import "./Customers.css"

export const CustomerDetails = () => {
    const [customer, setCUstomer] = useState ({})
    const { customerId } = useParams()

    useEffect (() => {
        getCustomerByUserId(customerId).then((data) => {
            const customerObj = data[0]
            setCUstomer(customerObj)
        })
    }, [customerId])

    return (
    <section className="customer">
        <header className="customer-header">{customer.user?.fullName}</header>
        <div>
            <span className="customer-info">Email : </span>
            {customer.user?.email}
        </div>
        <div>
            <span className="customer-info">Address : </span>
            {customer.address}
        </div>
        <div>
            <span className="customer-info">Phone Number : </span>
            {customer.phoneNumber}
        </div>
    </section>
    )
}