// components/Dashboard.js
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApplicationCount } from "@/types/company";
import { months } from "@/data/data";
import { Application } from "@/types/application";
import { JobApplication } from "@/types/job";

interface ApplicantGraphsProps {
  jobApplicationsByMonth: ApplicationCount | undefined;
  activeJobs: Application[] | undefined;
  pendingJobs: Application[] | undefined;
  jobsWithFeedback: JobApplication[] | undefined;
}

const ApplicantGraphs: React.FC<ApplicantGraphsProps> = ({
  jobApplicationsByMonth,
  activeJobs,
  pendingJobs,
  jobsWithFeedback,
}) => {
  // Sample data for the line chart

  let applicationsData = jobApplicationsByMonth?.data;
  const [isExpanded, setIsExpanded] = useState(false);

  let latestYear = applicationsData
    ? Math.max(
        ...Object.keys(applicationsData).map((date) =>
          Number(date.split("-")[0])
        )
      )
    : new Date().getFullYear();

  let latestYearShort = String(latestYear).slice(2); // Get the last two digits of the year

  let categories = months.map((month) => `${month.name}-${latestYearShort}`);

  // let categories = months.map((month) => month.name);
  let data = months.map((month) => {
    let key = `${latestYear}-${month.value}`;
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
        data: data,
      },
    ],
  };

  return (
    <div className="container gap-5 flex flex-col">
      <div className="flex justify-between">
        <div className="lg:w-5/6 xl:w-2/3 h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold mb-4">Applied Jobs</h2>
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
        <div className="w-2/5 h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold mb-4">Active Applications</h2>
          <div className="p-4 h-64 overflow-y-auto custom-scrollbar">
            {activeJobs && activeJobs.length > 0 ? (
              activeJobs?.map((job: Application) => (
                <div
                  key={job.applicationId}
                  className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1"
                >
                  <div className="p-4">
                    <a
                      className="grid items-center grid-cols-12"
                      href={`/applicant/job-feed/${job?.job?.jobId}`}
                    >
                      <div className="col-span-12 lg:col-span-12">
                        <div className="mb-2 mb-md-0">
                          <h5 className="mb-1 fs-18">
                            <a
                              // href={`/recruiter/joblist/${job?.jobId}`}
                              className="text-blue-900 dark:text-gray-50 font-bold text-lg"
                            >
                              Job Name: {job?.job?.jobTitle}
                            </a>
                          </h5>
                          {/* {job?.stage?.map((stage) => ( */}
                          <p
                            key={job?.stage?.stageId}
                            className="mb-0 text-gray-500 dark:text-gray-300"
                          >
                            Current Stage: {job?.stage?.stageName}
                          </p>
                          {/* ))} */}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No Active Jobs</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-2/5 h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold mb-4">Pending Applications</h2>
          <div className="p-4 h-64 overflow-y-auto custom-scrollbar">
            {pendingJobs && pendingJobs.length > 0 ? (
              pendingJobs?.map((job: Application) => (
                <div
                  key={job.applicationId}
                  className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1"
                >
                  <div className="p-4">
                    <a
                      className="grid items-center grid-cols-12"
                      href={`/applicant/job-feed/${job?.job?.jobId}`}
                    >
                      <div className="col-span-12 lg:col-span-12">
                        <div className="mb-2 mb-md-0">
                          <h5 className="mb-1 fs-18">
                            <a
                              // href={`/recruiter/joblist/${job?.jobId}`}
                              className="text-blue-900 dark:text-gray-50 font-bold text-lg"
                            >
                              Job Name: {job?.job?.jobTitle}
                            </a>
                          </h5>
                          {/* {job?.stage?.map((stage) => ( */}
                          <p
                            key={job?.stage?.stageId}
                            className="mb-0 text-gray-500 dark:text-gray-300"
                          >
                            Current Stage: {job?.stage?.stageName}
                          </p>
                          {/* ))} */}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No Pending Jobs</p>
            )}
          </div>
        </div>
        <div className="lg:w-5/6 xl:w-2/3 h-80 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
          <h2 className="text-xl font-bold">Rejected Jobs</h2>
          <div className="p-4">
            <div className="p-4 h-64 overflow-y-auto custom-scrollbar">
            {jobsWithFeedback && jobsWithFeedback.length > 0 ? ( jobsWithFeedback?.map((job: JobApplication) => (
                <div
                  key={job?.jobTitle}
                  className={`relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1 ${
                    isExpanded ? "" : "h-20"
                  }`}
                >
                  <div className="p-4">
                    <div className="grid items-center grid-cols-12">
                      <div className="col-span-12 lg:col-span-12">
                        <div className="mb-2 mb-md-0">
                          <h5 className="mb-1 fs-18 flex justify-between">
                            <a
                              // href={`/recruiter/joblist/${job?.jobId}`}
                              className="text-blue-900 dark:text-gray-50 font-bold text-lg"
                            >
                              Job Name: {job?.jobTitle}
                            </a>
                            <p
                              className="hover:cursor-pointer font-bold"
                              onClick={() => setIsExpanded(!isExpanded)}
                            >
                              feedback
                            </p>
                          </h5>
                          {/* {job?.stage?.map((stage) => ( */}
                          <p className="mb-0 text-gray-500 dark:text-gray-300">
                            Rejected Stage: {job?.stageName}
                          </p>
                          <p className="mb-0 text-gray-500 dark:text-gray-300">
                            Feedback: {job?.applicationFeedback}
                          </p>
                          {/* ))} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))
                ) : (
                  <p>No Rejected Jobs</p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantGraphs;
