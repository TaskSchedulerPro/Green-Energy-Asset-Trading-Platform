import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Carbon Credit Price',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.1
    }
  ]
};

function RealTimeData() {
  return (
    <div>
      <h3>Real-Time Market Insights</h3>
      <Line data={data} />
    </div>
  );
}

export default RealTimeData;
