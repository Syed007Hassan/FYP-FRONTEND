"use client";
import ApplicantHeader from '@/components/applicant/applicantHeader';
import Head from 'next/head';
import React, { useState } from "react";
import BarChart from "@/components/barChart";
import StepAreaChart from "@/components/stepAreaChart";
import AreaChart from "@/components/areaChart";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

// import "../../styles/sidebar.css";

export default function Dashboard() {
  const isSidebarOpen = useAppSelector((state: RootState) => state.sidebar.sidebarState);

  return (
    <div>
      <ApplicantHeader />
      <div className={`content overflow-x-hidden ${isSidebarOpen ? 'shifted-dashboard' : ''}`}>

        <Head>
          <title>Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>

        <div className="container items-center px-4 py-8 m-auto mt-5">
          <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
            <ul className="w-full sm:w-4/5 text-xs sm:text-sm justify-center lg:justify-end items-center flex flex-row space-x-1 mt-6 overflow-hidden mb-4">
              <li><button className="px-4 py-2 bg-indigo-500 rounded-full text-sm text-gray-100 hover:bg-indigo-700 hover:text-gray-200">30 days</button></li>
              <li><button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">90 days</button></li>
              <li><button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">6 months</button></li>
              <li><button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">12 months</button></li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
              <div className="relative bg-blue-200 shadow rounded hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-content p-4">
                  <h2 className="text-xl font-bold">Applications Submitted</h2>
                  <p className="text-4xl">123</p>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-full bg-blue-500" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
              <div className="relative bg-green-200 shadow rounded hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-content p-4">
                  <h2 className="text-xl font-bold">Interviews Scheduled</h2>
                  <p className="text-4xl">45</p>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              <div className="relative bg-red-200 shadow rounded hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-content p-4">
                  <h2 className="text-xl font-bold">Offers Received</h2>
                  <p className="text-4xl">6</p>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-full bg-red-500" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
              <div className="relative bg-violet-200 shadow rounded hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-content p-4">
                  <h2 className="text-xl font-bold">Offers Received</h2>
                  <p className="text-4xl">6</p>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-full bg-blue-500" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
              <div className="relative bg-orange-200 shadow rounded hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-content p-4">
                  <h2 className="text-xl font-bold">Offers Received</h2>
                  <p className="text-4xl">6</p>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-full bg-gray-500" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
              {/* Add more divs here */}
            </div>


          </div>


          <div className=" w-full pt-10 sticky">
            {/* <div className="pr-30 mb-4 h-50 w-full  pt-4 bg-white border border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <LineChart />
  </div> */}

            <div
              className="h-50  flex pt-3 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
              style={{ height: "98%" }}
            >
              <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-4 mb-4 justify-items-center">
                <div className="pl-2 w-full h-50 bg-white border justify-items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                  <BarChart />
                </div>

                <div className="w-full h-50 bg-white border justify-items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                  <AreaChart />
                </div>

                <div className="w-full h-50 bg-white border justify-items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                  <StepAreaChart />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
}