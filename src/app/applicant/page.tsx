"use client";
import Head from "next/head";
import React, { useState } from "react";
import BarChart from "@/components/barChart";
import StepAreaChart from "@/components/stepAreaChart";
import AreaChart from "@/components/areaChart";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import ApplicantGraphs from "@/components/applicant/charts/applicantGraphs";
import ApplicantStats from "@/components/applicant/charts/applicantStats";

import "../../styles/sidebar.css";

export default function Dashboard() {
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.sidebarState
  );

  return (
    <div className={`content overflow-hidden ${isSidebarOpen ? "" : ""}`}>
      <div
        className={`content overflow-x-hidden ${
          isSidebarOpen ? "shifted-dashboard" : ""
        }`}
      >
        <div className="bg-gray-200 container items-center  px-4 py-4">
          <h2 className="pl-10 text-4xl font-bold text-blue-700">
            Applicant Dashboard
          </h2>
          <ApplicantStats />
        </div>
        <div
          className=" bg-gray-200 pb-20 px-24 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
          style={{ height: "10%" }}
        >
          <ApplicantGraphs />
        </div>
      </div>
    </div>
  );
}
