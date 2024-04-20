"use client";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import ApplicantGraphs from "@/components/applicant/charts/applicantGraphs";
import ApplicantStats from "@/components/applicant/charts/applicantStats";
import "../../styles/sidebar.css";
import { useEffect } from "react";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";
import {
  useFindAllJobApplicationsByMonthQuery,
  useFindAllJobApplicationsByApprovedStatusCountQuery,
  useFindAllJobApplicationsByPendingStatusCountQuery,
  useFindAllJobApplicationsByRejectedStatusCountQuery,
  useFindAllJobApplicationsCountQuery,
  useFindRecentJobApplicationsWithFeedbackQuery,
} from "@/redux/services/Applicant/applicantAction";
import { useGetApplicationsByApplicantIdQuery } from "@/redux/services/application/applicationAction";
import { useGetApplicantDetailsQuery } from "@/redux/services/Applicant/applicantAction";
import { Application } from "@/types/application";
import { JobApplication } from "@/types/job";
import Loader from "@/components/Loader";

export default function Dashboard() {
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.sidebarState
  );
  const [allCount, setAllCount] = useState<number>(0);
  const [approvedCount, setApprovedCount] = useState<number>(0);
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [rejectedCount, setRejectedCount] = useState<number>(0);
  const [activeJobs, setActiveJobs] = useState<Application[]>();
  const [pendingJobs, setPendingJobs] = useState<Application[]>();
  const [jobsWithFeedback, setJobsWithFeedback] = useState<JobApplication[]>();

  const [decodedData, setDecodedData] = useState<any>();
  // const [email, setEmail] = useState<string>("");
  const [applicantId, setApplicantId] = useState<string>("");

  const { data: jobApplicationsCountData } =
    useFindAllJobApplicationsCountQuery({
      id: applicantId,
    });

  const { data: jobApplicationsByMonthData } =
    useFindAllJobApplicationsByMonthQuery({
      id: applicantId,
    });

  const { data: jobApplicationsByApprovedStatusCountData } =
    useFindAllJobApplicationsByApprovedStatusCountQuery({
      id: applicantId,
    });

  const { data: jobApplicationsByPendingStatusCountData } =
    useFindAllJobApplicationsByPendingStatusCountQuery({
      id: applicantId,
    });

  const { data: jobApplicationsByRejectedStatusCountData } =
    useFindAllJobApplicationsByRejectedStatusCountQuery({
      id: applicantId,
    });

  const { data: allApplicationsData, isLoading } =
    useGetApplicationsByApplicantIdQuery({
      applicantId: applicantId,
    });

  const { data: recentJobApplicationsWithFeedbackData } =
    useFindRecentJobApplicationsWithFeedbackQuery({
      id: applicantId,
    });

  const { data: applicantDetailsData, isLoading: applicantDetailsLoading } =
    useGetApplicantDetailsQuery({
      id: applicantId,
    });

  useEffect(() => {
    if (recentJobApplicationsWithFeedbackData) {
      setJobsWithFeedback(recentJobApplicationsWithFeedbackData?.data);
    }
  }, [recentJobApplicationsWithFeedbackData]);

  useEffect(() => {
    if (allApplicationsData) {
      setActiveJobs(
        allApplicationsData?.data?.filter(
          (job: Application) => job.status.toLowerCase() === "approved"
        )
      );
      setPendingJobs(
        allApplicationsData?.data.filter(
          (job: Application) => job.status.toLowerCase() === "pending"
        )
      );
    }
  }, [allApplicationsData]);

  // useEffect(() => {
  //   console.log("activeJobs:", activeJobs);
  // }, [activeJobs]);

  useEffect(() => {
    if (jobApplicationsByApprovedStatusCountData) {
      setApprovedCount(
        jobApplicationsByApprovedStatusCountData?.data
          ? jobApplicationsByApprovedStatusCountData?.data
          : 0
      );
    }
  }, [jobApplicationsByApprovedStatusCountData]);

  useEffect(() => {
    if (jobApplicationsByPendingStatusCountData) {
      setPendingCount(
        jobApplicationsByPendingStatusCountData?.data
          ? jobApplicationsByPendingStatusCountData?.data
          : 0
      );
    }
  }, [jobApplicationsByPendingStatusCountData]);

  useEffect(() => {
    if (jobApplicationsByRejectedStatusCountData) {
      setRejectedCount(
        jobApplicationsByRejectedStatusCountData?.data
          ? jobApplicationsByRejectedStatusCountData?.data
          : 0
      );
    }
  }, [jobApplicationsByRejectedStatusCountData]);

  useEffect(() => {
    setAllCount(
      jobApplicationsCountData?.data ? jobApplicationsCountData?.data : 0
    );
  }, [jobApplicationsCountData]);

  // useEffect(() => {
  //   console.log("jobApplicationsByApprovedStatusCountData:", approvedCount);
  //   console.log("jobApplicationsByPendingStatusCountData:", pendingCount);
  //   console.log("jobApplicationsByRejectedStatusCountData:", rejectedCount);
  //   console.log("jobApplicationsCountData:", allCount);
  // }, [approvedCount, pendingCount, rejectedCount, allCount]);

  useEffect(() => {
    console.log("jobApplicationsByMonthData:", jobApplicationsByMonthData);
  }, [jobApplicationsByMonthData]);

  useEffect(() => {
    const parseJwtFromSession = async () => {
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setApplicantId(decodedData?.id.toString() || "0");
      // console.log("decodedData:", decodedData);
    };

    parseJwtFromSession();
  }, []);

  return (
    <>
      {applicantDetailsLoading ? (
        <Loader />
      ) : (
        <div
          className={`content bg-gray-200 overflow-hidden ${
            isSidebarOpen ? "" : ""
          }`}
        >
          <div
            className={`content mb-5 ${
              isSidebarOpen ? "shifted-dashboard" : ""
            }`}
          >
            <div className="bg-gray-200 container items-center  px-4 py-4">
              <ApplicantStats
                allCount={allCount}
                approvedCount={approvedCount}
                pendingCount={pendingCount}
                rejectedCount={rejectedCount}
              />
            </div>
            <div
              className=" bg-gray-200 px-24 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
              style={{ height: "10%" }}
            >
              <ApplicantGraphs
                jobApplicationsByMonth={jobApplicationsByMonthData}
                activeJobs={activeJobs}
                pendingJobs={pendingJobs}
                jobsWithFeedback={jobsWithFeedback}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
