"use client";
import React, { useState } from "react";
import axios from "axios";
import { Backend_URL } from "@/lib/Constants";
import { getSession } from "next-auth/react";
import { parseJwt } from "@/lib/Constants";
import Chart1 from "@/components/chart1";
import Chart3 from "@/components/chart3";
import Chart4 from "@/components/chart4";
import examplechart from "@/components/chart2";
import SalesChart from "@/components/chart2";
import ColumnChart from "@/components/chart3";


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

    <div className="pl-32 pt-10 sticky flex">
      <div className="h-50 border-gray-200 border-dashed rounded-lg dark:border-gray-700" style={{ height: "98%" }}>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-4 mb-4 justify-items-center">

          <div className="w-full h-50 bg-white border justify-items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <ColumnChart />
          </div>

          <div className="w-full h-50 bg-white border justify-items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <SalesChart />
          </div>
          <div className="w-full h-50 bg-white border justify-items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <Chart1 />
          </div>
        </div>
        <div className="w-full h-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <Chart4 />
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
