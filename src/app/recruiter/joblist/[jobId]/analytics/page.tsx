"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, use } from "react";
import { Job, Workflow } from "@/data/data";
import { Applicant } from "@/types/application";
import ApplicationFlow from "@/components/Flow/applicationFlow";
import { FaRegTrashAlt } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useGetStageQuery } from "@/redux/services/stage/stageAction";
import { useGetJobQuery } from "@/redux/services/job/jobAction";
import { getResumeSummary } from "@/redux/services/chat/chatAction";
import { getSession } from "next-auth/react";
import { parseJwt } from "@/lib/Constants";
import { ApiResponse, Stage } from "@/types/stage";
import Cookies from "js-cookie";
import { SingleJobResponse } from "@/types/job";
import { ApplicationResponse } from "@/types/application";
import { ResponseData } from "@/types/stage";
import { useGetApplicationsByJobIdQuery } from "@/redux/services/application/applicationAction";
import {
  updateApplicationStage,
  updateApplicationStatus,
  updateApplicationFeedback,
} from "@/redux/services/application/applicationAction";
import { ApplicationData } from "@/types/application";
import Loader from "@/components/Loader";

import "@/styles/sidebar.css";

interface stageApplcationsCountProps {
  stageName: string;
  count: number;
}

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState("");
  const [tempResumeSummary, setTempResumeSummary] = useState<string | null>();
  const [token, setToken] = useState<string>("");
  const [jobId, setJobId] = useState<string>("");
  const [jobList, setJobList] = useState<Job[]>([]);
  const [workflow, setWorkflow] = useState<ApiResponse | null>(null);
  const [stageList, setStageList] = useState<Stage[]>([]);
  const [job, setJob] = useState<Job | null>(null);
  const [decodedData, setDecodedData] = useState(null);
  const [companyId, setCompanyId] = useState<string>("");
  const [applicationCount, setApplicationCount] = useState<number>(0);
  const [activeApplications, setActiveApplications] = useState<number>(0);
  const [pendingApplications, setPendingApplications] = useState<number>(0);
  const [stageApplcationsCount, setStageApplcationsCount] =
    useState<stageApplcationsCountProps[]>();
  const [jobApiResponse, setJobApiResponse] =
    useState<SingleJobResponse | null>();
  const [applicationApiResponse, setApplicationApiResponse] =
    useState<ApplicationResponse | null>();
  const [filteredApplicants, setFilteredApplicants] =
    useState<ApplicationResponse | null>();
  const [jobStages, setJobStages] = useState<ResponseData | null>();
  const [stageUpdateData, setStageUpdateData] =
    useState<ApplicationData | null>();

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const toggleDropdown = (id: number) =>
    setOpenDropdownId(openDropdownId === id ? null : id);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pathParts = pathname.split("/");
  const jobIdParam = pathParts[pathParts.length - 2] || "";

  useEffect(() => {
    if (jobIdParam) {
      setJobId(jobIdParam);
    }
  }, [jobIdParam]);

  useEffect(() => {
    setFilteredApplicants(applicationApiResponse);
  }, [applicationApiResponse]);

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);
  const dispatch = useAppDispatch();
  const { data, error } = useGetStageQuery({ id: jobId });
  const {
    data: jobData,
    error: jobError,
    isLoading,
    isSuccess,
  } = useGetJobQuery({ jobId: jobIdParam });
  const {
    data: applicationData,
    error: applicationError,
    isLoading: applicationByJobIdLoading,
    refetch,
  } = useGetApplicationsByJobIdQuery({ jobId: jobIdParam });
  const { data: stageData, error: stageError } = useGetStageQuery({
    id: jobIdParam,
  });

  const {
    application,
    loading,
    success: isStageUpdateSuccess,
  } = useAppSelector((state) => state.applicationReducer);

  const {
    resumeSummary,
    loading: resumeSummaryLoading,
    success: resumeSummarySuccess,
  } = useAppSelector((state) => state.resumeSummaryReducer);

  useEffect(() => {
    console.log("resumeSummary", resumeSummary);
    setTempResumeSummary(resumeSummary);
  }, [resumeSummary]);

  useEffect(() => {
    if (isModalOpen === "") {
      setTempResumeSummary(null);
    }
  }, [isModalOpen]);

  const [applicantTempId, setApplicantTempId] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const openModal = (
    jobId: string,
    applicantId: string,
    status: string,
    modalId: string
  ) => {
    // console.log("Modal ID:", modalId); // Check the received modal ID
    setIsModalOpen(modalId); // Update the state
    setApplicantTempId(applicantId);
    setStatus(status);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen("");
  };
  const {
    application: applicationState,
    loading: applicationLoading,
    success: isStatusUpdate,
  } = useAppSelector((state) => state.updateApplicationReducer);

  useEffect(() => {
    if (jobData) {
      setJobApiResponse(jobData);
    }
  }, [jobData]);

  useEffect(() => {
    if (applicationData) {
      setApplicationApiResponse(applicationData);
    }
  }, [applicationData]);

  useEffect(() => {
    if (stageData) {
      setJobStages(stageData?.data[0] || null);
    }
  }, [stageData]);

  useEffect(() => {
    console.log("ApplicationApiResponse", applicationApiResponse);
  }, [applicationApiResponse]);

  useEffect(() => {
    if (applicationApiResponse) {
      setApplicationCount(
        applicationApiResponse.data ? applicationApiResponse.data.length : 0
      );
      setActiveApplications(
        applicationApiResponse.data
          ? applicationApiResponse.data.filter(
              (applicant) => applicant.status === "approved"
            ).length
          : 0
      );
      setPendingApplications(
        applicationApiResponse.data
          ? applicationApiResponse.data.filter(
              (applicant) => applicant.status === "pending"
            ).length
          : 0
      );
      setStageApplcationsCount(
        applicationApiResponse.data
          ? applicationApiResponse.data.reduce((acc, applicant) => {
              const foundStage = acc.find(
                (stage) => stage.stageName === applicant.stage.stageName
              );
              if (foundStage) {
                foundStage.count += 1;
              } else {
                acc.push({ stageName: applicant.stage.stageName, count: 1 });
              }
              return acc;
            }, [] as stageApplcationsCountProps[])
          : []
      );
    }
  }, [applicationApiResponse]);

  useEffect(() => {
    const parseJwtFromSession = async () => {
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setCompanyId(decodedData.companyId);
      setToken(jwt);
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
    if (application) {
      setStageUpdateData(application);
    }
  }, [application]);

  useEffect(() => {
    setJobId(jobIdParam);
  }, [jobIdParam]);

  // useEffect(() => {
  //   // Save jobs to local storage whenever it changes
  //   //   localStorage.setItem('job_list', JSON.stringify(jobList));
  //   setJob(jobList.find((job) => job.id === parseInt(jobId)) || null);
  // }, [jobList, jobId]);

  const handleStatusChange = (applicantId: string, status: string) => {
    dispatch(
      updateApplicationStatus({
        applicantId: applicantId,
        jobId: jobIdParam,
        status: status,
        token,
      })
    );
  };

  const handleStageClick = (stage: Stage, applicant: Applicant) => {
    console.log(stage);
    console.log(applicant);
    setOpenDropdownId(null);

    dispatch(
      updateApplicationStage({
        applicantId: applicant?.id?.toString(),
        stageId: stage?.stageId?.toString(),
        jobId: jobIdParam,
        token,
      })
    );
  };

  useEffect(() => {
    if (isStageUpdateSuccess || isStatusUpdate) {
      refetch();
    }
  }, [isStageUpdateSuccess, refetch, isStatusUpdate]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      setFilteredApplicants(applicationApiResponse);
      return;
    }
    const filteredApplicants = applicationApiResponse?.data.filter(
      (applicant) =>
        applicant?.applicant?.name.toLowerCase().includes(searchValue) ||
        applicant?.applicant?.id === parseInt(searchValue) ||
        applicant?.status.toLowerCase().includes(searchValue) ||
        applicant?.stage?.stageName.toLowerCase().includes(searchValue)
    );
    setFilteredApplicants({
      data: filteredApplicants || [],
      success: filteredApplicants ? true : false,
    });
  };

  useEffect(() => {
    console.log("applicationApiResponse", applicationApiResponse);
  }, [applicationApiResponse]);

  const handleResumeSummary = (url: string, job_description: string) => {
    console.log(url, job_description);
    dispatch(
      getResumeSummary({
        url: url,
        job_description: job_description,
      })
    );
  };

  useEffect(() => {
    console.log("isModalOpen", isModalOpen);
  }, [isModalOpen]);

  const [applicationFeedback, setApplicationFeedback] = useState<string>("");

  const handleFeedback = async () => {
    await dispatch(
      updateApplicationFeedback({
        jobId: jobIdParam,
        applicantId: applicantTempId,
        applicationFeedback: applicationFeedback,
        token,
      })
    );
    closeModal();
    handleStatusChange(applicantTempId, "rejected");
    setApplicationFeedback("");
    setApplicantTempId("");
    setStatus("");
  };

  return (
    <>
      {isLoading || applicationLoading || applicationByJobIdLoading ? (
        <Loader />
      ) : (
        <div
          className={`content overflow-hidden ${
            isSidebarOpen ? "shifted-dashboard" : ""
          }`}
        >
          <div className="mx-auto max-w-screen-xl flex flex-col gap-4">
            <h1 className="text-2xl font-bold font-inter text-blue-800 pt-6">
              SyncFlow | Application Tracking - {jobApiResponse?.data?.jobTitle}{" "}
              ({jobApiResponse?.data?.company?.companyName})
            </h1>
            <div className="">
              {/* <h6 className="mb-4 text-gray-900 dark:text-gray-50 font-bold">
            Popular
          </h6> */}
              <ul className="flex flex-wrap gap-10 lg:gap-28">
                <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                  <div className="flex gap-2 items-center">
                    <div className="h-8 w-8 text-center bg-blue-700/20 leading-[2.4] rounded text-blue-700 text-sm font-medium">
                      {applicationCount}
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                    >
                      <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-blue-700 font-bold">
                        Current
                      </h6>
                    </a>
                  </div>
                </li>
                <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                  <div className="flex gap-2 items-center">
                    <div className="h-8 w-8 text-center bg-blue-700/20 leading-[2.4] rounded text-blue-700 text-sm font-medium">
                      {" "}
                      {pendingApplications}
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                    >
                      <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-blue-700 font-bold">
                        Pending
                      </h6>
                    </a>
                  </div>
                </li>
                <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                  <div className="flex gap-2 items-center">
                    <div className="h-8 w-8 text-center bg-blue-700/20 leading-[2.4] rounded text-blue-700 text-sm font-medium">
                      {" "}
                      {activeApplications}
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                    >
                      <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-blue-700 font-bold">
                        Active
                      </h6>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="mb-4 text-gray-900 dark:text-gray-50 font-bold">
                Applications in Stages
              </h6>
              <ul className="flex flex-wrap gap-10 lg:gap-20">
                {jobStages?.stages?.map((stage, index) => (
                  <li
                    key={index}
                    className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20 inline-block"
                  >
                    <div className="flex gap-2 items-center">
                      <div className="h-8 w-8 text-center bg-blue-700/20 leading-[2.4] rounded text-blue-700 text-sm font-medium">
                        {" "}
                        {stageApplcationsCount?.find(
                          (stageCount) =>
                            stageCount.stageName === stage.stageName
                        )?.count || 0}
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                      >
                        <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-blue-700 font-bold">
                          {stage.stageName}
                        </h6>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <h6 className=" text-gray-900 dark:text-gray-50 font-bold">
              Applicants
            </h6>
            <form className="max-w-xs">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by id, name, stage or status"
                  required
                  onChange={handleSearchChange}
                />
              </div>
            </form>
            <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-blue-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Resume
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Profile
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Resume Summary
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Application Rating
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stage
                    </th>
                    <th scope="col" className="px-6 py-3 flex justify-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplicants?.data?.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center h-10">
                        No applicants found
                      </td>
                    </tr>
                  ) : (
                    filteredApplicants?.data?.map((applicant, index) => (
                      <tr
                        key={applicant?.applicant?.id}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {index + 1}
                        </th>
                        <td className="px-6 py-4 font-bold">
                          {applicant?.applicant?.name}
                        </td>
                        <td className="px-6 py-4 font-bold">
                          {applicant?.status}
                        </td>
                        <td className="px-6 py-4">
                          {" "}
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            onClick={() =>
                              window.open(
                                applicant?.applicant?.applicantDetails?.resume
                              )
                            }
                          >
                            View Resume
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            onClick={() =>
                              window.open(
                                `/recruiter/view-applicant/${applicant?.applicant?.id}`
                              )
                            }
                          >
                            View Profile
                          </a>
                        </td>
                        <td
                          className="px-6 py-4 font-bold hover:cursor-pointer hover:text-blue-600 dark:text-blue-500"
                          data-modal-target="profile-summary"
                          data-modal-toggle="profile-summary"
                          onClick={() => {
                            openModal(
                              jobIdParam,
                              applicant?.applicant?.id?.toString(),
                              "",
                              "profile-summary"
                            );
                            handleResumeSummary(
                              applicant?.applicant?.applicantDetails?.resume,
                              jobApiResponse?.data?.jobDescription || ""
                            );
                          }}
                        >
                          View Summary
                        </td>
                        <td
                          className="px-6 py-4 text-center font-bold hover:text-blue-600"
                          title="It represents how much the applicant skills matched with the job skills"
                        >
                          {applicant?.applicationRating + "%" || "Not rated"}
                        </td>
                        <td className="py-4 relative">
                          <button
                            id={`dropdownDefaultButton-${applicant?.applicant?.id}`}
                            onClick={() =>
                              toggleDropdown(applicant?.applicant?.id)
                            }
                            data-dropdown-toggle="dropdown"
                            className={`font-bold rounded-lg text-sm text-center inline-flex items-center ${
                              applicant?.status === "pending" ||
                              applicant?.status === "rejected" ||
                              applicant?.status === "waiting"
                                ? "cursor-not-allowed"
                                : ""
                            }`}
                            type="button"
                            disabled={
                              applicant?.status === "pending" ||
                              applicant?.status === "rejected" ||
                              applicant?.status === "waiting"
                            }
                          >
                            {jobStages?.stages.find(
                              (stage) =>
                                stage.stageId === applicant?.stage?.stageId
                            )?.stageName || "Select stage"}
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
                            id={`dropdown-${applicant?.applicant?.id}`}
                            className={`absolute z-10 ${
                              openDropdownId === applicant?.applicant?.id
                                ? ""
                                : "hidden"
                            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDefaultButton"
                            >
                              {jobStages?.stages?.map((stage) => (
                                <li key={stage?.stageId}>
                                  <button
                                    onClick={() =>
                                      handleStageClick(
                                        stage,
                                        applicant?.applicant
                                      )
                                    }
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
                        <td className="px-6 py-4 flex gap-10 justify-center">
                          <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
                            onClick={() =>
                              handleStatusChange(
                                applicant?.applicant?.id?.toString(),
                                "approved"
                              )
                            }
                          >
                            Accept
                          </a>
                          <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
                            data-modal-target="status"
                            data-modal-toggle="status"
                            onClick={() =>
                              openModal(
                                jobIdParam,
                                applicant?.applicant?.id?.toString(),
                                "rejected",
                                "status"
                              )
                            }
                          >
                            Reject
                          </a>
                          <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
                            onClick={() =>
                              handleStatusChange(
                                applicant?.applicant?.id?.toString(),
                                "waiting"
                              )
                            }
                          >
                            Wait
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {isModalOpen === "profile-summary" && (
              <>
                <div className="fixed inset-0 bg-black opacity-50" />
                <div
                  id="default-modal"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="overflow-y-auto overflow-x-hidden fixed flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-5xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      {/* Modal header */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Resume Summary
                        </h3>
                        {/* <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="default-modal"
                          onClick={() => openModal("summary")}
                        > */}

                        <button
                          type="button"
                          onClick={closeModal}
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle="select-modal"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                        {/* </button> */}
                      </div>
                      {/* Modal body */}
                      <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          {tempResumeSummary || "Generating Summary..."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isModalOpen === "status" && (
              <div
                id="select-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Feedback on Rejection
                      </h3>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="select-modal"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="p-4 md:p-5">
                      <form>
                        <div className="pt-1">
                          <textarea
                            id="feedback"
                            name="feedback"
                            rows={4}
                            className="shadow-sm focus:ring-indigo-500 focus:border-blue-700 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter your feedback here"
                            onChange={(e) => {
                              setApplicationFeedback(e.target.value);
                            }}
                          />
                        </div>
                        <button
                          type="submit"
                          className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => {
                            console.log("Feedback submitted");
                            handleFeedback();
                            closeModal();
                          }}
                        >
                          Submit Feedback
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col">
              <h6 className=" text-gray-900 dark:text-gray-50 font-bold">
                Stages
              </h6>
              <ApplicationFlow
                applicantList={applicationApiResponse?.data || []}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
