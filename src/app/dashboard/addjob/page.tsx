"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCategory, setSelectedCategory] = useState("Select a category");

  return (
    <div className="min-h-screen justify-center overflow-x-hidden">
      <div className="grid grid-rows-1 grid-flow-col lg:ml-20 md:ml-10">
        <div
          className="pl-10 pb-6 pr-10 hidden md:block md:-mr-20 lg:-mr-0"
          style={{ width: "650px", height: "630px" }}
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
              <div className="rounded-md shadow-sm -space-y-px">
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
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      // value="companyName"
                      // onChange
                      required
                    />
                  </div>
                  <div className="pl-4">
                    <label
                      htmlFor="jobType"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Job Type
                    </label>
                    <input
                      type="text"
                      id="jobType"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="family-name"
                      // value={companyAddress}
                      // onChange={(e) => setCompanyAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col pt-10 pb-10">
                  <div className="pr-0">
                    <label
                      htmlFor="jobCategory"
                      className="mb-2 font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Job Category
                    </label>
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="w-full text-black bg-white border-black px-5 py-2.5 text-center inline-flex items-center justify-between min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
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
                    // onChange={(e) => setCompanyEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="mb-2 flex justify-center py-2 px-8 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
