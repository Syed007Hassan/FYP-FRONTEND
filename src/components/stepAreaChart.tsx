'use client'
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const StepAreaChart = () => {

  const options = {
    yaxis: {
      show: true,
      labels: {
        formatter: function (value: any) {
          return "$" + value;
        },
      },
    },
    chart: {
      id: "basic-area",

      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: true,
      },

      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
      x: {
        show: false,
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",

      },

    },


    dataLabels: {
      enabled: true,
    },

    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 0,
        right: 0,
        top: 10,
      },
    },
    xaxis: {
      categories: [
        "01 jan",
        "02 jan",
        "03 jan",
        "04 jan",
        "05 jan",
        "06 jan",
        "07 jan",
      ],
      labels: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
  }

  const series = [
    {
      name: "Developer Edition",
      data: [600, 1300, 1456, 1500, 1344, 1100],
      color: "#FDBA8C",
    },
    {
      name: "Designer Edition",
      data: [1200, 723, 890, 450, 1600, 1800],
      color: "#7E3BF2",
    },
  ];

  return (
    <>
      <ApexChart type="area" options={options} series={series} height={400} width={500} />
    </>
  )

};
export default StepAreaChart;