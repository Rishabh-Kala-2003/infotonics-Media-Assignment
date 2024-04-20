import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
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
            type: 'pie',
            data: {
                labels: ["Blue", "Red", "Yellow", "Green"],
                datasets: [{
                    data: [12.21, 15.58, 11.25, 8.32],
                    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                }],
            },
        });

        return () => {
            // Clean up the chart instance when the component unmounts
            chartInstance.current.destroy();
        };
    }, []);

    return (
        <div>
          <canvas ref={chartRef} id="myPieChart" width="100%" height="50"></canvas>
        </div>
    );
};

export default PieChart;
