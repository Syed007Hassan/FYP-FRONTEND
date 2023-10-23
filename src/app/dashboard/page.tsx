"use client";
import React, { useState } from "react";
import axios from "axios";
import { Backend_URL } from "@/lib/Constants";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { parseJwt } from "@/lib/Constants";
import Chart1 from "@/components/chart1";
import Navbar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import Chart2 from "@/components/chart2";
import Chart3 from "@/components/chart3";


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

    <div className="fixed flex grid-rows-1 grid-flow-col">
      <Sidebar />
      <div className="border-3 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="pl-6 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 justify-items-center">
          <div className="flex items-center justify-center h-50 w-96 rounded bg-gray-50 dark:bg-gray-800">
            <Chart1 />
          </div>
          <div className="flex items-center justify-center h-100 w-96 rounded bg-gray-50 dark:bg-gray-800">
            <Chart1 />
          </div>

          <div className="flex items-center justify-center h-100 w-96 rounded bg-gray-50 dark:bg-gray-800">
            <Chart1 />
          </div>

        </div>
      </div>
      <div className="grid-rows-1 grid-flow-col">


      </div>
    </div>

  );
};
export default DashboardPage;
