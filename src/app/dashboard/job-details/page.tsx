import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBuilding, FaDollarSign, FaGraduationCap, FaHistory, FaMapMarkerAlt, FaStarHalfAlt, FaUser } from 'react-icons/fa';
const page = () => {
  return (


    <div className="main-content">
      <div className="page-content">
        <div className="pt-28 lg:pt-44 pb-28 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900 bg-[url('/back.jpeg')] bg-center bg-cover relative">
          <div className="container mx-auto">
            <div className="grid">
              <div className="col-span-12">
                <div className="text-center text-white">
                  <h3 className="mb-4 text-[26px]">Job Details</h3>
                  <div className="page-next">
                    <nav className="inline-block" aria-label="breadcrumb text-center">
                      <ol className="flex flex-wrap justify-center text-sm font-medium uppercase">
                        <li><Link href="/">Home</Link></li>
                        <li><i className="bx bxs-chevron-right align-middle px-2.5"></i><Link href="javascript:void(0)">Company</Link></li>
                        <li className="active" aria-current="page"><i className="bx bxs-chevron-right align-middle px-2.5"></i>Job Details </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <section className="py-16 px-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
              <div className="col-span-12 lg:col-span-8">
                <div className="border border-dark rounded-md border-gray-100/30 dark:border-neutral-600/80">
                  <div className="relative">
                    <Image src="/job-detail.jpg" alt="" width={1000} height={300} className="rounded-md img-fluid mb-7" />
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-12">
                      <div className="col-span-12 lg:col-span-8">
                        <div className="relative">
                          <h5 className="mb-1 text-gray-900 dark:text-gray-50">Product Designer / UI Designer</h5>
                          <ul className="flex gap-4 text-gray-500 dark:text-gray-300">
                            <li>
                              <i className="mdi mdi-account"></i> 8 Vacancy
                            </li>
                            <li className="text-yellow-500">
                              <span className="px-2 py-1 text-white bg-yellow-500 rounded text-13">4.8</span> <i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star-half-full"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-4">
                        <div className="flex gap-3 md:justify-end">
                          <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                            <a href="javascript:void(0)"><i className="uil uil-heart-alt text-lg leading-[1.8]"></i></a>
                          </div>
                          <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                            <a href="javascript:void(0)"><i className="uil uil-setting text-lg leading-[1.8]"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-8 gap-y-3 lg:gap-3">
                      <div className="col-span-12 lg:col-span-3">
                        <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                          <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">Experience</p>
                          <p className="font-medium text-gray-900 dark:text-gray-50">Minimum 1 Year</p>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-3">
                        <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                          <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">Employee type</p>
                          <p className="font-medium text-gray-900 dark:text-gray-50">Full Time</p>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-3">
                        <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                          <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">Position</p>
                          <p className="font-medium text-gray-900 dark:text-gray-50">Senior</p>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-3">
                        <div className="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                          <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">Offer Salary</p>
                          <p className="font-medium text-gray-900 dark:text-gray-50">$2150/ Month</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h5 className="mb-3 text-gray-900 dark:text-gray-50">Job Description</h5>
                      <div>
                        <p className="mb-0 text-gray-500 dark:text-gray-300">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h5 className="mb-3 text-gray-900 dark:text-gray-50">Responsibilities</h5>
                      <div>
                        <p className="mb-3 text-gray-500 dark:text-gray-300">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.</p>

                        <ul className="mb-0 text-gray-500 dark:text-gray-300">
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Have sound knowledge of commercial activities.</li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Build next-generation web applications with a focus on the client side</li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Work on multiple projects at once, and consistently meet draft deadlines</li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> have already graduated or are currently in any year of study</li>
                          <li className="text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Revise the work of previous designers to create a unified aesthetic for our brand materials</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h5 className="mb-3 text-gray-900 dark:text-gray-50">Qualification</h5>
                      <div>
                        <ul className="mb-0 text-gray-500 dark:text-gray-300">
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> B.C.A / M.C.A under National University course complete.</li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> 3 or more years of professional design experience</li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> have already graduated or are currently in any year of study </li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Advanced degree or equivalent experience in graphic and web design</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h5 className="mb-3 text-gray-900 dark:text-gray-50">Skill & Experience</h5>
                      <div>
                        <ul className="mb-0 text-gray-500 dark:text-gray-300">
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Understanding of key Design Principal</li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Proficiency With HTML, CSS, Tailwind</li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Wordpress: 1 year (Required) </li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Experience designing and developing responsive design websites </li>
                          <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> web designing: 1 year (Preferred) </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">PHP</span>
                      <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">JS</span>
                      <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">Marketing</span>
                      <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">REACT</span>
                      <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">PHOTOSHOP</span>
                    </div>

                    <div className="pt-3 mt-4">
                      <ul className="flex flex-wrap items-center gap-3 mb-0">
                        <li className="mt-1 dark:text-gray-50">
                          Share this job:
                        </li>
                        <li className="mt-1">
                          <a href="javascript:void(0)" className="btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 border-transparent text-white hover:-translate-y-1.5"><i className="uil uil-facebook-f"></i> Facebook</a>
                        </li>
                        <li className="mt-1">
                          <a href="javascript:void(0)" className="btn bg-red-600 border-transparent text-white hover:-translate-y-1.5"><i className="uil uil-google"></i> Google+</a>
                        </li>
                        <li className="mt-1">
                          <a href="javascript:void(0)" className="btn bg-green-500 border-transparent text-white hover:-translate-y-1.5"><i className="uil uil-linkedin-alt"></i> linkedin</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="mt-10 space-y-8">
                  <h5 className="text-gray-900 dark:text-gray-50">Related Jobs</h5>

                  <div className="relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                    <div className="p-6">
                      <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-1">
                          <div className="mb-4 text-center mb-md-0">
                            <a href="company-details.html"><Image src="/job.png" width={500} height={300} alt="" /></a>
                          </div>
                        </div>

                        <div className="col-span-12 lg:col-span-10">
                          <h5 className="mb-1 text-gray-900 fs-17"><a href="job-details.html" className="dark:text-gray-50">HTML Developer</a>
                            <small className="font-normal text-gray-500 dark:text-gray-300">(0-2 Yrs Exp.)</small>
                          </h5>
                          <ul className="flex flex-wrap gap-3 mb-0">
                            <li>
                              <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">Creative Agency</p>
                            </li>
                            <li>
                              <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="mdi mdi-map-marker"></i> New York</p>
                            </li>
                            <li>
                              <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
                            </li>
                          </ul>
                          <div className="mt-4">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-green-500/20 text-green-500 text-11 px-2 py-0.5 font-medium rounded">Full Time</span>
                              <span className="bg-yellow-500/20 text-yellow-500 text-11 px-2 py-0.5 font-medium rounded">Urgent</span>
                              <span className="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded">Private</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6">
                          <ul className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-50">
                            <li><i className="uil uil-tag"></i> Keywords :</li>
                            <li><a href="javascript:void(0)" className="text-gray-500 dark:text-gray-50">Ui designer</a>,</li>
                            <li><a href="javascript:void(0)" className="text-gray-500 dark:text-gray-50">developer</a></li>
                          </ul>
                        </div>

                        <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                          <div className="ltr:lg:text-end rtl:lg:text-start dark:text-gray-50">
                            <a href="#applyNow" data-bs-toggle="modal">Apply Now <i className="mdi mdi-chevron-double-right"></i></a>
                          </div>
                        </div>

                      </div>

                    </div>
                    <div className="absolute top-4 ltr:right-4 rtl:left-4">
                      <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                        <a href="javascript:void(0)"><i className="uil uil-heart-alt text-lg leading-[1.8]"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                    <div className="p-6">
                      <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-1">
                          <div className="mb-4 text-center mb-md-0">
                            <a href="company-details.html">
                              <Image src="/job.png" width={500} height={300} alt="" />
                            </a>
                          </div>
                        </div>

                        <div className="col-span-10">
                          <h5 className="mb-1 text-gray-900 fs-17"><a href="job-details.html" className="dark:text-gray-50">Marketing Director</a>
                            <small className="font-normal text-gray-500 dark:text-gray-300">(2-4 Yrs Exp.)</small>
                          </h5>
                          <ul className="flex flex-wrap gap-3 mb-0">
                            <li>
                              <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
                            </li>
                            <li>
                              <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="mdi mdi-map-marker"></i> California</p>
                            </li>
                            <li>
                              <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
                            </li>
                          </ul>
                          <div className="mt-4">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-red-500/20 text-red-500 text-11 px-2 py-0.5 font-medium rounded">Part Time</span>
                              <span className="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded">Private</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6">
                          <ul className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-50">
                            <li><i className="uil uil-tag"></i> Keywords :</li>
                            <li><a href="javascript:void(0)" className="text-gray-500 dark:text-gray-50">Ui designer</a>,</li>
                            <li><a href="javascript:void(0)" className="text-gray-500 dark:text-gray-50">developer</a></li>
                          </ul>
                        </div>

                        <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                          <div className="ltr:lg:text-end rtl:lg:text-start dark:text-gray-50">
                            <a href="#applyNow" data-bs-toggle="modal">Apply Now <i className="mdi mdi-chevron-double-right"></i></a>
                          </div>
                        </div>

                      </div>

                    </div>
                    <div className="absolute top-4 ltr:right-4 rtl:left-4">
                      <div className="w-8 h-8 text-center text-white bg-red-600 rounded">
                        <a href="javascript:void(0)"><i className="uil uil-heart-alt text-lg leading-[1.9]"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                    <div className="p-6">
                      <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-1">
                          <div className="mb-4 text-center mb-md-0">
                            <a href="company-details.html"><Image src="/job.png" width={500} height={300} alt="" /></a>
                          </div>
                        </div>

                        <div className="col-span-10">
                          <h5 className="mb-1 text-gray-900 fs-17"><a href="job-details.html" className="dark:text-gray-50">HTML Developer</a>
                            <small className="font-normal text-gray-500 dark:text-gray-300">(2-4 Yrs Exp.)</small>
                          </h5>
                          <ul className="flex flex-wrap gap-3 mb-0">
                            <li>
                              <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
                            </li>
                            <li>
                              <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="mdi mdi-map-marker"></i> California</p>
                            </li>
                            <li>
                              <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
                            </li>
                          </ul>
                          <div className="mt-4">
                            <div className="flex flex-wrap gap-1.5">
                              <span className="bg-violet-500/20 text-violet-500 text-11 px-2 py-0.5 font-medium rounded">Freelance</span>
                              <span className="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded">Internship</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6">
                          <ul className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-50">
                            <li><i className="uil uil-tag"></i> Keywords :</li>
                            <li><a href="javascript:void(0)" className="text-gray-500 dark:text-gray-50">Ui designer</a>,</li>
                            <li><a href="javascript:void(0)" className="text-gray-500 dark:text-gray-50">developer</a></li>
                          </ul>
                        </div>

                        <div className="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
                          <div className="ltr:lg:text-end rtl:lg:text-start dark:text-gray-50">
                            <a href="#applyNow" data-bs-toggle="modal">Apply Now <i className="mdi mdi-chevron-double-right"></i></a>
                          </div>
                        </div>

                      </div>

                    </div>
                    <div className="absolute top-4 ltr:right-4 rtl:left-4">
                      <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                        <a href="javascript:void(0)"><i className="uil uil-heart-alt text-lg leading-[1.8]"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <a href="job-list.html" className="font-medium text-gray-900 dark:text-gray-50">View More <i className="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-span-12 space-y-6 lg:col-span-4">
                <div className="border rounded border-gray-100/30 dark:border-neutral-600/80">
                  <div className="p-6">
                    <h6 className="text-gray-900 text-17 font-bold dark:text-gray-50">Job Overview</h6>

                    <ul>
                      <li>
                        <div className="flex mt-6 mb-7">
                          <div className="rounded-full border border-purple-500 p-3">
                            <FaUser style={{ color: 'purple', fontSize: '24px' }}
                            />
                          </div>
                          <div className="pl-4">
                            <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">Job Title</h6>
                            <p className="text-gray-500 dark:text-gray-300">Product Designer</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex mt-6">
                          <div className="rounded-full border border-purple-500 p-3">
                            <FaStarHalfAlt style={{ color: 'purple', fontSize: '24px' }}
                            />
                          </div>
                          <div className="pl-4">
                            <h6 className="mb-2 text-sm text-gray- font-bold dark:text-gray-50">Experience</h6>
                            <p className="text-gray-500 dark:text-gray-300"> 0-3 Years</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex mt-6">
                          <div className="rounded-full border border-purple-500 p-3">
                            <FaMapMarkerAlt style={{ color: 'purple', fontSize: '24px' }}
                            />
                          </div>
                          <div className="pl-4">
                            <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">Location</h6>
                            <p className="text-gray-500 dark:text-gray-300"> New york</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex mt-6">

                          <div className="rounded-full border border-purple-500 p-3">
                            <FaDollarSign style={{ color: 'purple', fontSize: '24px' }} />
                          </div>
                          <div className="pl-4">
                            <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">Offered Salary</h6>
                            <p className="text-gray-500 dark:text-gray-300">$35k - $45k</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex mt-6">

                          <div className="rounded-full border border-purple-500 p-3">
                            < FaGraduationCap style={{ color: 'purple', fontSize: '24px' }} />
                          </div>
                          <div className="pl-4">
                            <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">Qualification</h6>
                            <p className="text-gray-500 dark:text-gray-300">Bachelor Degree</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex mt-6">
                          <div className="rounded-full border border-purple-500 p-3">
                            <FaBuilding style={{ color: 'purple', fontSize: '24px' }} />
                          </div>
                          <div className="pl-4">
                            <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">Industry</h6>
                            <p className="text-gray-500 dark:text-gray-300">Private</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex mt-6">
                          <div className="rounded-full border border-purple-500 p-3">
                            <FaHistory style={{ color: 'purple', fontSize: '24px' }} />
                          </div>
                          <div className="pl-4">
                            <h6 className="mb-2 text-sm text-gray-900 font-bold dark:text-gray-50">Date Posted</h6>
                            <p className="text-gray-500 dark:text-gray-300">Posted 2 hrs ago</p>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-8 space-y-2">
                      <a href="#applyNow" data-bs-toggle="modal" className="btn w-full group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 border-transparent text-white hover:-translate-y-1.5">Apply Now <i className="uil uil-arrow-right"></i></a>
                      <a href="bookmark-jobs.html" className="btn w-full bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30"><i className="uil uil-bookmark"></i> Add Bookmark</a>
                    </div>
                  </div>
                </div>
                <div className="border rounded border-gray-100/30 dark:border-neutral-600/80">
                  <div className="p-6">
                    <div>
                      <Image src="/job.png" width={500} height={300} alt="" />

                      <div className="mt-4 text-center">
                        <h6 className="text-gray-900 text-17 font-bold dark:text-gray-50">Jobcy Technology Pvt.Ltd</h6>
                        <p className="text-gray-500 dark:text-gray-300">Since July 2017</p>
                      </div>

                      <ul className="mt-4 space-y-4">
                        <li>
                          <div className="flex">
                            <i className="text-xl uil uil-phone-volume group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                            <div className="ltr:ml-3 rtl:mr-3">
                              <h6 className="mb-1 text-sm text-gray-900 dark:text-gray-50">Phone</h6>
                              <p className="text-sm text-gray-500 dark:text-gray-300">+589 560 56555</p>
                            </div>
                          </div>
                        </li>
                        <li className="mt-3">
                          <div className="flex">
                            <i className="text-xl uil uil-envelope group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                            <div className="ltr:ml-3 rtl:mr-3">
                              <h6 className="mb-1 text-sm text-gray-900 dark:text-gray-50">Email</h6>
                              <p className="text-sm text-gray-500 dark:text-gray-300">pixltechnology@info.com</p>
                            </div>
                          </div>
                        </li>
                        <li className="mt-3">
                          <div className="flex">
                            <i className="text-xl uil uil-globe group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                            <div className="ltr:ml-3 rtl:mr-3">
                              <h6 className="mb-1 text-sm text-gray-900 dark:text-gray-50">Website</h6>
                              <p className="mb-0 text-gray-500 dark:text-gray-300 fs-14 text-break">www.Jobcytechnology.pvt.ltd.com</p>
                            </div>
                          </div>
                        </li>
                        <li className="mt-3">
                          <div className="flex">
                            <i className="text-xl uil uil-map-marker group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
                            <div className="ltr:ml-3 rtl:mr-3">
                              <h6 className="mb-1 text-sm text-gray-900 dark:text-gray-50">Location</h6>
                              <p className="text-sm text-gray-500 dark:text-gray-300">Oakridge Lane Richardson.</p>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <div className="mt-6">
                        <a href="company-details.html" className="w-full text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500"><i className="mdi mdi-eye"></i> View Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className="mb-3 text-16 dark:text-gray-50">Job location</h6>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

  )
};

export default page
