'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Pagination from "@/components/pagination";
 
import { useRouter } from 'next/navigation'
import { Job } from "@/data/data";

// import { job_list } from "@/data/data";

const Page = () => {

  // interface Job {
  //   id: number;
  //   companyId: number;
  //   image: {
  //     src: string;
  //     height: number;
  //     width: number;
  //   };
  //   title: string;
  //   experience: string;
  //   salary: string;
  //   qualification: string;
  //   company: string;
  //   location: string;
  //   urgency: string;
  //   desc: string;
  //   type: string;
  //   category: string;
  // }

  const router = useRouter();
  const [jobList, setJobList] = useState<Job[]>([]);

  useEffect(() => {
    // Load jobs from local storage when component mounts
    const savedJobs = localStorage.getItem('job_list');
    if (savedJobs) {
      setJobList(JSON.parse(savedJobs));
    }
  }, []);

  // useEffect(() => {
  //   // Save jobs to local storage whenever it changes
  //   localStorage.setItem('jobs', JSON.stringify(jobList));
  // }, [jobList]);
  
  return (
    <div className="main-content">
      <div className="page-content">
        <div className=" group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900  bg-center bg-cover relative">
          <div className="container mx-auto">
            <div className="grid">
              <div className="col-span-12 flex justify-between items-center">
                <h1 className="pl-10 text-4xl text-blue-900 pt-10 text-right">
                  All Jobs
                </h1>
                <a
                  href="/dashboard/addjob"
                  className="pr-6 mr-12 py-2.5 px-5 mb-2 text-sm mt-10 font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Add New Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid items-center grid-cols-12 mb-4">
            <div className="col-span-12 lg:col-span-8"></div>
            <div className="col-span-12 lg:col-span-4">
              <div className="candidate-list-widgets">
                <div className="grid items-center grid-cols-12 gap-3">
                  <div className="col-span-12 lg:col-span-6">
                    <div className="selection-widget">
                      <select
                        className="form-select"
                        data-trigger
                        name="choices-single-filter-orderby"
                        id="choices-single-filter-orderby"
                        aria-label="Default select example"
                      >
                        <option value="df">Default</option>
                        <option value="ne">Newest</option>
                        <option value="od">Oldest</option>
                        <option value="rd">Random</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="selection-widget">
                      <select
                        className="form-select"
                        data-trigger
                        name="choices-candidate-page"
                        id="choices-candidate-page"
                        aria-label="Default select example"
                      >
                        <option value="df">All</option>
                        <option value="ne">8 per Page</option>
                        <option value="ne">12 per Page</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center h-32 mb-5">
            <div className="grid grid-cols-1 gap-y-5">
              {jobList.map((job) => (
                <div onClick={() => router.push(`/dashboard/joblist/${job.id}`)}
                  className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900"
                  key={job.id}
                >
                  <div className="pt-6 pl-10 bg-gray-100 grid grid-cols-12">
                    <div className="justify-center col-span-12 lg:col-span-1">
                      <a href="#">
                        <div className="w-full">
                          <Image
                            src={job.image}
                            alt={job.title}
                            width={100}
                            height={350}
                            className="rounded-lg"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                      <div className="pb-3 mt-0 lg:mt-0">
                        <h5 className="mb-1 text-17">
                          <a
                            href="job-details.html"
                            className="text-gray-900 dark:text-gray-50"
                          >
                            {job.title}
                          </a>
                        </h5>
                        <ul className="flex gap-3 mb-0">
                          <li className="">
                            <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                              {job.company}
                            </p>
                          </li>
                          <li className="">
                            <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                              <i className="mdi mdi-map-marker"></i>{" "}
                              {job.location}
                            </p>
                          </li>
                          <li className="">
                            <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                              <i className="uil uil-wallet"></i> {job.salary}
                            </p>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-2 py-0.5 mt-1 font-medium text-red-500 rounded bg-red-500/20 text-13">
                            {job.type}
                          </span>
                          <span className="px-2 py-0.5 mt-1 font-medium text-yellow-500 rounded bg-yellow-500/20 text-13">
                            {job.urgency}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="items-center col-span-12 lg:col-span-2 ">
                      <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                        <li
                          className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Edit"
                          data-bs-original-title="Edit"
                        >
                          <a
                            href="manage-jobs-post.html"
                            className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18"
                          >
                            <i className="uil uil-edit"></i>
                          </a>
                        </li>
                        <li
                          className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Delete"
                          data-bs-original-title="Delete"
                        >
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                            className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18"
                          >
                            <i className="uil uil-trash-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                <div className="pt-6 pl-10 bg-gray-100 grid grid-cols-12">
                  <div className="justify-center col-span-12 lg:col-span-1">
                    <a href="#">
                      <div className="w-full">
                        <Image
                          src="/job.png"
                          alt="Image description"
                          width={100}
                          height={350}
                          className="rounded-lg"
                        />
                      </div>
                    </a>
                  </div>
                  <div className=" col-span-12 lg:col-span-9">
                    <div className="pb-3 mt-0 lg:mt-0">
                      <h5 className="mb-1 text-17">
                        <a
                          href="job-details.html"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          Business Associate
                        </a>
                      </h5>
                      <ul className="flex gap-3 mb-0">
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            Jobcy Technology Pvt.Ltd
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="mdi mdi-map-marker"></i> California
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="uil uil-wallet"></i> $250 - $800 /
                            month
                          </p>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-0.5 mt-1 font-medium text-red-500 rounded bg-red-500/20 text-13">
                          Part Time
                        </span>
                        <span className="px-2 py-0.5 mt-1 font-medium text-yellow-500 rounded bg-yellow-500/20 text-13">
                          Urgent
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="items-center col-span-12 lg:col-span-2 ">
                    <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Edit"
                        data-bs-original-title="Edit"
                      >
                        <a
                          href="manage-jobs-post.html"
                          className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-edit"></i>
                        </a>
                      </li>
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Delete"
                        data-bs-original-title="Delete"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                <div className="pt-6 pb-6 pl-10 bg-gray-100 grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-1">
                    <a href="#">
                      {/* <img src="assets/images/featured-job/img-02.png" alt="" className="img-fluid rounded-3"> */}
                      <div className="w-full ">
                        <Image
                          src="/job.png"
                          alt="Image description"
                          width={100}
                          height={350}
                          className="rounded-lg"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col-span-12 lg:col-span-9">
                    <div className="mt-4 lg:mt-0">
                      <h5 className="mb-1 text-17">
                        <a
                          href="job-details.html"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          Marketing Director
                        </a>{" "}
                        <small className="font-normal text-gray-500">
                          (2-4 Yrs Exp.)
                        </small>
                      </h5>
                      <ul className="flex gap-3 mb-0">
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            Creative Agency
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="mdi mdi-map-marker"></i> New York
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="uil uil-wallet"></i> $250 - $800 /
                            month
                          </p>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-0.5 mt-1 font-medium text-red-500 rounded bg-red-500/20 text-13">
                          Part Time
                        </span>
                        <span className="px-2 py-0.5 mt-1 font-medium text-sky-500 rounded bg-sky-500/20 text-13">
                          Private
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="items-center col-span-12 lg:col-span-2">
                    <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Edit"
                        data-bs-original-title="Edit"
                      >
                        <a
                          href="manage-jobs-post.html"
                          className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-edit"></i>
                        </a>
                      </li>
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Delete"
                        data-bs-original-title="Delete"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                <div className="pt-6 pl-10 pb-6 bg-gray-100 grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-1">
                    <a href="#">
                      <div className="w-full ">
                        <Image
                          src="/job.png"
                          alt="Image description"
                          width={100}
                          height={350}
                          className="rounded-lg"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col-span-12 lg:col-span-9">
                    <div className="mt-4 lg:mt-0">
                      <h5 className="mb-1 text-17">
                        <a
                          href="job-details.html"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          HTML Developer
                        </a>{" "}
                        <small className="font-normal text-gray-500">
                          (2-4 Yrs Exp.)
                        </small>
                      </h5>
                      <ul className="flex gap-3 mb-0">
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            Jobcy Technology Pvt.Ltd
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="mdi mdi-map-marker"></i> California
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="uil uil-wallet"></i> $250 - $800 /
                            month
                          </p>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-0.5 mt-1 font-medium text-violet-500 rounded bg-violet-500/20 text-13">
                          Freelance
                        </span>
                        <span className="px-2 py-0.5 mt-1 font-medium text-violet-500 rounded bg-violet-500/20 text-13">
                          Freelance
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="items-center col-span-12 lg:col-span-2">
                    <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Edit"
                        data-bs-original-title="Edit"
                      >
                        <a
                          href="manage-jobs-post.html"
                          className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-edit"></i>
                        </a>
                      </li>
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Delete"
                        data-bs-original-title="Delete"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                <div className="pt-6 pl-10 pb-6 bg-gray-100 grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-1">
                    <a href="#">
                      <div className="w-full ">
                        <Image
                          src="/job.png"
                          alt="Image description"
                          width={100}
                          height={350}
                          className="rounded-lg"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col-span-12 lg:col-span-9">
                    <div className="mt-4 lg:mt-0">
                      <h5 className="mb-1 text-17">
                        <a
                          href="job-details.html"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          HTML Developer
                        </a>{" "}
                        <small className="font-normal text-gray-500">
                          (5+ Yrs Exp.)
                        </small>
                      </h5>
                      <ul className="flex gap-3 mb-0">
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            Jobcy Technology Pvt.Ltd
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="mdi mdi-map-marker"></i> California
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="uil uil-wallet"></i> $250 - $800 /
                            month
                          </p>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-0.5 mt-1 font-medium text-green-500 rounded bg-green-500/20 text-13">
                          Full Time
                        </span>
                        <span className="px-2 py-0.5 mt-1 font-medium text-sky-500 rounded bg-sky-500/20 text-13">
                          Private
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="items-center col-span-12 lg:col-span-2">
                    <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Edit"
                        data-bs-original-title="Edit"
                      >
                        <a
                          href="manage-jobs-post.html"
                          className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-edit"></i>
                        </a>
                      </li>
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Delete"
                        data-bs-original-title="Delete"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                <div className="pt-6 pl-10 pb-6 bg-gray-100 grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-1">
                    <a href="#">
                      <div className="w-full ">
                        <Image
                          src="/job.png"
                          alt="Image description"
                          width={100}
                          height={350}
                          className="rounded-lg"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col-span-12 lg:col-span-9">
                    <div className="mt-4 lg:mt-0">
                      <h5 className="mb-1 text-17">
                        <a
                          href="job-details.html"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          Product Designer{" "}
                        </a>{" "}
                        <small className="font-normal text-gray-500">
                          (0-5 Yrs Exp.)
                        </small>
                      </h5>
                      <ul className="flex gap-3 mb-0">
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            Creative Agency{" "}
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="mdi mdi-map-marker"></i> California
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="uil uil-wallet"></i> $250 - $800 /
                            month
                          </p>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-0.5 mt-1 font-medium text-blue-500 rounded bg-blue-500/20 text-13">
                          Internship
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="items-center col-span-12 lg:col-span-2">
                    <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Edit"
                        data-bs-original-title="Edit"
                      >
                        <a
                          href="manage-jobs-post.html"
                          className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-edit"></i>
                        </a>
                      </li>
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Delete"
                        data-bs-original-title="Delete"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                <div className="pt-6 pl-10 pb-6 bg-gray-100 grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-1">
                    <a href="#">
                      <div className="w-full ">
                        <Image
                          src="/job.png"
                          alt="Image description"
                          width={100}
                          height={350}
                          className="rounded-lg"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col-span-12 lg:col-span-9">
                    <div className="mt-4 lg:mt-0">
                      <h5 className="mb-1 text-17">
                        <a
                          href="job-details.html"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          Project Manager{" "}
                        </a>{" "}
                        <small className="font-normal text-gray-500">
                          (0-2 Yrs Exp.)
                        </small>
                      </h5>
                      <ul className="flex gap-3 mb-0">
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            Jobcy Technology Pvt.Ltd{" "}
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="mdi mdi-map-marker"></i> California
                          </p>
                        </li>
                        <li className="">
                          <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">
                            <i className="uil uil-wallet"></i> $250 - $800 /
                            month
                          </p>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-0.5 mt-1 font-medium text-blue-500 rounded bg-blue-500/20 text-13">
                          Internship
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="items-center col-span-12 lg:col-span-2">
                    <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Edit"
                        data-bs-original-title="Edit"
                      >
                        <a
                          href="manage-jobs-post.html"
                          className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-edit"></i>
                        </a>
                      </li>
                      <li
                        className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Delete"
                        data-bs-original-title="Delete"
                      >
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
