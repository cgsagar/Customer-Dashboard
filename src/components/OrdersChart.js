import React from "react";

const OrdersChart = (props) => {
    const { data } = props

    const google = window.google

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    const chartData = [
        ['No of Orders', 'Customer Count']
    ]

    for (const key in data) {
        chartData.push([key, data[key]])

    }
    function drawChart() {

        const data = google.visualization.arrayToDataTable(chartData);

        const options = {
            title: 'Order Distribution'
        };

        const chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
    return (
        <div className="col-md-6">
            <div id="piechart" style={{ width: '900px', height: '500px' }}>

            </div>
        </div >

    )
}

export default OrdersChart