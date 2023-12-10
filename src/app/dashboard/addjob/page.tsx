"use client";
import React, { use } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { job_list } from "@/data/data";
import image_1 from "../../../../public/job.png";

import Chatbot from "@/components/Chatbot";
import { FaQuestion } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetChatQuery } from "@/redux/services/chat/chatAction";

const Page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Select a type");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCategory, setSelectedCategory] = useState("Select a category");

  const [click, setClick] = useState(false);
  const [query, setQuery] = useState("Hi");

  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetChatQuery({ query: query });

 useEffect(() => {
    console.log(data);
 }, [data]);

 useEffect(() => {
  console.log("query: ",query);
 }, [query]);

  const [job, setJob] = useState({
    id: 0,
    companyId: 0,
    image: image_1,
    title: "",
    experience: "",
    salary: "",
    qualification: "",
    company: "",
    location: "",
    urgency: "",
    desc: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted");
    const newJob = {
      id: Math.floor(Math.random() * 1000),
      companyId: 1,
      image: image_1,
      title: job.title,
      experience: job.experience,
      qualification: job.qualification,
      company: "SyncFlow",
      location: job.location,
      salary: job.salary,
      type: "Full Time", // replace with actual type
      urgency: job.urgency,
      category: "IT", // replace with actual category
      desc: job.desc,
    };
    console.log(job);
    // console.log(newJob);
    job_list.push(newJob);
    localStorage.setItem("job_list", JSON.stringify(job_list));
    // console.log(job_list);
  };

  return (
    <div className="min-h-screen justify-center overflow-x-hidden">
      <div className="grid grid-rows-1 grid-flow-col lg:ml-20 md:ml-10">
        <div
          className="pl-10 pb-6 pr-10 hidden md:block md:-mr-20 lg:-mr-0"
          style={{ width: "640px", height: "630px" }}
        >
          <Image
            src="/landing-pic.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover md:w-25 md:h-25 lg:w-full lg:h-full"
            priority
          />
        </div>
        <div className="pt-6 pb-16 lg:pl-10 lg:pr-20 lg:-mr-0 md:-mr-4 sm:ml-10 sm:mr-10 md:ml-0">
          <div className="pr-2 pl-2">
            <h1 className=" text-blue-500 mb-4">SyncFlow Recruitment</h1>
            <h1 className="text-4xl text-blue-900 pt-5">Add A Job</h1>

            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
                <div className="grid grid-rows-1 grid-flow-col">
                  <div className="pr-4">
                    <label
                      htmlFor="jobTitle"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      placeholder="Enter job title"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      value={job.title}
                      onChange={(e) => {
                        console.log("event.target.value:", e.target.value); // Check the event object
                        setJob({ ...job, title: e.target.value });
                        console.log("job after update:", job); // Check the state update
                      }}
                      required
                    />
                  </div>
                  <div className="pl-4">
                    <label
                      htmlFor="jobType"
                      className=" mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Job Type
                    </label>
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="w-full text-black bg-white border-black text-center inline-flex items-center justify-between min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      type="button"
                      onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
                    >
                      {selectedType}
                      <svg
                        className="w-2.5 h-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdown"
                      className={`z-10 ${
                        typeDropdownOpen ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li
                          onClick={() => {
                            setTypeDropdownOpen(false);
                            setSelectedType("Full Time");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Full Time
                          </p>
                        </li>
                        <li
                          onClick={() => {
                            setTypeDropdownOpen(false);
                            setSelectedType("Part Time");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Part Time
                          </p>
                        </li>
                        <li
                          onClick={() => {
                            setTypeDropdownOpen(false);
                            setSelectedType("Remote");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Remote
                          </p>
                        </li>
                        {/* Add more options as needed */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col gap-5">
                  <div className="">
                    <label
                      htmlFor="experience"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      placeholder="2-3 years"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      onChange={(e) => {
                        setJob({ ...job, experience: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="salary"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Salary
                    </label>
                    <input
                      type="text"
                      id="salary"
                      placeholder="100k-120k"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      onChange={(e) => {
                        setJob({ ...job, salary: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="qalification"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Qualification
                    </label>
                    <input
                      type="text"
                      id="qalification"
                      placeholder="Bachelors"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      onChange={(e) => {
                        setJob({ ...job, qualification: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col gap-5">
                  <div className="">
                    <label
                      htmlFor="jobCategory"
                      className="mb-2 font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Job Category
                    </label>
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="w-full text-black bg-white border-black gap-12 text-center inline-flex items-center justify-between min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {selectedCategory}
                      <svg
                        className="w-2.5 h-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdown"
                      className={`z-10 ${
                        dropdownOpen ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setSelectedCategory("Category 1");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Category 1
                          </p>
                        </li>
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setSelectedCategory("Category 2");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Category 2
                          </p>
                        </li>
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setSelectedCategory("Category 3");
                          }}
                        >
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Category 3
                          </p>
                        </li>
                        {/* Add more options as needed */}
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="location"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="Bachelors"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      onChange={(e) => {
                        setJob({ ...job, location: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="urgency"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Urgency
                    </label>
                    <input
                      type="text"
                      id="Urgency"
                      placeholder="Urgent"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      onChange={(e) => {
                        setJob({ ...job, urgency: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="jobDescription"
                    className="font-bold block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Job Description
                  </label>
                  <textarea
                    id="jobDescription"
                    className="mb-3 w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                    // value={companyEmail}
                    onChange={(e) => {
                      setJob({ ...job, desc: e.target.value });
                    }}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="mb-2 flex justify-center py-2 px-8 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="flex items-start absolute right-[2rem] top-[39.9rem]"
        onClick={() => setClick(!click)}
      >
        <div className="w-10 h-10 rounded-full">
          <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-600">
            <FaQuestion size={15} className="text-white" />
          </div>
        </div>
      </div>
      {/* <div className="absolute right-[2rem] top-[39.9rem]"> */}
      {isLoading && <div>Loading...</div>}
      <Chatbot click={click} setQuery={setQuery} queryResponse={data?.data || "Hi, Its SyncFlow"} />
      {/* </div> */}
    </div>
  );
};

export default Page;
