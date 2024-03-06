"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaRegClock, FaChevronDown } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useGetAllJobsQuery } from "@/redux/services/job/jobAction";
import Job from "@/types/job";
import Loader from "@/components/Loader";
import ApplicantDetails from "@/types/applicant";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useGetApplicantDetailsQuery } from "@/redux/services/Applicant/applicantAction";
import { parseJwt } from "@/lib/Constants";
import Cookies from "js-cookie";
import { getDistanceFromLatLonInKm } from "@/lib/extra";
import COUNTRIES from "@/data/countries";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

import "../../../styles/sidebar.css";

const JobFeed = () => {
  // state
  const [isLocationOpen, setIsLocationOpen] = useState(true);
  const [isWorkExpOpen, setIsWorkExpOpen] = useState(true);
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(true);
  const [isDateOpen, setIsDateOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>();
  const [email, setEmail] = useState("");
  const [decodedData, setDecodedData] = useState<any>();
  const [applicantId, setApplicantId] = useState("");

  const router = useRouter();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);

  const onPageChange = (page: number) => setCurrentPage(page);

  // redux
  const { data, error, isLoading } = useGetAllJobsQuery();

  const {
    data: applicantDetailsData,
    error: applicantDetailsError,
    isLoading: applicantDetailsLoading,
  } = useGetApplicantDetailsQuery({ id: applicantId });

  const isSidebarOpen = useAppSelector((state) => state.sidebar.sidebarState);

  // search variables
  const [jobTitle, setJobTitle] = useState("");
  const [jobCountry, setJobCountry] = useState("");
  const [jobCity, setJobCity] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [pastDate, setPastDate] = useState<Date | null>(null);
  const [experience, setExperience] = useState("");
  const [nearby, setNearby] = useState(false);
  const [calcDistance, setCalcDistance] = useState(false);
  const [distValue, setDistValue] = useState(0);
  const [search, setSearch] = useState("");
  const [allCountries, setAllCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    Object.entries(COUNTRIES).map(([country, cities]) => {
      setAllCountries((prev) => [...prev, country]);
      // setCities((prev) => [...prev, cities]);
    });
  }, []);

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
      setApplicantId(decodedData.id.toString() || "");
    };
    parseJwtFromSession();
  }, []);

  useEffect(() => {
    if (applicantDetailsData) {
      console.log(applicantDetailsData);
    }
    setApplicantDetails(applicantDetailsData?.data);
  }, [applicantDetailsData, applicantDetailsError, applicantDetailsLoading]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    // setAllJobs(data?.data || []);
    setAllJobs(
      (data?.data || []).filter((job: Job) => {
        if (job?.restrictedLocationRange) {
          const jobRestriction = job?.restrictedLocationRange;
          const applicantLocation = applicantDetails?.location;
          const jobLocation = job?.jobLocation;
          if (jobRestriction && applicantLocation && jobLocation) {
            const lat1 = parseFloat(jobLocation.latitude);
            const lon1 = parseFloat(jobLocation.longitude);
            const lat2 = parseFloat(applicantLocation.latitude);
            const lon2 = parseFloat(applicantLocation.longitude);
            console.log(
              getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2),
              jobRestriction
            );
            console.log("job Name", job?.jobTitle);
            return (
              getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) <=
              parseFloat(jobRestriction)
            );
          }
        } else {
          return job;
        }
      })
    );
  }, [data, error, isLoading, applicantDetails]);

  useEffect(() => {
    let filteredJobs = allJobs.map((job) => {
      const [date] = job?.jobCreatedAt?.split("T");
      return { ...job, jobCreatedAt: date };
    });

    if (jobTitle) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase()) ||
          job.company.companyName.toLowerCase().includes(jobTitle.toLowerCase())
      );
    }

    if (jobCountry) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobLocation.country.toLowerCase().includes(jobCountry.toLowerCase())
      );
      Object.entries(COUNTRIES).map(([country, cities]) => {
        if (country.toLowerCase() === jobCountry.toLowerCase()) {
          setCities(cities);
        }
        // setCities((prev) => [...prev, cities]);
      });
    }

    if (jobCity) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobLocation.city.toLowerCase().includes(jobCity.toLowerCase())
      );
    }

    if (jobCategory) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobCategory.toLowerCase().includes(jobCategory.toLowerCase())
      );
    }

    if (jobType) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.jobType.toLowerCase().includes(jobType.toLowerCase()) ||
          job.jobCategory.toLowerCase().includes(jobType.toLowerCase())
      );
    }

    if (experience) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobExperience.toLowerCase().includes(experience.toLowerCase())
      );
    }

    if (pastDate) {
      const hoursAgo =
        (new Date().getTime() - pastDate.getTime()) / 1000 / 60 / 60;
      const selectedDate = getPastDate(hoursAgo);
      filteredJobs = filteredJobs.filter((job) => {
        const jobDate = new Date(job.jobCreatedAt);
        return jobDate.getTime() > selectedDate.getTime();
      });
    }

    if (nearby) {
      const applicantLatitude = parseFloat(applicantDetails?.location?.latitude || "0");
      const applicantLongitude = parseFloat(applicantDetails?.location?.longitude || "0");

      filteredJobs = filteredJobs.filter((job) => {
        const jobLatitude = parseFloat(job?.jobLocation?.latitude || "0");
        const jobLongitude = parseFloat(job?.jobLocation?.longitude || "0");
        if (jobLatitude && jobLongitude && applicantLatitude && applicantLongitude) {
          return (
            jobLatitude === applicantLatitude && jobLongitude === applicantLongitude
          );
        }
        return false;
      });
    }

    if (calcDistance) {
      filteredJobs = filteredJobs.filter((job) => {
        const jobLocation = job?.jobLocation;
        const applicantLocation = applicantDetails?.location;
        if (jobLocation && applicantLocation) {
          const lat1 = parseFloat(jobLocation.latitude);
          const lon1 = parseFloat(jobLocation.longitude);
          const lat2 = parseFloat(applicantLocation.latitude);
          const lon2 = parseFloat(applicantLocation.longitude);
          return getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) <= distValue;
        }
        return false;
      });
    }

    if (search) {
      filteredJobs = filteredJobs.filter((job) => {
        const jobLocation = `${job?.jobLocation?.area}, ${job?.jobLocation?.city}, ${job?.jobLocation?.country}`;
        return jobLocation.toLowerCase().includes(search.toLowerCase());
      });
    }

    // Apply pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    setFilteredJobs(currentJobs);
  }, [
    allJobs,
    calcDistance,
    jobTitle,
    jobCountry,
    jobCategory,
    jobType,
    pastDate,
    experience,
    nearby,
    applicantDetails,
    search,
    distValue,
    jobCity,
    currentPage,
    jobsPerPage,
  ]);

  useEffect(() => {
    if (distValue) {
      setCalcDistance(true);
    }
  }, [distValue]);

  const handleReset = () => {
    setJobTitle("");
    setJobCountry("");
    setJobCity("");
    setJobCategory("");
    setJobType("");
    setPastDate(null);
    setExperience("");
    setNearby(false);
    setCalcDistance(false);
    setDistValue(0);
    setSearch("");
  };

  function getPastDate(hours: number) {
    const date = new Date();
    date.setHours(date.getHours() - hours);
    return date;
  }

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
          {/* if no filtered jobs availabe then display no job available */}
          <div>
            <div
              className={`px-5 md:px-24 lg:px-44 ${
                isSidebarOpen ? "lg:px-20" : ""
              }`}
            >
              <div className="font-inter">
                <section className={`${isSidebarOpen ? "" : "py-10"}`}>
                  <h1 className="text-2xl font-bold font-inter text-violet-600 py-6">
                    SyncFlow | Job Feed
                  </h1>
                  <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
                      <div className="col-span-12 xl:col-span-9">
                        <div className="job-list-header">
                          <form action="#">
                            <div className="grid grid-cols-12 gap-3">
                              <div className="col-span-12 xl:col-span-3">
                                <div className="relative">
                                  <i className="uil uil-briefcase-alt absolute top-1/2 left-3 transform -translate-y-1/2"></i>
                                  <input
                                    type="search"
                                    className="w-full pl-10 py-2 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-gray-100 dark:bg-gray-800 dark:placeholder-gray-600"
                                    placeholder="Job, company..."
                                    onChange={(e) =>
                                      setJobTitle(e.target.value)
                                    }
                                    value={jobTitle}
                                  />
                                </div>
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-span-12 xl:col-span-3">
                                <div className="relative">
                                  <i className="uil uil-location-point absolute top-1/2 left-3 transform -translate-y-1/2"></i>
                                  <select
                                    className="form-select w-full py-2 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-gray-100 dark:bg-gray-800 dark:placeholder-gray-600"
                                    data-trigger
                                    name="choices-single-location"
                                    id="choices-single-location"
                                    value={jobCountry}
                                    onChange={(e) => {
                                      setJobCountry(e.target.value);
                                    }}
                                  >
                                    <option value="0">Select Country</option>
                                    {allCountries.map((country, index) => (
                                      <option key={index} value={country}>
                                        {country}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-span-12 xl:col-span-3">
                                <div className="relative">
                                  <i className="uil uil-location-point absolute top-1/2 left-3 transform -translate-y-1/2"></i>
                                  <select
                                    className="form-select w-full py-2 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-gray-100 dark:bg-gray-800 dark:placeholder-gray-600"
                                    data-trigger
                                    name="choices-single-location"
                                    id="choices-single-location"
                                    value={jobCity}
                                    onChange={(e) => {
                                      setJobCity(e.target.value);
                                    }}
                                  >
                                    <option value="0">Select City</option>
                                    {cities.map((city, index) => (
                                      <option key={index} value={city}>
                                        {city}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-span-12 xl:col-span-3">
                                <div className="relative">
                                  <i className="uil uil-clipboard-notes absolute top-1/2 left-3 transform -translate-y-1/2"></i>
                                  <select
                                    className="form-select w-full py-2 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-gray-100 dark:bg-gray-800 dark:placeholder-gray-600"
                                    data-trigger
                                    name="choices-single-categories"
                                    id="choices-single-categories"
                                    onChange={(e) => {
                                      setJobCategory(e.target.value);
                                    }}
                                  >
                                    <option value="4">Accounting</option>
                                    <option value="1">IT & Software</option>
                                    <option value="3">Marketing</option>
                                    <option value="5">Banking</option>
                                  </select>
                                </div>
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end grid--> */}
                          </form>
                        </div>
                        {/* <div className="mt-8">
                        <h6 className="mb-4 text-gray-900 dark:text-gray-50 font-bold">
                          Popular
                        </h6>
                        <ul className="flex flex-wrap gap-3">
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                20
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  UI/UX designer
                                </h6>
                              </a>
                            </div>
                          </li>
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                18
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  HR Manager
                                </h6>
                              </a>
                            </div>
                          </li>
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                10
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  Project Manager
                                </h6>
                              </a>
                            </div>
                          </li>
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                15
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  Sales Manager
                                </h6>
                              </a>
                            </div>
                          </li>
                          <li className="border p-[6px] border-gray-100/50 rounded group/joblist dark:border-gray-100/20">
                            <div className="flex gap-2 items-center">
                              <div className="h-8 w-8 text-center bg-violet-500/20 leading-[2.4] rounded text-violet-500 text-sm font-medium">
                                28
                              </div>
                              <a
                                href="javascript:void(0)"
                                className="text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-gray-50"
                              >
                                <h6 className="mb-0 transition-all duration-300 fs-14 hover:text-violet-500 font-bold">
                                  Developer
                                </h6>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div> */}
                        <div className="mt-14">
                          {filteredJobs && filteredJobs.length === 0 ? (
                            <div className="flex justify-center items-center h-screen">
                              <h1 className="text-2xl font-bold font-inter text-violet-600 py-6">
                                No Jobs Available
                              </h1>
                            </div>
                          ) : (
                            filteredJobs.map((job) => (
                              <div
                                key={job?.jobId}
                                className="relative mt-4 overflow-hidden duration-500 ease-in-out bg-white border rounded-md border-gray-100 group hover:border-violet-500 dark:bg-neutral-900 dark:border-neutral-600 transform transition-transform hover:-translate-y-1"
                              >
                                <div className="w-28 absolute top-0 left-[-3rem] transform -rotate-45 bg-violet-500 p-6 text-center dark:bg-violet-500">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-2xl text-white align-middle"
                                  >
                                    <i className="mdi mdi-star"></i>
                                  </a>
                                </div>
                                <div className="p-4">
                                  <div className="grid items-center grid-cols-12">
                                    <div className="col-span-12 lg:col-span-2">
                                      <div className="mb-4 text-center mb-md-0">
                                        <a href="company-details.html">
                                          <Image
                                            src="/assets/images/featured-job/img-01.png"
                                            alt="Description of Image"
                                            width={50} // replace with actual width
                                            height={50} // replace with actual height
                                            className="mx-auto rounded-3"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 lg:col-span-3">
                                      <div className="mb-2 mb-md-0">
                                        <h5 className="mb-1 fs-18">
                                          <a
                                            href="job-details.html"
                                            className="text-gray-900 dark:text-gray-50 font-bold text-xl"
                                          >
                                            {job?.jobTitle}
                                          </a>
                                        </h5>
                                        <p className="mb-0 text-gray-500 fs-14 dark:text-gray-300">
                                          {job?.company?.companyName}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 lg:col-span-3">
                                      <div className="mb-2 lg:flex lg:gap-1 items-center">
                                        <div className="flex-shrink-0">
                                          <FaMapMarkerAlt className="text-violet-500 dark:text-gray-300" />{" "}
                                        </div>
                                        <p className="mb-0 text-gray-500 dark:text-gray-300">
                                          {job?.jobLocation?.area} ,{" "}
                                          {job?.jobLocation?.city} ,{" "}
                                          {job?.jobLocation?.country}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 lg:col-span-2">
                                      <div>
                                        <p className="mb-0 text-gray-500 dark:text-gray-300 lg:flex lg:gap-1 items-center">
                                          <FaRegClock className="text-violet-500 dark:text-gray-300" />{" "}
                                          {job.jobCreatedAt}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 lg:col-span-2">
                                      <div className="flex flex-wrap gap-1.5">
                                        <span className="bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">
                                          {job?.jobType}
                                        </span>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                  </div>
                                  {/* <!--end row--> */}
                                </div>
                                <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700">
                                  <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-6">
                                      <div>
                                        <p className="mb-0 text-gray-500 dark:text-gray-300">
                                          <span className="font-bold text-gray-900 dark:text-white">
                                            Experience:
                                          </span>{" "}
                                          {job?.jobExperience}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                    <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                                      <div className="flex justify-end text-right lg:text-right dark:text-white">
                                        <a
                                          onClick={() => {
                                            router.push(
                                              `/applicant/job-feed/${job?.jobId}`
                                            );
                                          }}
                                          className="flex items-center hover:cursor-pointer"
                                        >
                                          Apply Now
                                          <MdKeyboardDoubleArrowRight />
                                        </a>
                                      </div>
                                    </div>
                                    {/* <!--end col--> */}
                                  </div>
                                  {/* <!--end row--> */}
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                        <div className="flex justify-center mt-9">
                          <Pagination
                            count={10}
                            defaultPage={1}
                            onChange={(event, page) => onPageChange(page)}
                            size="large"
                          />
                        </div>
                      </div>
                      <div className="container mx-auto px-4 py-8">
                        <div className="grid gap-6">
                          <div className="col-span-12 md:col-span-2 flex items-center">
                            <button
                              type="button"
                              className="w-full py-2 px-4 border border-transparent text-white rounded-md shadow-sm bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-gray-800"
                              onClick={() => setNearby(true)}
                            >
                              <i className="uil uil-filter"></i> Nearby
                            </button>
                          </div>
                          <div className="col-span-12 md:col-span-1 flex items-center">
                            <button
                              type="button"
                              className="w-full py-2 px-4 border border-transparent text-white rounded-md shadow-sm bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-gray-800"
                              onClick={handleReset}
                            >
                              <i className="uil uil-filter"></i> Reset
                            </button>
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-span-12 lg:col-span-3">
                            <div className="space-y-5">
                              <div>
                                <div
                                  onClick={() =>
                                    setIsLocationOpen(!isLocationOpen)
                                  }
                                  className="cursor-pointer text-gray-700"
                                >
                                  <h6 className="flex gap-36 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                    <span className="text-gray-900 dark:text-gray-50">
                                      Location
                                    </span>
                                    <FaChevronDown
                                      className={`text-xl ${
                                        isLocationOpen ? "rotate-180" : ""
                                      } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                    />
                                  </h6>
                                </div>
                                {isLocationOpen && (
                                  <div className="accordion-body block transition-all duration-300">
                                    <div className="p-5">
                                      <div className="mb-3">
                                        <form className="relative">
                                          <input
                                            className="border rounded-md border-gray-300 placeholder:text-13 placeholder:text-gray-400 dark:bg-neutral-700 dark:border-gray-100/20 dark:text-gray-300"
                                            type="search"
                                            placeholder="Search..."
                                            onChange={(event) =>
                                              setSearch(event.target.value)
                                            }
                                          />
                                          <button
                                            className="absolute bg-transparent border-0 top-3 right-5 focus:outline-none dark:text-gray-300"
                                            type="submit"
                                          >
                                            <span>
                                              <FaMagnifyingGlass className="text-gray-300" />
                                            </span>
                                          </button>
                                        </form>
                                      </div>
                                      <div className="area-range">
                                        <div className="mb-3 form-label dark:text-gray-300">
                                          Area Range (Nearby):{" "}
                                          <span
                                            className="mt-2 example-val"
                                            id="slider1-span"
                                          >
                                            {distValue}
                                          </span>{" "}
                                          km
                                        </div>
                                        <input
                                          id="steps-range"
                                          type="range"
                                          min="0"
                                          max="30"
                                          defaultValue="0"
                                          step="0.5"
                                          onChange={(e) =>
                                            setDistValue(
                                              parseFloat(e.target.value)
                                            )
                                          }
                                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div>
                                <div
                                  onClick={() =>
                                    setIsWorkExpOpen(!isWorkExpOpen)
                                  }
                                  className="cursor-pointer text-gray-700"
                                >
                                  <h6 className="flex gap-20 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                    <span className="text-gray-900 dark:text-gray-50">
                                      Work Experience
                                    </span>
                                    <FaChevronDown
                                      className={`text-xl ${
                                        isWorkExpOpen ? "rotate-180" : ""
                                      } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                    />
                                  </h6>
                                </div>
                                {isWorkExpOpen && (
                                  <div className="accordion-body block transition-all duration-300">
                                    <div className="p-5">
                                      <div className="mt-2">
                                        <input
                                          className=" cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="no experience"
                                          id="exp1"
                                          name="exp"
                                          onClick={(e) =>
                                            setExperience(
                                              (e.target as HTMLInputElement)
                                                .value
                                            )
                                          }
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="exp1"
                                        >
                                          No experience
                                        </label>
                                      </div>
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="0 - 3 years"
                                          id="exp2"
                                          name="exp"
                                          onClick={(e) =>
                                            setExperience(
                                              (e.target as HTMLInputElement)
                                                .value
                                            )
                                          }
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="exp2"
                                        >
                                          0-3 years
                                        </label>
                                      </div>
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="3 - 6 years"
                                          id="exp3"
                                          name="exp"
                                          onClick={(e) =>
                                            setExperience(
                                              (e.target as HTMLInputElement)
                                                .value
                                            )
                                          }
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="exp3"
                                        >
                                          3-6 years
                                        </label>
                                      </div>
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="more than 6 years"
                                          id="exp4"
                                          name="exp"
                                          onClick={(e) =>
                                            setExperience(
                                              (e.target as HTMLInputElement)
                                                .value
                                            )
                                          }
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="exp4"
                                        >
                                          More than 6 years
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div>
                                <div
                                  onClick={() =>
                                    setIsJobTypeOpen(!isJobTypeOpen)
                                  }
                                  className="cursor-pointer text-gray-700"
                                >
                                  <h6 className="flex gap-10 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                    <span className="text-gray-900 dark:text-gray-50">
                                      Type of Employment
                                    </span>
                                    <FaChevronDown
                                      className={`text-xl ${
                                        isJobTypeOpen ? "rotate-180" : ""
                                      } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                    />
                                  </h6>
                                </div>
                                {isJobTypeOpen && (
                                  <div className="accordion-body block transition-all duration-300">
                                    <div className="p-5">
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          // checked
                                          value="Freelance"
                                          id="flexCheckChecked1"
                                          name="jobType"
                                          onClick={(e) =>
                                            setJobType(
                                              (e.target as HTMLInputElement)
                                                .value
                                            )
                                          }
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="flexCheckChecked1"
                                        >
                                          Freelance
                                        </label>
                                      </div>
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="full time"
                                          id="flexCheckChecked2"
                                          name="jobType"
                                          onClick={(e) =>
                                            setJobType(
                                              (e.target as HTMLInputElement)
                                                .value
                                            )
                                          }
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="flexCheckChecked2"
                                        >
                                          Full Time
                                        </label>
                                      </div>
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="part time"
                                          id="flexCheckChecked3"
                                          name="jobType"
                                          onClick={(e) =>
                                            setJobType(
                                              (e.target as HTMLInputElement)
                                                .value
                                            )
                                          }
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="flexCheckChecked3"
                                        >
                                          Part Time
                                        </label>
                                      </div>
                                      <div className="mt-2">
                                        <input
                                          className=" cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="internship"
                                          id="flexCheckChecked4"
                                          name="jobType"
                                          onClick={(e) =>
                                            setJobType(
                                              (e.target as HTMLInputElement)
                                                .value
                                            )
                                          }
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="flexCheckChecked4"
                                        >
                                          Internship
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div>
                                <div
                                  onClick={() => setIsDateOpen(!isDateOpen)}
                                  className="cursor-pointer text-gray-700"
                                >
                                  <h6 className="flex gap-10 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                    <span className="text-gray-900 dark:text-gray-50">
                                      Date Posted
                                    </span>
                                    <FaChevronDown
                                      className={`text-xl ${
                                        isDateOpen ? "rotate-180" : ""
                                      } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                    />
                                  </h6>
                                </div>
                                {isDateOpen && (
                                  <div className="accordion-body block transition-all duration-300">
                                    <div className="p-5">
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          // checked
                                          value=""
                                          id="flexCheckChecked1"
                                          name="datePosted"
                                          onChange={(e) => {
                                            setPastDate(null);
                                          }}
                                        />
                                        <label className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300">
                                          All
                                        </label>
                                      </div>
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="1"
                                          id="flexCheckChecked1"
                                          name="datePosted"
                                          onChange={(e) => {
                                            const hours = parseInt(
                                              e.target.value
                                            );
                                            const pastDate = getPastDate(hours);
                                            setPastDate(pastDate);
                                          }}
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="flexCheckChecked1"
                                        >
                                          Last Hour
                                        </label>
                                      </div>
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="24"
                                          id="flexCheckChecked2"
                                          name="datePosted"
                                          onChange={(e) => {
                                            const hours = parseInt(
                                              e.target.value
                                            );
                                            const pastDate = getPastDate(hours);
                                            setPastDate(pastDate);
                                          }}
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="flexCheckChecked2"
                                        >
                                          Last 24 Hours
                                        </label>
                                      </div>
                                      <div className="mt-2">
                                        <input
                                          className="cursor-pointer checked:bg-violet-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                                          type="radio"
                                          value="168"
                                          id="flexCheckChecked3"
                                          name="datePosted"
                                          onChange={(e) => {
                                            const hours = parseInt(
                                              e.target.value
                                            );
                                            const pastDate = getPastDate(hours);
                                            setPastDate(pastDate);
                                          }}
                                        />
                                        <label
                                          className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
                                          htmlFor="flexCheckChecked3"
                                        >
                                          Last 7 Days
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div>
                                <div
                                  onClick={() => setIsTagsOpen(!isTagsOpen)}
                                  className="cursor-pointer text-gray-700"
                                >
                                  <h6 className="flex gap-10 justify-between px-4 py-2 font-medium text-left bg-violet-300 dark:bg-gray-700 rounded">
                                    <span className="text-gray-900 dark:text-gray-50">
                                      Skills
                                    </span>
                                    <FaChevronDown
                                      className={`text-xl ${
                                        isTagsOpen ? "rotate-180" : ""
                                      } text-gray-400 dark:text-gray-50 transition-all duration-300`}
                                    />
                                  </h6>
                                </div>
                                {isTagsOpen && (
                                  <div className="block accordion-body">
                                    <div className="flex flex-wrap gap-2 p-5">
                                      <a
                                        href="javascript:void(0)"
                                        className="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 hover:bg-violet-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40"
                                      >
                                        design
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 hover:bg-violet-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40"
                                      >
                                        marketing
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 hover:bg-violet-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40"
                                      >
                                        business
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 hover:bg-violet-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40"
                                      >
                                        developer
                                      </a>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobFeed;
