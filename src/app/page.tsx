"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Images from "@/app/public/images/landing-pic.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { applicants } from "@/data/data";

export default function Home() {

  useEffect(() => {
    localStorage.setItem("applicants", JSON.stringify(applicants));
  }
  , [])
  return (
    <div className=" min-h-screen justify-center">
      <Header />

      <div className="grid grid-rows-1 grid-flow-col">
        <div className="pt-6 pr-20 pl-10 pb-6">
          <header className="pr-20 pl-20">
            <h1 className=" text-blue-500 mb-4">SyncFlow recruitment</h1>
            <h1 className="pr-20 text-7xl font-semibold text-blue-900 my-8">
              Welcome to the Future of Hiring with SyncFlow
            </h1>
            <p className="text-lg text-gray-600">
              Customize, Interact, Elevate: Transform Your Hiring Landscape Effectively with Our Intelligent Recruitment Platform.
            </p>
            {/* request a demo button */}
            <div className="flex pt-9">
              <button className="bg-blue-700 text-white rounded-full py-3 px-6 font-semibold hover:bg-blue-600">
                Request a demo
              </button>
            </div>
          </header>
        </div>
        <div
          className="pl-10 pb-6 pr-10 flex"
          style={{ width: "650px", height: "630px" }}
        >
          <Image
            src="/landing-pic.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover w-full h-full hidden lg:block"
          />
        </div>
      </div>

      {/* 2 container */}
      <div className="lg:pl-20 pb-10 pt-10 lg:pr-20 pl-32 pr-10">
        <div className="lg:pr-64 pr-10">
          <h1 className="text-5xl font-normal text-gray-800 my-8 lg:pl-20 lg:pr-64 pr-10">
            Unlock the Tools and Expertise to Elevate Your Recruitment Game and Make Smarter Decisions.
          </h1>
        </div>
        <div className="grid grid-rows-1 grid-flow-col pt-16 lg:pl-16 lg:pr-16">
          <div className="flex justify-center border-solid border-blue-800 border-r-2 border-b-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Real-time visibility into each application's progress
            </p>
          </div>
          <div className="flex justify-center border-solid border-blue-800 border-r-2 border-b-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Personalize your hiring journey with ease
            </p>
          </div>
          <div className=" flex justify-center border-solid border-blue-800 border-b-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Make growth-focused decisions with analytics
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 grid-flow-col lg:pr-16 pb-16 lg:pl-16">
          <div className="flex justify-center border-solid border-blue-800 border-r-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Source and nurture the right candidates
            </p>
          </div>
          <div className="flex justify-center border-solid border-blue-800 border-r-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Streamline early hiring stages for efficiency.
            </p>
          </div>
          <div className=" flex justify-center pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Minimize bias, ensure equality in assessments
            </p>
          </div>
        </div>
      </div>

      {/* //  How it can work: */}

      <div className="max-w-6xl mx-auto py-10 px-4 pt-20">
        <h1 className="text-5xl font-normal text-gray-800 mb-8">
          How it can work:
        </h1>
        <div className="lg:space-y-8 pt-20">
          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold">
                Effortless Custom Workflows for Strategic Hiring
              </h1>
              <p className="text-lg font-medium text-gray-800 my-4">
                Crafting custom workflows is a breeze with our intuitive platform, empowering recruiters to seamlessly tailor the hiring process. This not only saves time but ensures alignment with the unique goals and objectives of your organization.
              </p>
            </div>
            <div className="pl-16 lg:w-1/2">
              <Image
                src="/customized-workflow.png"
                alt="Image Description 1"
                className="w-full h-auto max-w-md"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4 pt-20">
            <div className="w-full lg:w-1/2">
              <Image
                src="/recruiting1.png"
                alt="Image Description 2"
                className="w-full h-auto max-w-md"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold">
                Real-Time Application Tracking for Informed Decision-Making
              </h1>
              <p className="text-lg font-medium text-gray-800 my-4">
                Keeping abreast of each application's progress is made easy through our platform, providing live updates on their journey. This feature enhances transparency and ensures recruiters and stakeholders are well-informed at every stage of the hiring process.
              </p>
            </div>
          </div>

          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4 pt-20">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold">
                Data-Driven Decision-Making for Recruitment Success
              </h1>
              <p className="text-lg font-medium text-gray-800 my-4">
                Our platform empowers users to make well-informed decisions by providing powerful analytics. This data-driven approach ensures recruiters have the insights needed to optimize their hiring strategies and enhance overall recruitment success.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/dashboard.png"
                alt="Image Description 3"
                className="w-full h-auto max-w-md"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Add spacing between portions */}
          <div className="mb-8"></div>

          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4 pt-20">
            <div className="w-full lg:w-1/2">
              <Image
                src="/non-bias.png"
                alt="Image Description 4"
                className="w-full h-auto max-w-md"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold">
                Minimizing Bias in Candidate Selection Through Technology
              </h1>

              <p className="text-lg font-medium text-gray-800 my-4">
                SyncFlow employs a technology-driven approach to minimize bias in candidate assessments, ensuring a fair and objective selection process. This commitment fosters diversity and inclusivity, promoting an equitable hiring environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* products */}
      <div className="lg:grid lg:grid-rows-1 lg:grid-flow-col pt-20">
        <div className="pt-6 lg:pr-20 lg:pl-10 pb-6">
          <header className="lg:pr-20 lg:pl-20 pr-10 pl-10">
            <h1 className="lg:pr-20 text-7xl font-semibold text-gray-800 my-8 pt-16 ">
              SyncFlow Recruiter
            </h1>
            <p className="text-lg text-gray-600">
              Syncflow is a modern hiring platform that helps teams source,
              interview, and hire the best talent for their business.
            </p>
          </header>
        </div>
        <div
          className="pt-6 lg:pl-10 flex"
          style={{ width: "780px", height: "500px" }}
        >
          <Image
            src="/syncflow_recruiter.avif"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="lg:grid lg:grid-rows-1 lg:grid-flow-col pb-10 lg:pb-0">
        <div className=" flex" style={{ width: "780px", height: "500px" }}>
          <Image
            src="/syncflow-applicant.webp"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="pt-6 lg:pr-20 lg:pl-10">
          <header className="lg:pr-20 lg:pl-20 pr-10 pl-10">
            <h1 className="lg:pr-20 text-7xl font-semibold text-gray-800 my-8 pt-16 ">
              SyncFlow Applicant
            </h1>
            <p className="text-lg text-gray-600">
              Syncflow is a modern hiring platform that helps teams source,
              interview, and hire the best talent for their business.
            </p>
          </header>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
