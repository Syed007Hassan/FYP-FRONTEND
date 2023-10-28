"use client";
import React, { useState } from "react";
import axios from "axios";
import { Backend_URL } from "@/lib/Constants";
import { getSession } from "next-auth/react";
import { parseJwt } from "@/lib/Constants";
import Chart1 from "@/components/areaChart";
import Chart3 from "@/components/barChart";
import Chart4 from "@/components/lineChart";
import SalesChart from "@/components/stepAreaChart";

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const verifyToken = async () => {
    try {
      const session = await getSession();
      if (!session || !session.user || !session.user.data) {
        throw new Error("Invalid session");
      }
      // session.user.companyName = "test";
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
    <div className="w-full pt-10 sticky">
      <Chart4 />
      <div
        className="h-50  flex pt-3 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
        style={{ height: "98%" }}
      >
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-4 mb-4 justify-items-center">
          <div className="pl-2 w-full h-50 bg-white border justify-items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <Chart3 />
          </div>
          <div className="w-full h-50 bg-white border justify-items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <SalesChart />
          </div>
          <div className="w-full h-50 bg-white border justify-items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <Chart1 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
