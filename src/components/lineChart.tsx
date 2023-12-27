'use client'
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = () => {
  const options = {
    chart: {
      id: "Months",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 10,
      padding: {
        left: 0,
        right: 2,
        top: 10,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      title: {
        text: "Hirings",
      },
    },
    colors: ["#00BFFF", "#FFA500"],
  };

  const series = [
    {
      name: "Product A",
      data: [30, 40, 25, 50, 49, 21, 70],
    },
    {
      name: "Product B",
      data: [20, 35, 45, 30, 60, 40, 80],
    },
  ];

  return (
    <>
      <ApexChart type="area" options={options} series={series} height={400} width={1500} />

    </>
  );
};

export default LineChart;
