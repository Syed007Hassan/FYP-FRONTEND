"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { MdAnalytics } from "react-icons/md";
import Image from "next/image";
import job_img from "../../../../../public/job.png";
import Link from "next/link";
import {
  FaBuilding,
  FaDollarSign,
  FaGraduationCap,
  FaHistory,
  FaMapMarkerAlt,
  FaStarHalfAlt,
  FaUser,
} from "react-icons/fa";
import Cookies from "js-cookie";
import { parseJwt } from "@/lib/Constants";
import Stages from "@/components/Flow/Stages";
import { Workflow, Stage } from "@/data/data";
import Job, { JobResponse } from "@/types/job";
import { ResponseData, ApiResponse } from "@/types/stage";
import {
  JobApi,
  useGetJobQuery,
  updateJobStatus,
} from "@/redux/services/job/jobAction";
import {
  removeWorkflow,
  useGetStageQuery,
} from "@/redux/services/stage/stageAction";
import Toast, { ToastProps } from "@/components/Toast";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import "../../../../styles/sidebar.css";
import Alert from "@mui/material/Alert";
import Loader from "@/components/Loader";

const Page = () => {
  const [toastProps, setToastProps] = useState<ToastProps | null>(null);
  const [token, setToken] = useState<string>("");
  const [job, setJob] = useState<Job | null>(null);
  const [workflow, setWorkflow] = useState<ApiResponse | null>(null);
  const [isPublish, setIsPublish] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const colorClasses = [
    "bg-blue-100",
    "bg-green-100",
    "bg-red-100",
    "bg-yellow-100",
    "bg-purple-100",
  ];

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);
  const { deleteSuccess } = useAppSelector((state) => state.stageReducer);
  const jobState = useAppSelector((state) => state.jobReducer.success);
  const [selectedOption, setSelectedOption] = useState("");

  const dispatch = useAppDispatch();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const jobIdString = pathname.split("/").pop() || "";
  const [jobId, setJobId] = useState<string>("5");

  const { data, error, isLoading, refetch } = useGetJobQuery({ jobId: jobId });
  const {
    data: stageData,
    error: stageError,
    isLoading: stageLoading,
    isSuccess,
    refetch: refetchStage,
  } = useGetStageQuery({ id: jobId });

  useEffect(() => {
    if (stageData) {
      console.log("stageData", stageData);
      setWorkflow(stageData || null);
    }
  }, [stageData]);

  useEffect(() => {
    if (toastProps) {
      const timer = setTimeout(() => {
        setToastProps(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [toastProps]);

  useEffect(() => {
    const parseJwtFromSession = async () => {
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      setToken(jwt);
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    setJobId(jobIdString);
  }, [jobIdString]);

  useEffect(() => {
    if (data) {
      console.log("data", data);
      setJob(data?.data || null);
    }
  }, [data]);

  useEffect(() => {
    console.log("job", job);
  }, [job]);

  const handlePublishJob = (status: string) => {
    // console.log("workflow", workflow);
    console.log("status", status);
    setIsClicked(true);

    if (workflow?.success) {
      dispatch(updateJobStatus({ jobId: jobId, status: status, token }));
      setIsPublish(true);
    } else {
      setIsPublish(false);
      // alert("Please add workflow to publish job");
    }
  };

  setTimeout(() => {
    setIsClicked(false);
    setIsPublish(false);
  }, 5000);

  useEffect(() => {
    if (isPublish) {
      console.log("Hello");
      refetch();
    }
  }, [isPublish]);

  useEffect(() => {
    refetchStage();
  }, [refetchStage, stageData]);

  const deleteWorkflow = async () => {
    // if (workflow && workflow.data[0]) {
    //   dispatch(removeWorkflow({ workflowId: workflow.data[0].workflowId.toString(), token }));
    // } else {
    //   console.error("Cannot delete workflow: workflow data is not available");
    // }

    try {
      if (workflow && workflow.data[0]) {
        await dispatch(
          removeWorkflow({
            workflowId: workflow.data[0].workflowId.toString(),
            token,
          })
        );
        setToastProps({
          type: "success",
          message: "Workflow deleted successfully",
        });
      } else {
        setToastProps({
          type: "error",
          message: "Cannot delete workflow: workflow data is not available",
        });
      }
    } catch (error) {
      setToastProps({
        type: "error",
        message: "Error deleting workflow",
      });
    }
  };

  useEffect(() => {
    if (deleteSuccess) {
      refetchStage();
    }
  }, [deleteSuccess]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`content overflow-hidden ${
            isSidebarOpen ? "shifted-dashboard" : ""
          }`}
        >
          {toastProps && <Toast {...toastProps} />}
          <div className="main-content">
            <div className="page-content">
              <section className="py-16 px-16">
                <div className="container mx-auto">
                  <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
                    <div className="col-span-12 lg:col-span-8">
                      <div className="border border-dark rounded-md border-gray-100/30 dark:border-neutral-600/80">
                        {/* <div className="relative">
                          <Image
                            src={job_img}
                            alt=""
                            width={1000}
                            // height={200}
                            className="rounded-md img-fluid mb-7"
                          />
                        </div> */}
                        <div className="border-2 border-gray p-6">
                          <div className=" grid grid-cols-12">
                            <div className="col-span-12 lg:col-span-8">
                              <div className="relative">
                                <h5 className="mb-1 text-gray-900 dark:text-gray-50 font-bold text-xl">
                                  {job && job?.jobTitle}
                                </h5>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-12 mt-8 gap-y-3 lg:gap-3">
                            <div className="col-span-12 lg:col-span-3">
                              <div className="p-4 border bg-blue-200 font-bold rounded border-gray-100/50 dark:border-neutral-600/80">
                                <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">
                                  Experience
                                </p>
                                <p className="font-medium text-gray-900 dark:text-gray-50">
                                  {job && job?.jobExperience}
                                </p>
                              </div>
                            </div>
                            <div className="col-span-12 lg:col-span-3">
                              <div className="p-4 border rounded bg-yellow-200 font-bold  border-gray-100/50 dark:border-neutral-600/80">
                                <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">
                                  Employee type
                                </p>
                                <p className="font-medium text-gray-900 dark:text-gray-50">
                                  {job && job?.jobType}
                                </p>
                              </div>
                            </div>
                            <div className="col-span-12 lg:col-span-3">
                              <div className="p-4 border rounded bg-pink-200 font-bold  border-gray-100/50 dark:border-neutral-600/80">
                                <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">
                                  Job Status
                                </p>
                                <p className="font-medium text-gray-900 dark:text-gray-50">
                                  {job?.jobStatus}
                                </p>
                              </div>
                            </div>
                            <div className="col-span-12 lg:col-span-3">
                              <div className="p-4 border rounded bg-green-200 font-bold  border-gray-100/50 dark:border-neutral-600/80">
                                <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">
                                  Offer Salary
                                </p>
                                <p className="font-medium text-gray-900 dark:text-gray-50">
                                  {job && job?.jobSalary}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-5">
                            <h5 className="mb-3 text-gray-900 dark:text-gray-50 font-bold">
                              Job Description
                            </h5>
                            <div>
                              <p
                                className="mb-0 text-gray-500 dark:text-gray-300"
                                dangerouslySetInnerHTML={{
                                  __html: job?.jobDescription || "",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-2 border-gray rounded col-span-12 space-y-6 lg:col-span-4">
                      <div className="border rounded border-gray-100/30 dark:border-neutral-600/80">
                        <div className="p-6">
                          <h6 className="text-gray-900 text-17 font-bold dark:text-gray-50">
                            Job Overview
                          </h6>

                          <ul>
                            <li>
                              <div className="flex mt-6 mb-7">
                                <div className="rounded-full border border-purple-500 p-3">
                                  <FaUser
                                    style={{
                                      color: "purple",
                                      fontSize: "24px",
                                    }}
                                  />
                                </div>
                                <div className="pl-4">
                                  <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">
                                    Job Title
                                  </h6>
                                  <p className="text-gray-500 dark:text-gray-300">
                                    {job && job?.jobTitle}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex mt-6">
                                <div className="rounded-full border border-purple-500 p-3">
                                  <FaStarHalfAlt
                                    style={{
                                      color: "purple",
                                      fontSize: "24px",
                                    }}
                                  />
                                </div>
                                <div className="pl-4">
                                  <h6 className="mb-2 text-sm text-gray- font-bold dark:text-gray-50">
                                    Experience
                                  </h6>
                                  <p className="text-gray-500 dark:text-gray-300">
                                    {job && job?.jobExperience}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex mt-6">
                                <div className="rounded-full border border-purple-500 p-3">
                                  <FaMapMarkerAlt
                                    style={{
                                      color: "purple",
                                      fontSize: "24px",
                                    }}
                                  />
                                </div>
                                <div className="pl-4">
                                  <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">
                                    Location
                                  </h6>
                                  <p className="text-gray-500 dark:text-gray-300">
                                    {job && job?.jobLocation?.area} ,
                                    {job && job?.jobLocation?.city}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex mt-6">
                                <div className="rounded-full border border-purple-500 p-3">
                                  <FaDollarSign
                                    style={{
                                      color: "purple",
                                      fontSize: "24px",
                                    }}
                                  />
                                </div>
                                <div className="pl-4">
                                  <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">
                                    Offered Salary
                                  </h6>
                                  <p className="text-gray-500 dark:text-gray-300">
                                    {job && job?.jobSalary}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="flex mt-6">
                                <div className="rounded-full border border-purple-500 p-3">
                                  <FaGraduationCap
                                    style={{
                                      color: "purple",
                                      fontSize: "24px",
                                    }}
                                  />
                                </div>
                                <div className="pl-4">
                                  <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">
                                    Qualification
                                  </h6>
                                  <p className="text-gray-500 dark:text-gray-300">
                                    {job && job?.jobQualification}
                                  </p>
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="flex mt-6">
                                <div className="rounded-full border border-purple-500 p-3">
                                  <FaHistory
                                    style={{
                                      color: "purple",
                                      fontSize: "24px",
                                    }}
                                  />
                                </div>
                                <div className="pl-4">
                                  <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">
                                    Date Posted
                                  </h6>
                                  <p className="text-gray-500 dark:text-gray-300">
                                    {job &&
                                      job?.jobCreatedAt &&
                                      job.jobCreatedAt.split("T")[0]}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>

                          <div className="mt-8 flex gap-5">
                            {workflow?.data ? (
                              <button
                                onClick={deleteWorkflow}
                                className="btn w-full py-2 text-center items-center justify-center flex bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30"
                              >
                                Delete Workflow
                              </button>
                            ) : (
                              <Link
                                href="/recruiter/joblist/[jobId]/workflow"
                                as={`/recruiter/joblist/${job?.jobId}/workflow`}
                                className="btn w-full py-2 text-center items-center justify-center flex bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30"
                              >
                                <i className="fas fa-bookmark"></i> Add Workflow
                              </Link>
                            )}
                            <select
                              className="btn w-full py-2 text-center items-center justify-center flex bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30"
                              value={
                                selectedOption !== ""
                                  ? selectedOption
                                  : job?.jobStatus
                              }
                              onChange={(e) => {
                                setSelectedOption(e.target.value);
                                handlePublishJob(e.target.value);
                              }}
                            >
                              <option value="Select a status">
                                Select a status
                              </option>
                              <option value="Active">Active</option>
                              <option value="Evaluating">Evaluating</option>
                              <option value="UnActive">Un Active</option>
                            </select>

                            <Link
                              href="/recruiter/joblist/[jobId]/analytics"
                              as={`/recruiter/joblist/${job?.jobId}/analytics`}
                              passHref
                            >
                              <div
                                className="btn text-center px-0 py-0 items-center justify-center flex bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30"
                                title="Job analytics"
                                onClick={(e) => {
                                  if (!stageData?.success) {
                                    // alert(
                                    //   "Please add workflow to view analytics"
                                    // );
                                    setIsClicked(true);
                                    e.preventDefault();
                                  }
                                }}
                              >
                                <MdAnalytics
                                  style={{ height: "3rem", width: "3rem" }}
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="mt-5">
                            {isClicked && isPublish && (
                              <Alert severity="success">
                                job status updated successfully
                              </Alert>
                            )}
                            {isClicked && !isPublish && (
                              <Alert severity="error">
                                Please add workflow to publish job
                              </Alert>
                            )}
                            {isClicked && !stageData?.success && (
                              <Alert severity="error">
                                Please add workflow to view analytics
                              </Alert>
                            )}
                          </div>
                        </div>
                      </div>
                      {workflow?.data && (
                        <div className="col-span-12 space-y-6 lg:col-span-4">
                          <div className="border rounded border-gray-100/30 dark:border-neutral-600/80">
                            <div className="p-6">
                              <h6 className="text-gray-900 text-17 font-bold dark:text-gray-50 mb-2">
                                Workflow
                              </h6>
                              <div className="space-y-6">
                                {workflow?.data.map(
                                  (data: any, index: number) => {
                                    return data?.stages.map(
                                      (stage: any, index: number) => {
                                        return (
                                          <Stages
                                            key={stage.stageId}
                                            stage={stage}
                                            index={index}
                                            workflowId={data?.workflowId}
                                          />
                                        );
                                      }
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-16 px-16"></section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
