import React from "react"

const CustomersTable = (props) => {

    const { customers, showDetails } = props
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Show</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((customer) => {
                        return (
                            <tr key={customer.Phone}>
                                <td>{customer.Name}</td>
                                <td>{customer.Phone}</td>
                                <td><button className="btn btn-primary" onClick={() => { showDetails(customer) }}>Show</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CustomersTable