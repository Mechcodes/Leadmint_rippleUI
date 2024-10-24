import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);

const RegistrationReferralsChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Registrations',
        data: data.registrations,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.4)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        tension: 0.1, 
      },
      {
        label: 'Referrals',
        data: data.referrals,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.4)', 
        borderColor: 'rgba(255, 99, 132, 1)', 
        tension: 0.1, 
      },
    ],
  };

  const options = {
    responsive: true,  
    maintainAspectRatio: false,  
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Last 7 Days: Registrations vs Referrals',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default RegistrationReferralsChart;
