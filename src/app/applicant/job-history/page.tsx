"use client";
import React, { useEffect, useState } from "react";
import JobCard from "@/components/applicant/job/jobCard";
import { JobCardData, JobCardProps } from "@/data/data";
import Loader from "@/components/Loader";

const JobHistoryPage = () => {
  // use state of type jobCardData as an array
  const [jobCardTempData, setJobCardTempData] = useState<JobCardProps[]>([]);
  const [heading, setHeading] = useState<string>("All Jobs");

  useEffect(() => {
    // fetch job data from the server
    setJobCardTempData(JobCardData);
  }, []);

  useEffect(() => {
    console.log(jobCardTempData);
  }, [jobCardTempData]);

  const handleClick = (type: string) => {
    if (type === "all-jobs") {
      setHeading("All Jobs");
      setJobCardTempData(JobCardData);
    } else if (type === "applied") {
      setHeading("Applied Jobs");
      setJobCardTempData(
        JobCardData.filter((job) => job.jobStatus === "Applied")
      );
    } else if (type === "active") {
      setHeading("Active Jobs");
      setJobCardTempData(
        JobCardData.filter((job) => job.jobStatus === "Active")
      );
    } else if (type === "rejected") {
      setHeading("Rejected Jobs");
      setJobCardTempData(
        JobCardData.filter((job) => job.jobStatus === "Rejected")
      );
    }
  };

  return jobCardTempData.length === 0 ? (
    <Loader />
  ) : (
    <div className="flex gap-4 px-40 py-10 font-sans">
      <div className="bg-gray-200 bg-opacity-50 w-80 rounded p-4 h-72">
        <h1 className="text-2xl font-bold mb-4 text-blue-900">Job History</h1>
        <div className="space-y-2">
          <p
            className={`py-2 px-4 rounded hover:bg-gray-300 hover:text-blue-900 cursor-pointer ${heading === 'All Jobs' ? 'bg-gray-200 text-blue-900' : ''}`}
            onClick={() => handleClick("all-jobs")}
          >
            All Jobs
          </p>
          <p
            className={`py-2 px-4 rounded hover:bg-gray-300 hover:text-blue-900 cursor-pointer ${heading === 'Applied Jobs' ? 'bg-gray-200 text-blue-900' : ''}`}            onClick={() => handleClick("applied")}
          >
            Applied Jobs
          </p>
          <p
            className={`py-2 px-4 rounded hover:bg-gray-300 hover:text-blue-900 cursor-pointer ${heading === 'Active Jobs' ? 'bg-gray-200 text-blue-900' : ''}`}            onClick={() => handleClick("active")}
          >
            Active Jobs
          </p>
          <p
            className={`py-2 px-4 rounded hover:bg-gray-300 hover:text-blue-900 cursor-pointer ${heading === 'Rejected Jobs' ? 'bg-gray-200 text-blue-900' : ''}`}            onClick={() => handleClick("rejected")}
          >
            Rejected Jobs
          </p>
        </div>
      </div>
      <div className="bg-gray-200 bg-opacity-50 px-10 py-4 rounded lg:w-[70rem] overflow-y-scroll h-[37rem]">
        <h1 className="font-bold text-2xl text-blue-900">{heading}</h1>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {jobCardTempData.map((job, index) => (
            <JobCard
              key={index}
              jobImage={job.jobImage}
              jobTitle={job.jobTitle}
              jobCompany={job.jobCompany}
              jobLocation={job.jobLocation}
              jobTimePosted={job.jobTimePosted}
              jobType={job.jobType}
              jobUrgency={job.jobUrgency}
              jobCategory={job.jobCategory}
              jobStatus={job.jobStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobHistoryPage;
