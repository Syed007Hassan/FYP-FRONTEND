
'use client'
import React from "react";
import axios from "axios";
import { Backend_URL } from "@/lib/Constants";
import { getSession } from "next-auth/react";

const DashboardPage = () => {
  const verifyToken = async () => {
    try {
      const session = await getSession();
      // console.log(session);
      if (!session || !session?.user || !session?.user?.data) {
        throw new Error("Invalid session");
      }
      const jwt: string = session?.user.data.jwt;
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
    if (!session || !session?.user || !session?.user.data) {
      throw new Error("Invalid session");
    }
    const jwt: string = session?.user.data.jwt;
    console.log(jwt);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={verifyToken}>VerifyToken</button>
      <button onClick={getMySession}>GetMySession</button>
    </div>
  );
};

export default DashboardPage;
