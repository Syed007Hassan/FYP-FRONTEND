"use strict";
import Header from "@/components/Header";
import * as React from "react";

export default function Demo() {
  const videoSrc = "https://drive.google.com/file/d";

  // recruiter
  const signUp_Login_Recruiter = "/1fl-BIko3kw2Tb2i_VOnGWpLEr-Jlq1U2/preview";
  const job_Recruiter = "/1p69Km9cKM-YieAAFdr5awCtKgdUpzOrM/preview";
  const profile_company_Recruiter =
    "/1PMaglAkznn3xC3SYYDGVn4EGcUPMk7HJ/preview";
  const userManagement_Recruiter = "/1ujzvuFzVz6IH0SD2vOPU7B-k1cUTXnRR/preview";
  const jobAnalytics_Recruiter = "/1F0TW_PZSCCJot_XbkDY6hbgGScxJa1qx/preview";

  // applicant
  const signUp_Login_BuildProfile_Applicant =
    "/1A3KvXB5gtwhnnivAXSckqasvkWonZshq/preview";
  const profileManagement_Applicant =
    "/11TSbhxYuA-0vy-uMuc10XTanrIvR1ham/preview";
  const jobFilteration_And_Apply_Applicant =
    "/1BkJ5uhbW37JpBRRg290CGrG27lDkqj40/preview";
  const jobHistory_Applicant = "/12IcD7SpOUrkzI7I6zEZWfUtjV993oqhf/preview";
  const emailGeneration_Applicant =
    "/1KBzbSTrqRepjYbPfSLxFu0OYF2RiDK9H/preview";

  return (
    <>
      <Header />
      <div className="bg-gray-100 p-4 space-y-12 font-inter">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900">Recruiter</h1>
        </div>

        <div>
          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Sign Up/Login</h2>
                <p className="text-lg mb-6">
                  This video explains how to sign up or log in as a recruiter.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + signUp_Login_Recruiter}
                  allow="autoplay"
                  title="Sign Up/Login for Recruiter"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Job Posting</h2>
                <p className="text-lg mb-6">
                  This video guides you on how to post jobs as a recruiter.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + job_Recruiter}
                  allow="autoplay"
                  title="Job Posting for Recruiter"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Profile and Company Setup
                </h2>
                <p className="text-lg mb-6">
                  This video shows you how to set up your profile and company
                  information.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + profile_company_Recruiter}
                  allow="autoplay"
                  title="Profile and Company Setup for Recruiter"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">User Management</h2>
                <p className="text-lg mb-6">
                  This video provides an overview of user management for recruiters.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + userManagement_Recruiter}
                  allow="autoplay"
                  title="User Management for Recruiter"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Job Analytics</h2>
                <p className="text-lg mb-6">
                  In this demo video, you will be guided on how to use the Analytics
                  page for Job to efficiently filter out the candidates and run a
                  smooth hiring process.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + jobAnalytics_Recruiter}
                  allow="autoplay"
                  title="Job Analytics for Recruiter"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900">Applicant</h1>
        </div>

        <div>
          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Sign Up/Login & Build Profile</h2>
                <p className="text-lg mb-6">
                  This video explains how to sign up, log in, and build your profile as an applicant.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + signUp_Login_BuildProfile_Applicant}
                  allow="autoplay"
                  title="Sign Up/Login & Build Profile for Applicant"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Profile Management</h2>
                <p className="text-lg mb-6">
                  This video shows you how to manage your profile information as an applicant.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + profileManagement_Applicant}
                  allow="autoplay"
                  title="Profile Management for Applicant"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Job Filteration & Apply</h2>
                <p className="text-lg mb-6">
                  This video guides you on how to filter and apply for jobs as an applicant.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + jobFilteration_And_Apply_Applicant}
                  allow="autoplay"
                  title="Job Filteration & Apply for Applicant"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Job History</h2>
                <p className="text-lg mb-6">
                  This video provides an overview of job history management for applicants.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + jobHistory_Applicant}
                  allow="autoplay"
                  title="Job History for Applicant"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Email Generation</h2>
                <p className="text-lg mb-6">
                  This video explains how to generate and manage emails as an applicant.
                </p>
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg"
                  src={videoSrc + emailGeneration_Applicant}
                  allow="autoplay"
                  title="Email Generation for Applicant"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
