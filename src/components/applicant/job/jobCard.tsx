import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { JobCardProps } from "@/data/data";
import Link from "next/link"; // Import the Link component from next/link package

const JobCard = (job: JobCardProps) => (
  <div className="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1">
    <div className="p-4">
      <div className="grid items-center grid-cols-12">
        <div className="col-span-12 lg:col-span-2">
          <div className="mb-4 text-center mb-md-0">
            <Link
              href="/applicant/job-feed/[jobId]"
              as={`/applicant/job-feed/${job?.jobId}`}
            >

              <Image
                src={job.jobImage}
                alt={job.jobTitle}
                width={50}
                height={50}
                className="mx-auto rounded-3"
              />
            </Link>

          </div>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <div className="mb-2 mb-md-0">
            <h5 className="mb-1 fs-18">
              <a
                href={`/applicant/job-feed/${job?.jobId}`}

                className="text-blue-900 dark:text-gray-50 font-bold text-lg"
              >
                {job.jobTitle}
              </a>
            </h5>
            <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
              {job.jobCompany}
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <div className="mb-2 lg:flex lg:gap-1 items-center">
            <div className="flex-shrink-0">
              <FaMapMarkerAlt className="text-violet-500 dark:text-gray-300" />{" "}
            </div>
            <p className="mb-0 text-gray-500 dark:text-gray-300">
              {job.jobLocation}
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-2">
          <div>
            <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
              <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
              {job.jobTimePosted}
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-2">
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">
              {job.jobType}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default JobCard;
