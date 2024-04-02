"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";

import { useRouter } from "next/navigation";
import Job from "@/types/job";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetJobsQuery } from "@/redux/services/job/jobAction";
import job_pic from "../../../../public/job.png";
import { getSession } from "next-auth/react";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";
import "../../../styles/sidebar.css";
import Loader from "@/components/Loader";

const Page = () => {
  const router = useRouter();
  const [jobList, setJobList] = useState<Job[]>([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);

  const onPageChange = (page: number) => setCurrentPage(page);

  const dispatch = useAppDispatch();

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);
  const [decodedData, setDecodedData] = useState(null);
  const [companyId, setCompanyId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [search, setSearch] = useState("");

  const { data, error, isLoading } = useGetJobsQuery({ id: companyId });

  const [order, setOrder] = useState("df");
  const [status, setStatus] = useState("df");

  useEffect(() => {
    const parseJwtFromSession = async () => {
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setCompanyId(decodedData?.companyId);
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    if (data) {
      let sortedJobs = data?.data || [];

      // if(data?.success == false) {
      //   setMessage(data?.message);
      // }

      if (search) {
        sortedJobs = sortedJobs.filter((job) => {
          return (
            job.jobId.toString().includes(search) ||
            job.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
            job.jobStatus.toLowerCase().includes(search.toLowerCase())
          );
        });
      }

      if (order === "ne") {
        sortedJobs = [...sortedJobs].sort(
          (a, b) =>
            new Date(b.jobCreatedAt).getTime() -
            new Date(a.jobCreatedAt).getTime()
        );
      } else if (order === "od") {
        sortedJobs = [...sortedJobs].sort(
          (a, b) =>
            new Date(a.jobCreatedAt).getTime() -
            new Date(b.jobCreatedAt).getTime()
        );
      }

      if (status === "ac") {
        sortedJobs = sortedJobs.filter(
          (job) => job.jobStatus.toLowerCase() === "active"
        );
      } else if (status === "ev") {
        sortedJobs = sortedJobs.filter(
          (job) => job.jobStatus.toLowerCase() === "evaluating"
        );
      } else if (status === "no") {
        sortedJobs = sortedJobs.filter(
          (job) => job.jobStatus.toLowerCase() === "pending"
        );
      }

      // apply pagination
      const indexOfLastJob = currentPage * jobsPerPage;
      const indexOfFirstJob = indexOfLastJob - jobsPerPage;
      const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);

      setJobList(currentJobs);
    }
  }, [data, currentPage, jobsPerPage, order, status, search]);

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const searchValue = e.target.value;
  //   const filteredJobs = data?.data.filter((job: Job) => {
  //     return (
  //       job.jobId.toString().includes(searchValue) ||
  //       job.jobTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       job.jobStatus.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //   });

  //   setJobList(filteredJobs || []);
  // };

  return (
    <>
      {/* {data?.success == true && jobList.length == 0 ? (
        <Loader />
      ) : ( */}
      <div className={`content ${isSidebarOpen ? "shifted-dashboard" : ""}`}>
        <div className="min-h-screen main-content">
          <div className="page-content">
            <div className=" group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900  bg-center bg-cover relative">
              <div className="container mx-auto">
                <div className="grid">
                  <div className="col-span-12 flex justify-between items-center">
                    <h1 className="pl-10 text-4xl text-blue-900 pt-10 text-right">
                      All Jobs
                    </h1>
                    <a
                      href="/recruiter/addjob"
                      className="pr-6 mr-12 py-2.5 px-5 mb-2 text-sm mt-10 text-white font-bold bg-blue-600  rounded border"
                    >
                      Add New Job
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="py-10">
            <div className="container mx-auto">
              <div className="flex justify-between items-center  ml-6 mr-6">
                <form className="w-96">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search by id, name, or status"
                      required
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </form>
                <div className="flex items-center space-x-3">
                  <div className="selection-widget">
                    <select
                      className="form-select rounded"
                      data-trigger
                      name="choices-single-filter-orderby"
                      id="choices-single-filter-orderby"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    >
                      <option value="df">Default</option>
                      <option value="ac">Active</option>
                      <option value="ev">Evaluating</option>
                      <option value="no">Non Active</option>
                      {/* <option value="rd">Random</option> */}
                    </select>
                  </div>
                  <div className="selection-widget">
                    <select
                      className="form-select rounded"
                      data-trigger
                      name="choices-single-filter-orderby"
                      id="choices-single-filter-orderby"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setOrder(e.target.value);
                      }}
                    >
                      <option value="df">Default</option>
                      <option value="ne">Newest</option>
                      <option value="od">Oldest</option>
                      {/* <option value="rd">Random</option> */}
                    </select>
                  </div>
                  <div className="selection-widget">
                    <select
                      className="form-select rounded"
                      data-trigger
                      name="choices-candidate-page"
                      id="choices-candidate-page"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setJobsPerPage(parseInt(e.target.value));
                      }}
                    >
                      <option value="5">5 per page</option>
                      <option value="8">8 per Page</option>
                      <option value="12">12 per Page</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="justify-center h-32 mb-5">
                <div className="mt-8 grid grid-cols-1 gap-y-5">
                  {jobList?.length === 0 && (
                    <div className="col-span-1 text-center text-2xl text-gray-500">
                      No Jobs Found
                    </div>
                  )}

                  {jobList?.map((job) => (
                    <div
                      onClick={() =>
                        router.push(`/recruiter/joblist/${job?.jobId}`)
                      }
                      className="hover:cursor-pointerp-5 border-2  lg:ml-8 lg:mr-8 px-8 border-gray rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900"
                      key={job?.jobId}
                    >
                      <div className="py-4 bg-white grid grid-cols-12">
                        <div className="justify-center col-span-12 lg:col-span-1">
                          <a href="#">
                            <div className="pl-8 py-4 w-full">
                              <Image
                                src={job_pic}
                                alt={job?.jobTitle}
                                width={100}
                                height={500}
                                className="rounded-lg"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="pl-8 col-span-12 lg:col-span-9">
                          <div className="pb-3 mt-0 lg:mt-0">
                            <h5 className="mb-1 text-17">
                              <a className="text-gray-900 font-bold dark:text-gray-50">
                                {job?.jobTitle}
                              </a>
                            </h5>
                            <ul className="flex gap-3 mb-0">
                              <li className="">
                                <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                                  {job?.company?.companyName}
                                </p>
                              </li>
                              <li className="">
                                <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                                  <i className="mdi mdi-map-marker"></i>{" "}
                                  {job?.jobLocation?.area},{" "}
                                  {job?.jobLocation?.city}
                                </p>
                              </li>
                              <li className="">
                                <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                                  <i className="uil uil-wallet"></i>{" "}
                                  {job?.jobSalary}
                                </p>
                              </li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="px-2 py-0.5 mt-1 font-medium text-red-500 rounded bg-red-500/20 text-13">
                                {job?.jobType}
                              </span>
                              <span className="px-2 py-0.5 mt-1 font-medium text-yellow-500 rounded bg-yellow-500/20 text-13">
                                {job?.jobUrgency}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="py-6 items-center col-span-12 lg:col-span-2 ">
                          <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                            {job?.jobStatus.toLowerCase() === "active" ? (
                              <li className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20">
                                <i className="uil uil-check-circle"></i>
                              </li>
                            ) : job?.jobStatus === "evaluating" ? (
                              <li className="w-10 h-10 text-lg leading-10 text-center text-yellow-500 rounded-full bg-yellow-500/20">
                                <i className="uil uil-spinner"></i>
                              </li>
                            ) : (
                              <li className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20">
                                <i className="uil uil-times-circle"></i>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-9">
                  <Pagination
                    count={10}
                    defaultPage={1}
                    onChange={(event, page) => onPageChange(page)}
                    size="large"
                    className="mb-10"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Page;
