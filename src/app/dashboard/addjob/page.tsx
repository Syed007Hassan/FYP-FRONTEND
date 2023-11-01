"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getSession } from "next-auth/react";

const page = () => {
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
            <h1 className="text-4xl text-blue-900 pt-20">Company Profile</h1>

            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="grid grid-rows-1 grid-flow-col">
                  <div className="pr-4">
                    <label
                      htmlFor="companyName"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Company name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="given-name"
                      value="companyName"
                      // onChange
                      required
                    />
                  </div>
                  <div className="pl-4">
                    <label
                      htmlFor="companyAddress"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Company Address
                    </label>
                    <input
                      type="text"
                      id="companyAddress"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="family-name"
                      // value={companyAddress}
                      // onChange={(e) => setCompanyAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col pt-10 pb-10">
                  <div className="pr-4">
                    <label
                      htmlFor="companyWebsite"
                      className="mb-2  font-bold block text-sm text-gray-900 dark:text-white"
                    >
                      Companys Website
                    </label>
                    <input
                      type="text"
                      id="companyWebsite"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      autoComplete="family-name"
                      // value={companyWebsite}
                      // onChange={(e) => setCompanyWebsite(e.target.value)}
                      required
                    />
                  </div>
                  <div className="pl-4">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      // value={companyPhoneNum}
                      // onChange={(e) => setCompanyPhone(e.target.value)}
                      required
                    />
                  </div>{" "}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-bold block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    id="email"
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
                  Update
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
