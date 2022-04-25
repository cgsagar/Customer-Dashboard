import React from "react";
import StatsItem from './StatsItem'
import uniqueCustomers from "../helpers/uniqueCustomers"
import orderTotal from "../helpers/orderTotal"

const StatsContainer = (props) => {
    const { customers } = props
    const ordersCount = customers.length

    return (
        <div className="row">
            <StatsItem count={ordersCount} text="Orders" />
            <StatsItem count={orderTotal(customers)} text="Amount" />
            <StatsItem count={uniqueCustomers(customers).length} text="Customers" />
        </div>
    )
}

export default StatsContainer