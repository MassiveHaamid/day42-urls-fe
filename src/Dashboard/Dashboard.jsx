// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// import { Chart } from 'chart.js/auto';

// Log versions
// console.log('Chart.js version:', Chart.version);
// console.log('react-chartjs-2 version:', packageJson.version);

// const Dashboard = () => {
//   const [dailyCounts, setDailyCounts] = useState([]);
//   const [monthlyCounts, setMonthlyCounts] = useState([]);

//   useEffect(() => {
//      Fetch daily and monthly counts from the backend
//     const fetchData = async () => {
//       try {
//         const dailyResponse = await axios.get('/api/dashboard/daily-counts');
//         setDailyCounts(dailyResponse.data);

//         const monthlyResponse = await axios.get('/api/dashboard/monthly-counts');
//         setMonthlyCounts(monthlyResponse.data);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//    const dailyData = {
//      labels: dailyCounts.map((entry) => entry.date),
//      datasets: [
//        {
//          label: 'Daily Counts',
//          data: dailyCounts.map((entry) => entry.count),
//          fill: false,
//          borderColor: 'rgba(75,192,192,1)',
//        },
//      ],
//    };

//    const monthlyData = {
//      labels: monthlyCounts.map((entry) => entry.month),
//      datasets: [
//        {
//          label: 'Monthly Counts',
//          data: monthlyCounts.map((entry) => entry.count),
//          fill: false,
//          borderColor: 'rgba(255,99,132,1)',
//        },
//      ],
//    };
  
//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//   const Data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Dataset 2',
//         data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };

//   const Options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart',
//       },
//     },
//   };

//   return (
//     <>
// <h2>Dashboard</h2>
//       <div>
//         <h3>Daily Counts</h3>
//         <Line data={Data} options={Options} />
//       </div>
//       <div>
//         <h3>Monthly Counts</h3>
//         <Line data={Data} options={Options} />
//       </div>
//     </>
//   );
// };

// export default Dashboard;
//--------------------------------------

import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Generating random data without faker
const generateRandomData = () => {
  return labels.map(() => Math.floor(Math.random() * 2000) - 1000);
};

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: generateRandomData(),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: generateRandomData(),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Dashboard() {
  return <Line options={options} data={data} />;
}