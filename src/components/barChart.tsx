import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

interface Props {
  options: any;
}

import React from 'react'

const Chart3 = () => {


  const chartRef = useRef(null);
  useEffect(() => {
    const options = {
      colors: ["#1A56DB", "#FDBA8C"],

      series: [
        {
          name: "Organic",
          color: "#1A56DB",
          data: [
            { x: "Mon", y: 231 },
            { x: "Tue", y: 122 },
            { x: "Wed", y: 63 },
            { x: "Thu", y: 421 },
            { x: "Fri", y: 122 },
            { x: "Sat", y: 323 },
            { x: "Sun", y: 111 },
          ],
        },
        {
          name: "Social media",
          color: "#FDBA8C",
          data: [
            { x: "Mon", y: 232 },
            { x: "Tue", y: 113 },
            { x: "Wed", y: 341 },
            { x: "Thu", y: 224 },
            { x: "Fri", y: 522 },
            { x: "Sat", y: 411 },
            { x: "Sun", y: 243 },
          ],
        },
      ],
      // chart: {
      //   type: "bar",
      //   height: "320px",
      //   fontFamily: "Inter, sans-serif",
      //   toolbar: {
      //     show: true,
      //   },
      // },
      chart: {
        height: "350",
        Width: "100%",
        type: "bar",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: true,
        },
        // toolbar: {
        //   show: true,
        // },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: false,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -26
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: true,
      },
      xaxis: {
        floating: true,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        show: true,
      },
      fill: {
        opacity: 1,
      },
    }
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);


  return (
    <div className='w-full items-center'>
      <div ref={chartRef}></div>
    </div>
  )
};
export default Chart3;