"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useGetApplicantDetailsQuery } from "@/redux/services/Applicant/applicantAction";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { ApplicantDetails } from "@/types/applicant";
import Loader from "@/components/Loader";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSkype,
} from "react-icons/fa";

import "@/styles/sidebar.css";

const Page = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pathParts = pathname.split("/");
  const jobIdParam = pathParts[pathParts.length - 1] || "";

  const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>();

  const { data, error, isLoading } = useGetApplicantDetailsQuery({
    id: jobIdParam,
  });

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);

  useEffect(() => {
    if (data) {
      setApplicantDetails(data?.data);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`content overflow-hidden ${
            isSidebarOpen ? "shifted-dashboard" : ""
          }`}
        >
          <div className="main-content">
            <div className="pt-4 page-content">
              <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
                  <div className="pl-40 col-span-12 lg:col-span-4">
                    <div className="border-4 rounded border-gray-100/50 dark:border-neutral-600">
                      <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                        <div className="text-center">
                          <div className="relative">
                            <div className="relative inline-block">
                              <Image
                                src={
                                  applicantDetails?.profilePicture &&
                                  applicantDetails?.profilePicture !== "adas"
                                    ? applicantDetails?.profilePicture
                                    : "/user.png"
                                }
                                alt="User"
                                width={100}
                                height={100}
                                className="mx-auto rounded-full"
                              />
                            </div>
                            <h6 className="mt-2 mb-0 text-lg text-gray-900 dark:text-gray-50">
                              {applicantDetails?.applicant?.name}
                            </h6>
                            <p className="mb-2 text-gray-500 dark:text-gray-300">
                              Creative Designer
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                        <h6 className="mb-5 font-semibold text-gray-900 text-17 dark:text-gray-50">
                          Profile Overview
                        </h6>
                        <ul className="space-y-4">
                          <li>
                            <div className="flex">
                              <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">
                                Date Of Birth
                              </label>
                              <div>
                                <p className="mb-0 text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.dob}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex">
                              <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">
                                Gender
                              </label>
                              <div>
                                <p className="mb-0 text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.gender}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex">
                              <label className="text-gray-900 w-[118px] font-medium dark:text-gray-50">
                                Languages
                              </label>
                              <div>
                                <p className="mb-0 text-gray-500 dark:text-gray-300">
                                  English, Turkish, Japanese
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="p-5">
                        <div className="relative justify-between flex mt-4">
                          <h6 className="mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50">
                            Contact Details
                          </h6>
                        </div>
                        <ul>
                          <li>
                            <div className="flex items-center mt-4">
                              <div className="group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-11 w-11 text-xl text-center leading-[2.3] rounded-full group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                                <FaEnvelope />
                              </div>
                              <div className="ltr:ml-3 rtl:mr-3">
                                <h6 className="mb-1 text-gray-900 text-14 dark:text-gray-50">
                                  Email
                                </h6>
                                <p className="text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.applicant?.email}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center mt-4">
                              <div className="group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-11 w-11 text-xl text-center leading-[2.3] rounded-full group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                                <FaMapMarkerAlt />
                              </div>
                              <div className="ltr:ml-3 rtl:mr-3">
                                <h6 className="mb-1 text-gray-900 text-14 dark:text-gray-50">
                                  Address
                                </h6>
                                <p className="text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.location?.area},{" "}
                                  {applicantDetails?.location?.city},{" "}
                                  {applicantDetails?.location?.country}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center mt-4">
                              <div className="group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-11 w-11 text-xl text-center leading-[2.3] rounded-full group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                                <FaPhoneAlt />
                              </div>
                              <div className="ltr:ml-3 rtl:mr-3">
                                <h6 className="mb-1 text-gray-900 text-14 dark:text-gray-50">
                                  Phone
                                </h6>
                                <p className="text-gray-500 dark:text-gray-300">
                                  {applicantDetails?.phoneNo}
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pr-40 col-span-12 lg:col-span-8">
                    <div className="p-6 border-4 rounded border-gray-100/50 dark:border-neutral-600">
                      <div>
                        <div className="relative justify-between flex mt-4">
                          <h6 className="mb-3 font-semibold text-gray-900 text-17 dark:text-gray-50">
                            About Me
                          </h6>
                        </div>
                        <p className="mb-2 text-gray-500 dark:text-gray-300">
                          {applicantDetails?.aboutMe}
                        </p>
                      </div>
                      <div className="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                        <h6 className="mb-3 mr-0 font-semibold text-gray-900 text-17 dark:text-gray-50">
                          Professional Skills
                        </h6>
                        <div className="flex flex-wrap gap-2">
                          {applicantDetails?.skills?.map((skill, index) => (
                            <span
                              key={index}
                              className="px-1 py-1 font-medium text-green-500 rounded bg-green-400/20 text-13"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-5 ">
                        <div className="relative justify-between flex mt-4">
                          <h6 className="mb-0 text-gray-900 font-semibold text-17 fw-bold dark:text-gray-50">
                            Education
                          </h6>
                        </div>
                        {applicantDetails?.education?.map(
                          (education, index) => (
                            <div className="flex mt-8" key={index}>
                              <div className="h-8 w-8 ml-3 mr-3 text-center leading-[2.2] bg-blue-700 text-white rounded-full font-medium">
                                {index + 1}
                              </div>
                              <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                                <div>
                                  <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">
                                    {education?.degree}
                                  </h6>
                                  <p className="mb-2 text-gray-500 dark:text-gray-300">
                                    {education?.institution} - (
                                    {education.startDate} - {education.endDate})
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="pt-10">
                        <div className="relative justify-between flex mt-4">
                          <h6 className="mb-0 text-gray-900 font-semibold text-17 fw-bold dark:text-gray-50">
                            Experience
                          </h6>
                        </div>
                        {applicantDetails?.experience?.map(
                          (experience, index) => (
                            <div className="flex mt-8" key={index}>
                              <div className="h-8 w-8 ml-3 mr-3 text-center leading-[2.2] bg-blue-700 text-white rounded-full font-medium">
                                {index + 1}
                              </div>
                              <div className="space-y-6 ltr:ml-4 rtl:mr-4">
                                <div>
                                  <h6 className="mb-1 text-gray-900 text-16 dark:text-gray-50">
                                    {experience?.title}
                                  </h6>
                                  <p className="mb-2 text-gray-500 dark:text-gray-300">
                                    {experience?.company} - (
                                    {experience.startDate} -{" "}
                                    {experience.endDate})
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
