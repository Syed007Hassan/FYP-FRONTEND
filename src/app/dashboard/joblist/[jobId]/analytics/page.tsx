"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Job, Applicant, Workflow } from "@/data/data";
import ApplicationFlow from "@/components/Flow/applicationFlow";
import { FaRegTrashAlt } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useGetStageQuery } from "@/redux/services/stage/stageAction";
import { getSession } from "next-auth/react";
import { parseJwt } from "@/lib/Constants";
import { ApiResponse, Stage } from "@/types/stage";

import "@/styles/sidebar.css";

const Page = () => {
  const [jobId, setJobId] = useState<string>("");
  const [jobList, setJobList] = useState<Job[]>([]);
  const [applicantList, setApplicantList] = useState<Applicant[]>([]);
  const [workflow, setWorkflow] = useState<ApiResponse | null>(null);
  const [stageList, setStageList] = useState<Stage[]>([]);
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [decodedData, setDecodedData] = useState(null);
  const [companyId, setCompanyId] = useState<string>("");
  // const [employees, setEmployees] = useState<Recruiter[]>([]);

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const toggleDropdown = (id: number) =>
    setOpenDropdownId(openDropdownId === id ? null : id);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pathParts = pathname.split("/");
  const jobIdParam = pathParts[pathParts.length - 2] || "";

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);
  const dispatch = useAppDispatch();
  const { data, error } = useGetStageQuery({ id: jobIdParam });

  useEffect(() => {
    const parseJwtFromSession = async () => {
      const session = await getSession();
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setCompanyId(decodedData.companyId);
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    setStageList([]);
    if (data) {
      setWorkflow(data);
      console.log("workflow", data);
      data?.data.map((stage, index) => {
        stage?.stages.map((stage) => {
          setStageList((stageList) => [...stageList, stage]);
        });
      });
    }
  }, [data]);

  useEffect(() => {
    console.log("stageList", stageList);
  }, [stageList]);

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

  const handleDelete = (id: number) => {
    // console.log(id);
    const newApplicantList = applicantList.filter((applicant) => {
      return applicant.id !== id;
    });

    setApplicantList(newApplicantList);

    // Get the current applicants from localStorage
    let applicants = JSON.parse(localStorage.getItem("applicants") || "[]");

    // Filter out the deleted applicant
    applicants = applicants.filter(
      (applicant: Applicant) => applicant.id !== id
    );

    // Store the updated applicants back in localStorage
    localStorage.setItem("applicants", JSON.stringify(applicants));
  };

  const handleStageClick = (stage: Stage, applicant: Applicant) => {
    console.log(stage);
    console.log(applicant);
    setOpenDropdownId(null);

    // change stage id of applicant

    applicant.stageId = stage?.stageId;

    localStorage.setItem("applicants", JSON.stringify(applicantList));
  };

  return (
    <div
      className={`content overflow-hidden ${
        isSidebarOpen ? "shifted-dashboard" : ""
      }`}
    >
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
                  <td className="px-6 py-4 relative">
                    <button
                      id={`dropdownDefaultButton-${applicant.id}`}
                      onClick={() => toggleDropdown(applicant.id)}
                      data-dropdown-toggle="dropdown"
                      className="font-medium rounded-lg text-sm text-center inline-flex items-center"
                      type="button"
                    >
                      {stageList.find((stage) => stage?.stageId === applicant.stageId)
                        ?.stageName || "Select stage"}
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* Dropdown menu */}
                    <div
                      id={`dropdown-${applicant.id}`}
                      className={`absolute z-10 ${
                        openDropdownId === applicant.id ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        {stageList.map((stage) => (
                          <li key={stage?.stageId}>
                            <button
                              onClick={() => handleStageClick(stage, applicant)}
                              className="flex w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                              type="button"
                            >
                              {stage?.stageName}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleDelete(applicant?.id)}>
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Stages Flow</h1>
          <ApplicationFlow applicantList={applicantList} />
        </div>
      </div>
    </div>
  );
};

export default Page;
