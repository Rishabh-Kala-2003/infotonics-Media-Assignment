import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        // Set new default font family and font color
        Chart.defaults.font.family = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.font.color = '#292b2c';

        const ctx = chartRef.current.getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [{
                    label: "Revenue",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: [4215, 5312, 6251, 7841, 9821, 14984],
                }],
            },
            options: {
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'month'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 6
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 15000,
                            maxTicksLimit: 5
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                },
                legend: {
                    display: false
                }
            }
        });

        return () => {
            // Clean up the chart instance when the component unmounts
            chartInstance.current.destroy();
        };
    }, []);

    return (
        <div>
        <canvas ref={chartRef} id="myBarChart" width="100%" height="50"></canvas>
        </div>
    );
};

export default BarChart;
