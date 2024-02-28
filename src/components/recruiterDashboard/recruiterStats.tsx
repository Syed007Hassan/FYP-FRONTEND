// components/Dashboard.js
import React, { useState } from 'react';

const RecruiterStats = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }
  const data = [
    { name: 'Applications Received', value: 190, color: '#6366F1' },
    { name: 'Interviews Scheduled', value: 80, color: '#F59E0B' },
    { name: 'Total Candidates', value: 20, color: '#4CAF50' },
    { name: 'Qualified Candidates', value: 45, color: '#9C27B0' }

  ];
  const colors = ['bg-blue-400', 'bg-green-400', 'bg-red-400', 'bg-yellow-400', 'bg-indigo-400', 'bg-purple-400'];

  return (
    <div className={`bg-gray-200 container mx-auto mt-2 px-4 sm:px-8 md:px-20 font-serif ${isSidebarOpen ? 'ml-sidebar' : ''}`}>
      <div className="flex flex-wrap justify-center sm:justify-end">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:${isSidebarOpen ? 'w-1/6' : 'w-1/5'} mt-2 mr-2 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center items-center p-6 ${colors[index % colors.length]
              } text-white`}
            style={{ minHeight: "200px" }}
          >
            <h2 className="text-xl sm:text-2xl font-medium mb-4">{item.name}</h2>
            <p className="text-5xl sm:text-7xl font-bold mb-4">{item.value}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default RecruiterStats;