'use client' // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const AreaChart = () => {

  const option = {
    yaxis: {
      show: true,
      labels: {
        formatter: function (value: any) {
          return "€" + value;
        },
      },
    },
    chart: {

      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: true,
      },
      toolbar: {
        show: true,
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
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: 8,
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
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb",
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

  const series = [{

    name: "Designer Edition",
    data: [643, 413, 765, 412, 1423, 1731],
    color: "#7E3BF2",
  },
  {
    name: "Developer Edition",
    data: [1500, 1418, 1456, 1526, 1356, 1256],
    color: "#1A56DB",
  },]

  return (
    <>
      <ApexChart type="area" options={option} series={series} height={400} width={500} />
    </>
  )

}
export default AreaChart;