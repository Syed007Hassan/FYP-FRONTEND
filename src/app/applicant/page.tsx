"use client";
import Head from "next/head";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import ApplicantGraphs from "@/components/applicant/charts/applicantGraphs";
import ApplicantStats from "@/components/applicant/charts/applicantStats";
import TodoList from "@/components/applicant/charts/toDos";
import UserManagementDashboard from "@/components/recruiterDashboard/userManagement";
import "../../styles/sidebar.css";



export default function Dashboard() {
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.sidebarState
  );

  return (
    <div className={`content bg-gray-200 overflow-hidden ${isSidebarOpen ? "" : ""}`}>
      <div
        className={`content overflow-x-hidden ${isSidebarOpen ? "shifted-dashboard" : ""
          }`}
      >
        <div className="bg-gray-200 container items-center  px-4 py-4">

          <ApplicantStats />
        </div>
        <div
          className=" bg-gray-200 px-24 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
          style={{ height: "10%" }}
        >
          <ApplicantGraphs />
        </div>

        <div className="flex mt-6 px-24 justify-between">
          <div className="lg:w-5/6 xl:w-2/3 h-100 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
            <h2 className="text-xl font-bold mb-4">User Management</h2>
            <div className="p-4">
              <UserManagementDashboard />
            </div>
          </div>
          <div className="lg:w-5/6 xl:w-2/3 h-100 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2">
            <h2 className="text-xl font-bold mb-4">Tasks</h2>
            <div className="p-4">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
