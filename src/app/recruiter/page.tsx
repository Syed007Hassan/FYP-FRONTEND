"use client";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import TodoList from "@/components/recruiterDashboard/toDos";
import "../../styles/sidebar.css";
import RecruiterGraphs from "@/components/recruiterDashboard/recruiterGraphs";
import RecruiterStats from "@/components/recruiterDashboard/recruiterStats";
import UserManagementDashboard from "@/components/recruiterDashboard/userManagement";
import HiringPipeline from "@/components/recruiterDashboard/hiringPipeline";



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
          <RecruiterStats />
        </div>
        <div
          className=" bg-gray-200 px-24 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
          style={{ height: "10%" }}
        >
          <RecruiterGraphs />
        </div>

        <div className="flex mt-6 px-24 mb-10 justify-between">
          <div className="flex-1 flex flex-col h-78 pb-0 mb-0 bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2 border-2 border-green-200">
            <h2 className="text-xl font-bold text-green-700">Hiring Pipeline</h2>
            <div className="p-4 flex-grow overflow-auto">
              <HiringPipeline />
            </div>
          </div>
          <div className="flex-1 flex flex-col p-4 h-64 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-2 border-2 border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Tasks</h2>
            <div className="p-4 flex-grow overflow-auto">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
