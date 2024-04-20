// components/Dashboard.js
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useGetApplicationsCountInLastFiveJobsQuery } from "@/redux/services/job/jobAction";
import { useGetAllStagesAssignedQuery } from "@/redux/services/Recruiter/recruiterAction";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";
import { AllStagesAssigned } from "@/types/recruiter";

import "../../styles/scrollbar.css";

const RecruiterGraphs_2 = () => {
  const [decodedData, setDecodedData] = useState<any>();
  const [companyId, setCompanyId] = useState<number>(0);
  const [recruiterId, setRecruiterId] = useState<string>("");

  const { data: applicationsCountInLastFiveJobsData } =
    useGetApplicationsCountInLastFiveJobsQuery({ companyId });

  const { data: stagesAssignedData } = useGetAllStagesAssignedQuery({
    recruiterId,
  });

  let months = [
    {
      name: "Jan",
      value: "01",
    },
    {
      name: "Feb",
      value: "02",
    },
    {
      name: "Mar",
      value: "03",
    },
    {
      name: "Apr",
      value: "04",
    },
    {
      name: "May",
      value: "05",
    },
    {
      name: "Jun",
      value: "06",
    },
    {
      name: "Jul",
      value: "07",
    },
    {
      name: "Aug",
      value: "08",
    },
    {
      name: "Sep",
      value: "09",
    },
    {
      name: "Oct",
      value: "10",
    },
    {
      name: "Nov",
      value: "11",
    },
    {
      name: "Dec",
      value: "12",
    },
  ];

  useEffect(() => {
    console.log("Recruiter Id", recruiterId);
    console.log("Stages Assigned Data", stagesAssignedData);
  }, [stagesAssignedData, recruiterId]);

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
      setRecruiterId(decodedData?.recruiterId || 0);
    };

    parseJwtFromSession();
  }, []);

  let jobsData = applicationsCountInLastFiveJobsData?.data;

  let categories = jobsData ? jobsData.map((job) => job.jobTitle) : [];
  let data = jobsData ? jobsData.map((job) => job.applications) : [];

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
        data: data,
      },
    ],
  };

  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="w-full h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold mb-4">
            Applications created in Last Year
          </h2>
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
        <div className="w-full h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold mb-4">Tasks Assigned</h2>
          <div className="p-4 h-64 overflow-y-auto custom-scrollbar">
            {stagesAssignedData?.data?.map((job: AllStagesAssigned) => (
              <div
                key={job.jobId}
                className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1"
              >
                <div className="p-4">
                  <a
                    className="grid items-center grid-cols-12"
                    href={`/recruiter/joblist/${job?.jobId}/analytics`}
                  >
                    <div className="col-span-12 lg:col-span-12">
                      <div className="mb-2 mb-md-0">
                        <h5 className="mb-1 fs-18">
                          <a
                            // href={`/recruiter/joblist/${job?.jobId}`}
                            className="text-blue-900 dark:text-gray-50 font-bold text-lg"
                          >
                            {job.jobTitle}
                          </a>
                        </h5>
                        {job?.stages?.map((stage) => (
                          <p
                            key={stage.stageId}
                            className="mb-0 text-gray-500 dark:text-gray-300"
                          >
                            Stage Name: {stage.stageName}
                          </p>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterGraphs_2;
