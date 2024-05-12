"use client";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import TodoList from "@/components/recruiterDashboard/toDos";
import "../../styles/sidebar.css";
import RecruiterGraphs from "@/components/recruiterDashboard/recruiterGraphs";
import RecruiterGraphs_2 from "@/components/recruiterDashboard/recruiterGraphs_2";
import RecruiterStats from "@/components/recruiterDashboard/recruiterStats";
import UserManagementDashboard from "@/components/recruiterDashboard/userManagement";
import HiringPipeline from "@/components/recruiterDashboard/hiringPipeline";
import { useGetCompanyQuery } from "@/redux/services/Company/companyAction";
import { useGetUserByIdQuery } from "@/redux/services/Recruiter/recruiterAction";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { parseJwt } from "@/lib/Constants";
import Recruiter from "@/types/recruiter";
import Company from "@/types/company";
import Loader from "@/components/Loader";

export default function Dashboard() {
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.sidebarState
  );

  const [decodedData, setDecodedData] = useState<any>();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [companyId, setCompanyId] = useState<number>(0);
  const [recruiterId, setRecruiterId] = useState<number>(0);
  const [company, setCompany] = useState<Company | null>(null);
  const [recruiter, setRecruiter] = useState<Recruiter | null>(null);

  const { data, error, isLoading } = useGetCompanyQuery({ id: companyId });

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useGetUserByIdQuery({ recruiterId });

  useEffect(() => {
    if (userData) {
      setRecruiter({
        recruiterId: userData?.data?.recruiterId,
        name: userData?.data?.name,
        email: userData?.data?.email,
        password: userData?.data?.password,
        phone: userData?.data?.phone.toString(), // convert phone to string
        designation: userData?.data?.designation,
        role: userData?.data?.role,
        company: userData?.data?.company,
      });
    }
  }, [userData]);

  useEffect(() => {
    if (data) {
      setCompany({
        companyId: data.data?.companyId, // add this line
        companyName: data.data?.companyName,
        companyEmail: data.data?.companyEmail,
        companyProfile: data.data?.companyProfile,
        companyWebsite: data.data?.companyWebsite,
        companyAddress: data.data?.companyAddress,
        companyPhone: data.data?.companyPhone,
      });
    }
    // console.log("Company", data);
  }, [data]);

  useEffect(() => {
    const parseJwtFromSession = async () => {
      // const session = await getSession();
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setEmail(decodedData?.email || "");
      setName(decodedData?.name || "");
      setRole(decodedData?.role || "");
      setCompanyId(decodedData?.companyId || 0);
      setRecruiterId(decodedData?.recruiterId || 0);
    };

    parseJwtFromSession();
  }, []);

  return (
    <>
      {isLoading || userLoading ? (
        <Loader />
      ) : (
        <div
          className={`content bg-gray-200 overflow-hidden ${
            isSidebarOpen ? "" : ""
          }`}
        >
          <div
            className={`content overflow-x-hidden ${
              isSidebarOpen ? "shifted-dashboard" : ""
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
            <div
              className=" bg-gray-200 px-24 mt-5 mb-5 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
              style={{ height: "10%" }}
            >
              <RecruiterGraphs_2 />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
