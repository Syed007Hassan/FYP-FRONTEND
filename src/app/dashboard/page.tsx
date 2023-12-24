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
import { getCookies } from "cookies-next";

import "../../styles/sidebar.css";

const DashboardPage = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);
  const verifyToken = async () => {
    try {
      const session = await getSession();
      console.log(JSON.stringify(session) + "testing session");

      //get cookie from browser that has name session
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const cookies = getCookies();

      if (session == null) {
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
      className={`content overflow-x-hidden ${
        isSidebarOpen ? "shifted-dashboard" : ""
      }`}
    >
      <button onClick={verifyToken}>Verify Token</button>
      <div className=" w-full pt-10 sticky">
        <div className="pr-30 mb-4 h-50 w-full  pt-4 bg-white border border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <LineChart />
        </div>

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
  );
};
export default DashboardPage;
