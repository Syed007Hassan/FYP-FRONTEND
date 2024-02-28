// components/Dashboard.js
import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApplicantGraphs = () => {
  // Sample data for the line chart
  const lineChartData = {
    options: {
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      }
    },
    series: [{
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70]
    }]
  };

  // Sample data for the bar chart
  const barChartData = {
    options: {
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      }
    },
    series: [{
      name: 'Revenue',
      data: [400, 300, 500, 200, 600]
    }]
  };

  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="lg:w-5/6 xl:w-2/3 h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold mb-4">Application Completion Rate</h2>
          <div className="p-4">
            <Chart
              options={lineChartData.options}
              series={lineChartData.series}
              type="line"
              width="100%"
              height="200"
            />
          </div>
        </div>
        <div className="lg:w-5/6 xl:w-2/3 h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold mb-4">Job Openings</h2>
          <div className="p-4">
            <Chart
              options={barChartData.options}
              series={barChartData.series}
              type="bar"
              width="100%"
              height="200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantGraphs;