import React, { useState } from "react";
import Search from "./Search";
import CustomersTable from "./CustomersTable"
import uniqueCustomers from "../helpers/uniqueCustomers"
import orderTotal from "../helpers/orderTotal"


const CustomersContainer = (props) => {

    const { customers } = props
    const [term, setTerm] = useState('')
    const onlyUniqueCustomers = uniqueCustomers(customers)

    const showDetails = (customer) => {
        const customerOrders = customers.filter((c) => {
            return c.Phone == customer.Phone
        })
        const customerOrderTotal = orderTotal(customerOrders)

        alert(`
                    Name - ${customer.Name}
                    Order Count - ${customerOrders.length}
                    Order Total - ${customerOrderTotal}
                    `)
    }

    const handleChange = (e) => {
        const term = e.target.value
        setTerm(term)
    }

    const filteredUniqueCustomers = () => {
        const result = onlyUniqueCustomers.filter((c) => {
            return c.Name.toLowerCase().includes(term) || c.Phone.toString().includes(term)
        })
        return result
    }

    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-8">
                    <h2>Listing Customers - {onlyUniqueCustomers.length}</h2>
                </div>
                <div className="col-md-4">
                    <Search term={term} handleChange={handleChange} />

                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <CustomersTable customers={filteredUniqueCustomers()} showDetails={showDetails} />
                </div>

            </div>
        </div>


    )
}

export default CustomersContainer;