import React from "react"
import OrdersTable from './OrdersTable'
import OrdersChart from './OrdersChart'
import uniqueCustomers from "../helpers/uniqueCustomers"

const OrderContainer = (props) => {
    const { customers } = props

    const customerFrequency = () => {
        const customersData = uniqueCustomers(customers)
        const frequencyObject = { 1: 0, 2: 0, 3: 0, 4: 0, '5+': 0 }
        customersData.forEach((customer) => {
            const customerOrders = customers.filter((c) => {
                return c.Phone === customer.Phone
            })
            if (customerOrders.length >= 5) {
                frequencyObject['5+']++
            } else {
                frequencyObject[customerOrders.length]++
            }
        })
        return frequencyObject
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <h2>Order Distribution</h2>
            </div>

            <OrdersTable data={customerFrequency()} />
            <OrdersChart data={customerFrequency()} />
        </div>
    )
}

export default OrderContainer