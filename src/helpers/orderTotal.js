const orderTotal = (customers) => {
    let sum = 0
    customers.forEach((ele) => {
        sum += ele.Amount
    })
    return sum
}

export default orderTotal