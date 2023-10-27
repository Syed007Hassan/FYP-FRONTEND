import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import ApexCharts from "apexcharts";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Chart1Props = {};

import React from "react";

const Chart1 = ({}: Chart1Props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let options = {
      yaxis: {
        show: true,
        labels: {
          formatter: function (value: any) {
            return "€" + value;
          },
        },
      },
      chart: {
        height: "350",
        maxWidth: "500",
        type: "area",
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
          left: 2,
          right: 2,
          top: -26,
        },
      },
      series: [
        {
          name: "Developer Edition",
          data: [1500, 1418, 1456, 1526, 1356, 1256],
          color: "#1A56DB",
        },
        {
          name: "Designer Edition",
          data: [643, 413, 765, 412, 1423, 1731],
          color: "#7E3BF2",
        },
      ],
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
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <div ref={chartRef}></div>
    </div>
  );
};
export default Chart1;
