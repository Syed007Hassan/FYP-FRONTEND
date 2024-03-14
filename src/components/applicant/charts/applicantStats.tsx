import React, { useState } from "react";
import { BsFileEarmarkText, BsClock, BsAward, BsCheckCircle } from "react-icons/bs";
import Chart from "react-apexcharts";

const ApplicantStats = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const data = [
    { name: "Applications", value: 190, color: "#6366F1", icon: <BsFileEarmarkText size={60} /> },
    { name: "Interviews", value: 80, color: "#F59E0B", icon: <BsClock size={60} /> },
    { name: "Active Jobs", value: 20, color: "#4CAF50", icon: <BsAward size={60} /> },
    { name: "Qualified", value: 45, color: "#9C27B0", icon: <BsCheckCircle size={60} /> },
  ];

  const chartData = {
    options: {
      chart: {
        toolbar: {
          show: false
        },
      },
      xaxis: {
        categories: data.map(item => item.name)
      }
    },
    series: [{
      name: "Progress",
      data: data.map(item => item.value)
    }]
  };

  const handleBoxClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`container mx-auto mt-2 px-4 sm:px-8 md:px-20 font-serif ${isSidebarOpen ? 'ml-sidebar' : ''}`}>
      <div className="flex flex-nowrap text-white justify-end sm:justify-end">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-1/4 mt-2 mr-2 rounded-lg overflow-hidden shadow-xl transition-all duration-300 flex flex-row justify-between items-center p-6`}
            style={{ minHeight: "100px", maxHeight: "150px", cursor: "pointer", backgroundColor: item.color, opacity: isSidebarOpen ? 0.3 : 1 }}
            onClick={handleBoxClick}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 whitespace-nowrap">{item.name}</h2>
              <p className="text-6xl sm:text-7xl font-bold mb-4">{item.value}</p>
            </div>
            <div className="flex items-center justify-center mb-4 mr-4 mt-4" style={{ opacity: 0.7, fontSize: "smaller", height: "100%" }}>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantStats;
