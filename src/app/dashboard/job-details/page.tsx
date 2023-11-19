import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
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

                      <a href="bookmark-jobs.html" className="btn w-full py-3 px-24 bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30">
                        <i className="fas fa-bookmark"></i> Add Bookmark
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

  )
};

export default page;



