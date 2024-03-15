"use client";
import React, { useState } from "react";
import axios from "axios";
import { Backend_URL } from "@/lib/Constants";
import { getSession } from "next-auth/react";
import { parseJwt } from "@/lib/Constants";
import BarChart from "@/components/barChart";
import LineChart from "@/components/lineChart";
import StepAreaChart from "@/components/stepAreaChart";
import AreaChart from "@/components/areaChart";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import RecruiterGraphs from "@/components/recruiterDashboard/recruiterGraphs";
import RecruiterStats from "@/components/applicant/charts/applicantStats";

import "../../styles/sidebar.css";

const RecruiterPage = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.sidebarState
  );
  const verifyToken = async () => {
    try {
      const session = await getSession();
      if (!session || !session.user || !session.user.data) {
        throw new Error("Invalid session");
      }

      console.log(session);
      const jwt: string = session.user.data.jwt;
      console.log(jwt);
      const result = await axios.get(Backend_URL + "/auth/validateToken", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMySession = async () => {
    const session = await getSession();

    if (!session) {
      throw new Error("Invalid session");
    }

    const jwt: string = session.toString();
    console.log(jwt);
    const result = await axios.get(Backend_URL + "/auth/validateToken", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log(result.data);
  };

  const parseTestJwt = async () => {
    const session = await getSession();
    if (!session) {
      throw new Error("Invalid session");
    }
    const jwt: string = session.toString();
    const parsedJwt = parseJwt(jwt);
    console.log(parsedJwt);
  };

  return (
    <div
      className={`content overflow-x-hidden ${isSidebarOpen ? "shifted-dashboard" : ""
        }`}
    >
      {" "}
      <div className="container items-center  px-4 py-4">
        <h2 className="pl-10 text-4xl font-bold text-blue-700">
          Recruiter Dashboard
        </h2>
        <RecruiterStats />
      </div>
      <div
        className=" pb-20 px-24 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
        style={{ height: "10%" }}
      >
        <RecruiterGraphs />
      </div>

    </div>
  );
};
export default RecruiterPage;
