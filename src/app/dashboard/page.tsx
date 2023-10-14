
'use client'
import React from "react";
import axios from "axios";
import { Backend_URL } from "@/lib/Constants";
import { getSession } from "next-auth/react";
import Link from "next/link";

const DashboardPage = () => {
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
    if (!session || !session?.user || !session?.user.data) {
      throw new Error("Invalid session");
    }
    const jwt: string = session?.user.data.jwt;
    // console.log(jwt);
    console.log(session);
  };

  const parseJwt = async () => {
    const session = await getSession();
    if (!session || !session?.user || !session?.user.data) {
      throw new Error("Invalid session");
    }
    const jwt: string = session?.user.data.jwt;
    const base64Url = jwt.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    console.log(JSON.parse(window.atob(base64)));
    // return JSON.parse(window.atob(base64));
}

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={verifyToken}>VerifyToken</button><br />
      <button onClick={getMySession}>GetMySession</button><br />
      <button onClick={parseJwt}>ExtractToken</button><br />
      <Link href="/dashboard/addemployee" legacyBehavior>
        <a>add Employee</a>
      </Link>
      <br />
      <Link href="/dashboard/my_profile" legacyBehavior>
        <a>Your Profile</a>
      </Link>
    </div>
  );
};

export default DashboardPage;
