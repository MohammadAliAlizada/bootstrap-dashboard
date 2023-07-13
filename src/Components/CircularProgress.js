import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const CircularProgress = () => {
    const [progressColor, setProgressColor] = useState(0)
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'circular-progress'
        },
        plotOptions: {
            radialBar: {
                hollow: {

                    margin: 0,
                    size: '50%',
                    background: '#fff',
                },
                dataLabels: {
                    showOn: 'always',
                    name: {
                        show: false,
                    },
                    value: {
                        offsetY: 4,
                        fontSize: '18px',
                    },
                }
            }
        },
        colors: ['rgba(255, 102, 31)'],

        labels: ['Progress'],
    });

    return (
        <div style={{ marginLeft: '16px', marginTop: '-23px' }} className="d-flex circularProgressItem">
            <div><Chart options={chartOptions} series={[6]} type="radialBar" width={160} height={160} /><div className="d-flex flex-column text-center"><span className="ml-2">Job seeker</span><span className="ml-2">visitors</span></div></div>
            <div><Chart options={chartOptions} series={[31]} type="radialBar" width={160} height={160} /><div className="d-flex flex-column text-center"><span className="ml-2">Employer</span><span className="ml-2">visitors</span></div></div>
            <div><Chart options={chartOptions} series={[7]} type="radialBar" width={160} height={160} /><div className="d-flex flex-column text-center"><span className="ml-2">Service Provier</span><span className="ml-2">visitors</span></div></div>
            <div><Chart options={chartOptions} series={[6]} type="radialBar" width={160} height={160} /><div className="d-flex flex-column text-center"><span className="ml-2">Fan</span><span className="ml-2">visitors</span></div></div>
        </div>
    );
}

export default CircularProgress;
