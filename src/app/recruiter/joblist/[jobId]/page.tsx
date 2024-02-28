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
import Stages from "@/components/Flow/Stages";
import { Workflow, Stage } from "@/data/data";
import Job, { JobResponse } from "@/types/job";
import { ResponseData, ApiResponse } from "@/types/stage";
import { JobApi, useGetJobQuery } from "@/redux/services/job/jobAction";
import { useGetStageQuery } from "@/redux/services/stage/stageAction";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import "../../../../styles/sidebar.css";

const Page = () => {
  const [job, setJob] = useState<Job | null>(null);
  const [workflow, setWorkflow] = useState<ApiResponse | null>(null);
  const colorClasses = [
    "bg-blue-100",
    "bg-green-100",
    "bg-red-100",
    "bg-yellow-100",
    "bg-purple-100",
  ];

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);

  const dispatch = useAppDispatch();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const jobIdString = pathname.split("/").pop() || "";
  const [jobId, setJobId] = useState<string>("5");

  const { data, error, isLoading } = useGetJobQuery({ jobId: jobId });
  const {
    data: stageData,
    error: stageError,
    isLoading: stageLoading,
    isSuccess,
  } = useGetStageQuery({ id: jobId });

  useEffect(() => {
    if (stageData) {
      setWorkflow(stageData || null);
    }
  }, [stageData]);

  useEffect(() => {
    console.log("workflow", workflow);
  }, [workflow]);

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

  return (
    <div
      className={`content overflow-hidden ${
        isSidebarOpen ? "shifted-dashboard" : ""
      }`}
    >
      <div className="main-content">
        <div className="page-content">
          <section className="py-16 px-16">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
                <div className="col-span-12 lg:col-span-8">
                  <div className="border border-dark rounded-md border-gray-100/30 dark:border-neutral-600/80">
                    <div className="relative">
                      <Image
                        src={job_img}
                        alt=""
                        width={1000}
                        // height={200}
                        className="rounded-md img-fluid mb-7"
                      />
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-8">
                          <div className="relative">
                            <h5 className="mb-1 text-gray-900 dark:text-gray-50 font-bold text-xl">
                              {job && job?.jobTitle}
                            </h5>
                            {/* <ul className="flex gap-4 text-gray-500 dark:text-gray-300">
                            <li>
                              <i className="mdi mdi-account"></i> 8 Vacancy
                            </li>
                            <li className="text-yellow-500">
                              <span className="px-2 py-1 text-white bg-yellow-500 rounded text-13">
                                4.8
                              </span>{" "}
                              <i className="align-middle mdi mdi-star"></i>
                              <i className="align-middle mdi mdi-star"></i>
                              <i className="align-middle mdi mdi-star"></i>
                              <i className="align-middle mdi mdi-star"></i>
                              <i className="align-middle mdi mdi-star-half-full"></i>
                            </li>
                          </ul> */}
                          </div>
                        </div>
                        {/* <div className="col-span-12 lg:col-span-4">
                        <div className="flex gap-3 md:justify-end">
                          <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                            <a href="javascript:void(0)">
                              <i className="uil uil-heart-alt text-lg leading-[1.8]"></i>
                            </a>
                          </div>
                          <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                            <a href="javascript:void(0)">
                              <i className="uil uil-setting text-lg leading-[1.8]"></i>
                            </a>
                          </div>
                        </div>
                      </div> */}
                      </div>

                      <div className="grid grid-cols-12 mt-8 gap-y-3 lg:gap-3">
                        <div className="col-span-12 lg:col-span-3">
                          <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                            <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">
                              Experience
                            </p>
                            <p className="font-medium text-gray-900 dark:text-gray-50">
                              {job && job?.jobExperience}
                            </p>
                          </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                          <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                            <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">
                              Employee type
                            </p>
                            <p className="font-medium text-gray-900 dark:text-gray-50">
                              {job && job?.jobType}
                            </p>
                          </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                          <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                            <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">
                              Position
                            </p>
                            <p className="font-medium text-gray-900 dark:text-gray-50">
                              {/* {job?.position} */}
                            </p>
                          </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                          <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
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
                        <h5 className="mb-3 text-gray-900 dark:text-gray-50">
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

                      <div className="mt-4">
                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">
                          PHP
                        </span>
                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">
                          JS
                        </span>
                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">
                          Marketing
                        </span>
                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">
                          REACT
                        </span>
                        <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">
                          PHOTOSHOP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 space-y-6 lg:col-span-4">
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
                                style={{ color: "purple", fontSize: "24px" }}
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
                                style={{ color: "purple", fontSize: "24px" }}
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
                                style={{ color: "purple", fontSize: "24px" }}
                              />
                            </div>
                            <div className="pl-4">
                              <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">
                                Location
                              </h6>
                              <p className="text-gray-500 dark:text-gray-300">
                                {job && job?.jobLocation?.area} ,{job && job?.jobLocation?.city}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex mt-6">
                            <div className="rounded-full border border-purple-500 p-3">
                              <FaDollarSign
                                style={{ color: "purple", fontSize: "24px" }}
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
                                style={{ color: "purple", fontSize: "24px" }}
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
                        {/* <li>
                        <div className="flex mt-6">
                          <div className="rounded-full border border-purple-500 p-3">
                            <FaBuilding
                              style={{ color: "purple", fontSize: "24px" }}
                            />
                          </div>
                          <div className="pl-4">
                            <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">
                              Industry
                            </h6>
                            <p className="text-gray-500 dark:text-gray-300">
                              Private
                            </p>
                          </div>
                        </div>
                      </li> */}
                        <li>
                          <div className="flex mt-6">
                            <div className="rounded-full border border-purple-500 p-3">
                              <FaHistory
                                style={{ color: "purple", fontSize: "24px" }}
                              />
                            </div>
                            <div className="pl-4">
                              <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">
                                Date Posted
                              </h6>
                              <p className="text-gray-500 dark:text-gray-300">
                                Posted 2 hrs ago
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <div className="mt-8 flex gap-5">
                        <Link
                          href="/recruiter/joblist/[jobId]/workflow"
                          as={`/recruiter/joblist/${job?.jobId}/workflow`}
                          className="btn w-full py-2 text-center items-center justify-center flex bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30"
                        >
                          <i className="fas fa-bookmark"></i> Add Workflow
                        </Link>

                        <Link
                          href="/recruiter/joblist/[jobId]/analytics"
                          as={`/recruiter/joblist/${job?.jobId}/analytics`}
                          className="btn text-center px-0 py-0 items-center justify-center flex bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30"
                          title="Job analytics"
                        >
                          <MdAnalytics
                            style={{ height: "3rem", width: "3rem" }}
                          />
                        </Link>
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
                            {workflow?.data.map((data: any, index: number) => {
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
                            })}
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
  );
};

export default Page;
