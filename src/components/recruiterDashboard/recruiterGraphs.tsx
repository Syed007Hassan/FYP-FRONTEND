// components/Dashboard.js
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {
  useGetApplicationsCountInLastFiveJobsQuery,
  useGetApplicationsCountInMonthsQuery,
  useGetJobsCountInMonthsQuery,
} from "@/redux/services/job/jobAction";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";

const RecruiterGraphs = () => {
  const [decodedData, setDecodedData] = useState<any>();
  const [companyId, setCompanyId] = useState<number>(0);

  const { data: applicationsCountInLastFiveJobsData } =
    useGetApplicationsCountInLastFiveJobsQuery({ companyId });
  const { data: applicationsCountInMonthsData } =
    useGetApplicationsCountInMonthsQuery({ companyId });
  const { data: jobsCountInMonthsData } = useGetJobsCountInMonthsQuery({
    id: companyId,
  });

  useEffect(() => {
    const parseJwtFromSession = async () => {
      // const session = await getSession();
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setCompanyId(decodedData?.companyId || 0);
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    console.log(
      "Applications Count in Last Five Jobs",
      applicationsCountInLastFiveJobsData
    );
    console.log("Applications Count in Months", applicationsCountInMonthsData);
    console.log("Jobs Count in Months", jobsCountInMonthsData);
  }, [
    applicationsCountInLastFiveJobsData,
    applicationsCountInMonthsData,
    jobsCountInMonthsData,
  ]);

  // Sample data for the line chart
  const lineChartData = {
    options: {
      xaxis: {
        categories: jobsCountInMonthsData ? Object.keys(jobsCountInMonthsData.data).sort() : [],
      },
    },
    series: [
      {
        name: "Jobs",
        data: jobsCountInMonthsData ? Object.values(jobsCountInMonthsData.data).sort() : [],
      },
    ],
  };

  // Sample data for the bar chart
  const barChartData = {
    options: {
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
    },
    series: [
      {
        name: "Revenue",
        data: [400, 300, 500, 200, 600],
      },
    ],
  };

  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="lg:w-5/6 xl:w-2/3 h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold mb-4">
            Jobs Created in Last Year
          </h2>
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
          <h2 className="text-xl font-bold mb-4">Open Positions</h2>
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

export default RecruiterGraphs;
