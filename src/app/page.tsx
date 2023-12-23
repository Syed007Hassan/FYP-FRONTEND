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
          className="pl-10 mb-16 pr-10 flex"
          style={{ width: "650px", height: "630px" }}
        >
          <Image
            src="/workflow2.png"
            alt="Picture of the author"
            width={400}
            height={350}
            className="object-cover w-full h-full hidden lg:block"
          />
        </div>
      </div>

      {/* 2 container */}

      <div className="grid grid-rows-3 lg:pl-10 pt-20 p py-3 px-6 pl-32 bg-gray-300">
        <div className="lg:pr-64 pr-10">
          <h1 className="text-5xl font-semibold text-blue-900 lg:pl-20 lg:pr-64 px-6">
            Elevate Recruitment with Smart Decision & Tools so you can get:  </h1>
        </div>
        <div className="grid grid-rows-1 grid-flow-col lg:pl-20 lg:pr-28">
          <div className="flex justify-center border-solid border-blue-800 border-r-2 border-b-2 pt-12 pb-6">
            <p className="text-lg font-semibold text-gray-800 my-4 text-center">
              Real-time visibility for application progress.
            </p>
          </div>
          <div className="flex justify-center border-solid border-blue-800 border-r-2 border-b-2 pr-4 pt-12 pb-6">
            <p className="text-lg font-semibold text-gray-800 my-4 text-center">
              Personalize your hiring journey with ease
            </p>
          </div>
          <div className=" flex justify-center border-solid border-blue-800 border-b-2 pt-12 pb-6">
            <p className="text-lg font-semibold text-gray-800 my-4 text-center">
              Make growth-focused decisions with analytics
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 grid-flow-col lg:pr-16 pb-12 lg:pl-16">
          <div className="flex justify-center border-solid border-blue-800 border-r-2 pl-12 pt-12 pb-12">
            <p className="text-lg font-semibold text-gray-800 my-4 text-center">
              Source and nurture the right candidates
            </p>
          </div>
          <div className="flex justify-center border-solid border-blue-800 border-r-2 pt-12 pb-12">
            <p className="text-lg font-semibold text-gray-800 my-4 text-center">
              Streamline early hiring stages for efficiency.
            </p>
          </div>
          <div className=" flex justify-center pt-12 pb-12">
            <p className="text-lg font-bold pl-12 text-gray-800 my-4 text-center">
              Minimize bias, ensure equality in assessments
            </p>
          </div>
        </div>
      </div>

      {/* //  How it can work: */}

      <div className="lg:pl-28 mx-auto px-6 pt-32">

        <h1 className="font-bold text-blue-900 text-5xl">
          How it can work:
        </h1>

        <div className="lg:space-y-8 pt-5 mb-24">
          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl  ">
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
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4 pt-10">
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
              <h1 className="text-3xl  ">
                Real-Time Application Tracking for Informed Decision-Making
              </h1>
              <p className="text-lg font-medium text-gray-800 my-4">
                Keeping abreast of each application&apos;s progress is made easy through our platform, providing live updates on their journey. This feature enhances transparency and ensures recruiters and stakeholders are well-informed at every stage of the hiring process.
              </p>
            </div>
          </div>

          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4 pt-20">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl">
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
              <h1 className="text-3xl  ">
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
      <div className="lg:grid lg:grid-rows-1  lg:grid-flow-col pt-20 bg-gray-300">
        <div className="pt-6 lg:pr-20 lg:pl-10 pb-6">
          <header className="lg:pr-20 lg:pl-20 pr-10 pl-10">
            <h1 className="font-bold text-blue-900 text-5xl pb-10">
              SyncFlow Recruiter
            </h1>
            {/* <p className="text-lg text-gray-600">
              Elevate your recruitment strategy with our customizable workflows that effortlessly adapt to your organizational needs. Make data-driven decisions with powerful analytics that provide deep insights into various aspects of the recruitment process, optimizing your strategies for better outcomes. Streamline your hiring process through time-saving automation.
            </p> */}
          </header>
          <ol className="list-decimal font-medium pl-24">
            <li className="mb-4">
              <h2 className="font-bold">Customizable Workflows:</h2>
              <p>Tailor the hiring process effortlessly with customizable workflows that align with specific organizational needs.</p>
            </li>
            <li className="mb-4">
              <h2 className="font-bold">Data-Driven Decision-Making:</h2>
              <p>Make informed decisions with powerful analytics, optimizing recruitment strategies for better outcomes.</p>
            </li>
            <li className="mb-4">
              <h2 className="font-bold">Time-Saving Automation:</h2>
              <p>Streamline the hiring process with automated workflows, allowing the HR team to focus on strategic initiatives.</p>
            </li>
            <li className="mb-4">
              <h2 className="font-bold">Diversity-Focused Assessments:</h2>
              <p>Leverage technology to minimize bias, ensuring a fair and objective selection process that promotes diversity and inclusivity.</p>
            </li>
          </ol>
        </div>
        <div
          className="pt-6 lg:pl-10 flex pr-20 pb-6"
          style={{ width: "700px", height: "500px" }}
        >
          <Image
            src="/2.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="pt-32 lg:grid lg:grid-rows-1 pl-20 lg:grid-flow-col pb-10 lg:pb-0 bg-gray-300">
        <div className=" flex" style={{ width: "500px", height: "400px" }}>
          <Image
            src="/Job Vacancy.png"
            alt="Picture of the author"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:pr-20 lg:pl-10 pb-28">
          <header className="lg:pr-20 lg:pl-20 pr-10 pl-10">
            <h1 className="font-bold text-blue-900 text-5xl pb-10">
              SyncFlow Applicant
            </h1>
          </header>
          <ol className="list-decimal font-medium pl-24">
            <li className="mb-4">
              <h2 className="font-bold">Effortless Profile Creation:</h2>
              <p>Craft a standout profile seamlessly, showcasing your skills and experience with ease.</p>
            </li>
            <li className="mb-4">
              <h2 className="font-bold">Real-Time Application Tracking:</h2>
              <p>Stay informed about your application&apos;s progress with live updates for a transparent and engaging experience.</p>
            </li>
            <li className="mb-4">
              <h2 className="font-bold">AI-Driven Insights:</h2>
              <p>Benefit from AI chat support and insights to navigate the recruitment process effectively and make informed decisions.</p>
            </li>
            <li className="mb-4">
              <h2 className="font-bold">Personalized Job Exploration:</h2>
              <p>Easily explore job opportunities tailored to your preferences, leading to efficient and frictionless application submissions.</p>
            </li>
          </ol>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
