import React, { useState } from 'react'
import Chart from 'react-apexcharts';
import PieChart from './PieChart';
const AreaChart = () => {

    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'area-chart'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        }
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Series 1',
            data: [30, 40, 25, 50, 49, 21, 70]
        }
    ]);

    return (

        <div className="row mt-4">

            {/*   <!-- Area Chart --> */}
            <div className="col-xl-8 col-lg-7 ">
                <span className="text-white">Monthly Applications Received</span>
                <div className=" card-Table shadow mb-4 areaChart ">
                    <Chart options={chartOptions} series={chartSeries} type="area" width={650} height={280} />
                </div>
            </div>



            <div className="col-xl-4 col-lg-5  ">
                <span className="text-white">Reasons candidates viewing you job post</span>
                <div className=" card-Table shadow mb-4 pieChart ">
                    <PieChart />
                </div>
            </div>
        </div >
    );
}

export default AreaChart
