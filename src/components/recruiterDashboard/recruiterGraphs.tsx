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
import { months } from "@/data/data";

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

  let jobsData = jobsCountInMonthsData?.data;
  let latestYear = jobsData
    ? Math.max(
        ...Object.keys(jobsData).map((date) => Number(date.split("-")[0]))
      )
    : new Date().getFullYear();
  let latestYearShort = String(latestYear).slice(2); // Get the last two digits of the year

  let categories = months.map((month) => `${month.name}-${latestYearShort}`);
  let data = months.map((month) => {
    let key = `${latestYear}-${month.value}`;
    return jobsData && jobsData[key] ? jobsData[key] : 0;
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
        categories: categories,
      },
    },
    series: [
      {
        name: "Jobs",
        data: data,
      },
    ],
  };

  let applicationsData = applicationsCountInMonthsData?.data;

  let latestYear_temp = applicationsData
    ? Math.max(
        ...Object.keys(applicationsData).map((date) =>
          Number(date.split("-")[0])
        )
      )
    : new Date().getFullYear();

  // let categories = months.map((month) => month.name);
  let data_temp = months.map((month) => {
    let key = `${latestYear_temp}-${month.value}`;
    return applicationsData && applicationsData[key]
      ? applicationsData[key]
      : 0;
  });

  // Sample data for the bar chart
  const barChartData = {
    options: {
      xaxis: {
        categories: categories,
      },
    },
    series: [
      {
        name: "Applications",
        data: data_temp,
      },
    ],
  };

  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="lg:w-5/6 xl:w-2/3 h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold mb-4">Jobs Created in Last Year</h2>
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
          <h2 className="text-xl font-bold mb-4">Applications created in Last Year</h2>
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
