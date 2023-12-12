"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Job, Applicant } from "@/data/data";
import ApplicationFlow from "@/components/Flow/applicationFlow";

const Page = () => {
  const [jobId, setJobId] = useState<string>("");
  const [jobList, setJobList] = useState<Job[]>([]);
  const [applicantList, setApplicantList] = useState<Applicant[]>([]);
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pathParts = pathname.split("/");
  const jobIdParam = pathParts[pathParts.length - 2] || "";

  useEffect(() => {
    // fetch data from local storage
    const data = localStorage.getItem("applicants");

    // if data is not null
    if (data) {
      // parse data to JSON format
      const jsonData = JSON.parse(data);

      // clear the applicant list
      setApplicantList([]);

      // set job list
      jsonData.map((applicant: Applicant) => {
        if (applicant.jobId === parseInt(jobIdParam)) {
          setApplicantList((applicantList) => [...applicantList, applicant]);
        }
      });
    }
  }, []);

  useEffect(() => {
    setJobId(jobIdParam);
  }, [jobIdParam]);

  useEffect(() => {
    // fetch data from local storage
    const data = localStorage.getItem("job_list");

    // if data is not null
    if (data) {
      // parse data to JSON format
      const jsonData = JSON.parse(data);

      // set job list
      setJobList(jsonData);
    }
  }, [jobIdParam]);

  useEffect(() => {
    // Save jobs to local storage whenever it changes
    //   localStorage.setItem('job_list', JSON.stringify(jobList));
    setJob(jobList.find((job) => job.id === parseInt(jobId)) || null);
  }, [jobList, jobId]);

  return (
    <div className="mx-auto max-w-screen-xl flex flex-col gap-10">
      <h1 className="text-4xl text-center font-bold">Job Analytics</h1>
      <div>
        <p>Company Id: {job?.companyId}</p>
        <p>Company Name: {job?.company}</p>
        <p>Job Id: {job?.id}</p>
        <p>Job Title: {job?.title}</p>
        <p className="font-bold">Applications: 250</p>
      </div>

      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Applicant Id
              </th>
              <th scope="col" className="px-6 py-3">
                Applicant Name
              </th>
              <th scope="col" className="px-6 py-3">
                Application
              </th>
              <th scope="col" className="px-6 py-3">
                Stage
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {applicantList.map((applicant) => (
              <tr
                key={applicant.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {applicant.id}
                </th>
                <td className="px-6 py-4">{applicant.name}</td>
                <td className="px-6 py-4">
                  {" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View Application
                  </a>
                </td>
                <td className="px-6 py-4">HR meeting</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Stages Flow</h1>
        <ApplicationFlow />
      </div>
    </div>
  );
};

export default Page;
