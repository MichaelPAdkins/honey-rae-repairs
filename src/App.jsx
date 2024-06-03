
import "./App.css"
import { CustomerList } from "./components/customers/CustomersList.jsx";
import { EmployeeList } from "./components/employees/EmployeeList.jsx";
import { NavBar } from "./components/nav/NavBar.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx"
import { Routes, Route, Outlet } from "react-router-dom"
import { Welcome } from "./components/welcome/Welcome.jsx"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register.jsx"

export const App = () => {
  return ( 
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route 
      path="/" 
      element={
        <>
          <NavBar />
          <Outlet />
        </>
      }
    >
    <Route index element={<Welcome />} />
    <Route path="tickets" element={<TicketList />} />
    <Route path="employees">
      <Route index element={<EmployeeList />} />
      <Route path=":employeeId" element={<EmployeeDetails />} />
    </Route>
    <Route path="customers">
      <Route index element={<CustomerList />} />
      <Route path=":customerId" element={<CustomerDetails />} />{" "} 
      {/* /customers/:customerId */}
      </Route>     
    </Route>
  </Routes>
  )
}