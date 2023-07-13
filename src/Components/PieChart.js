import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'pie-chart'
        },
        labels: ['Salary', 'Experiences', 'Working Hours', 'Other']
    });

    const [chartSeries, setChartSeries] = useState([44, 55, 13, 12]);

    return (
        <div style={{ marginTop: '75px' }}>
            <Chart options={chartOptions} series={chartSeries} type="pie" height={350} />
        </div>
    );
}

export default PieChart;
