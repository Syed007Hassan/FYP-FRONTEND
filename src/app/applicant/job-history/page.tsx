"use client";
import React, { useEffect, useState } from "react";
import JobCard from "@/components/applicant/job/jobCard";
import { JobCardProps } from "@/data/data";
import Loader from "@/components/Loader";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";
import { useGetApplicationsByApplicantIdQuery } from "@/redux/services/application/applicationAction";
import { ApplicationData, Application } from "@/types/application";

import job_img from "../../../../public/job.png";

const JobHistoryPage = () => {
  // use state of type jobCardData as an array
  const [jobCardTempData, setJobCardTempData] = useState<JobCardProps[]>([]);
  const [heading, setHeading] = useState<string>("All Jobs");
  const [decodedData, setDecodedData] = useState<any>();
  const [email, setEmail] = useState<string>("");
  const [applicantId, setApplicantId] = useState<string>("");
  const [jobsData, setJobsData] = useState<Application[]>([]);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const { data, error, isLoading } = useGetApplicationsByApplicantIdQuery({
    applicantId: applicantId,
  });

  useEffect(() => {
    setFilteredJobs(jobsData);
  }, [jobsData]);

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
      setEmail(decodedData?.email || "");
      setApplicantId(decodedData.id.toString() || "");
    };
    parseJwtFromSession();
  }, []);

  useEffect(() => {
    if (data) {
      setJobsData(data?.data);
    }
  }, [data]);

  useEffect(() => {
    if (jobsData) {
      console.log("jobsData", jobsData);
    }
  }, [jobsData]);

  // useEffect(() => {
  //   console.log(jobCardTempData);
  // }, [jobCardTempData]);


  const handleClick = (type: string) => {
    let newFilteredJobs;
    if (type === "all-jobs") {
      setHeading("All Jobs");
      newFilteredJobs = jobsData;
    } else if (type === "applied") {
      setHeading("Applied Jobs");
      newFilteredJobs = jobsData?.filter((job) => job?.status === "pending");
    } else if (type === "active") {
      setHeading("Active Jobs");
      newFilteredJobs = jobsData?.filter((job) => job?.status === "approved");
    } else if (type === "rejected") {
      setHeading("Rejected Jobs");
      newFilteredJobs = jobsData?.filter((job) => job?.status === "rejected");
    }
    setFilteredJobs(newFilteredJobs || []);
  };

  return jobsData?.length === 0 ? (
    <Loader />
  ) : (
    <div className="flex gap-4 sticky px-40 py-10 font-sans">
      <div className="bg-blue-700 h-screen w-80 p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Job History</h1>
        <div className="space-y-2">
          <p
            className={`py-2 px-4 rounded hover:bg-blue-900 hover:text-blue cursor-pointer ${heading === "All Jobs" ? "bg-gray-200 text-white-900" : ""
              }`}
            onClick={() => handleClick("all-jobs")}
          >
            All Jobs
          </p>
          <p
            className={`py-2 px-4 rounded hover:bg-blue-700 hover:text-blue cursor-pointer ${heading === "Applied Jobs" ? "bg-gray-200 text-blue-900" : ""
              }`}
            onClick={() => handleClick("applied")}
          >
            Applied Jobs
          </p>
          <p
            className={`py-2 px-4 rounded hover:bg-blue-700 hover:text-blue cursor-pointer ${heading === "Active Jobs" ? "bg-gray-200 text-blue-900" : ""
              }`}
            onClick={() => handleClick("active")}
          >
            Active Jobs
          </p>
          <p
            className={`py-2 px-4 rounded hover:bg-blue-700 hover:text-blue cursor-pointer ${heading === "Rejected Jobs" ? "bg-gray-200 text-blue-900" : ""
              }`}
            onClick={() => handleClick("rejected")}
          >
            Rejected Jobs
          </p>
        </div>
      </div>
      <div className="bg-gray-200 bg-opacity-50 px-10 py-4 rounded lg:w-[70rem] h-screen overflow-y-scroll h-[37rem]">
        <h1 className="font-bold text-2xl text-blue-900">{heading}</h1>
        <div className="grid grid-cols-1 gap-4">
          {filteredJobs.map((job, index) => (
            <JobCard
              key={index}
              jobId={job?.job?.jobId}
              jobImage={job_img}
              jobTitle={job?.job?.jobTitle}
              jobCompany={job?.job?.company?.companyName}
              jobLocation={`${job?.job?.jobLocation?.area}, ${job?.job?.jobLocation?.city}, ${job?.job?.jobLocation?.country}`}
              jobTimePosted={job?.job?.jobCreatedAt}
              jobType={job?.job?.jobType}
              jobUrgency={job?.job?.jobUrgency}
              jobCategory={job?.job?.jobCategory}
              jobStatus={job?.job?.jobStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobHistoryPage;
