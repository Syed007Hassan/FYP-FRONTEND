import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-blue-900 pt-8 pb-8 md:pt-20 md:pb-20 pl-4 pr-4 md:pl-32 md:pr-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="md:mr-12">
              <h4 className="text-white text-xl md:text-3xl mb-4 md:mb-6 font-bold">SyncFlow</h4>
              <p className="text-white/50 dark:text-gray-300">
                It is a long established fact that a reader will be of a page reader will be of at its layout.
              </p>
              <p className="mt-3 text-white dark:text-gray-50 font-bold">Follow Us on:</p>
              <div className="mt-3 md:mt-5">
                <ul className="flex gap-3">
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-violet-500 hover:border-transparent">
                    <a href="#">
                      <i className="uil uil-facebook-f"></i>
                    </a>
                  </li>
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-sky-500 hover:border-transparent">
                    <a href="#">
                      <i className="uil uil-linkedin-alt"></i>
                    </a>
                  </li>
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-red-500 hover:border-transparent">
                    <a href="#">
                      <i className="uil uil-google"></i>
                    </a>
                  </li>
                  <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 hover:bg-blue-500 hover:border-transparent">
                    <a href="#">
                      <i className="uil uil-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-4 md:col-span-6 xl:col-span-2 md:mt-0">
            <div className="md:flex">
              <div className="w-1/2">
                <p className="mb-4 text-white text-lg md:text-16 font-bold">Company</p>
                <ul className="space-y-4">
                  <li className="text-base transition-all duration-500 ease-in-out text-white/50 hover-text-gray-50 hover-text-base dark-text-gray-300 dark-hover-text-gray-50">
                    <Link legacyBehavior href="/about">
                      <a>
                        <i className="mdi mdi-chevron-right"></i> About Us
                      </a>
                    </Link>
                  </li>
                  <li className="text-base transition-all duration-500 ease-in-out text-white/50 hover-text-gray-50 hover-text-base dark-text-gray-300 dark-hover-text-gray-50">
                    <Link legacyBehavior href="/contact">
                      <a>
                        <i className="mdi mdi-chevron-right"></i> Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/2">
                <p className="mb-4 text-white text-lg md:text-16 font-bold">For Jobs</p>
                <ul className="space-y-4">
                  <li className="text-base transition-all duration-500 ease-in-out text-white/50 hover-text-gray-50 hover-text-base dark-text-gray-300 dark-hover-text-gray-50">
                    <Link legacyBehavior href="/job-categories">
                      <a>
                        <i className="mdi mdi-chevron-right"></i> Browse Categories
                      </a>
                    </Link>
                  </li>
                  <li className="text-base transition-all duration-500 ease-in-out text-white/50 hover-text-gray-50 hover-text-base dark-text-gray-300 dark-hover-text-gray-50">
                    <Link legacyBehavior href="/job-list">
                      <a>
                        <i className="mdi mdi-chevron-right"></i> Browse Jobs
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-4 md:col-span-6 xl:col-span-2 md:mt-0">
            <div className="md:flex">
              <div className="w-1/2">
                <p className="mb-4 text-white text-lg md:text-16 font-bold">For Candidates</p>
                <ul className="space-y-4">
                  <li className="text-base transition-all duration-500 ease-in-out text-white/50 hover-text-gray-50 hover-text-base dark-text-gray-300 dark-hover-text-gray-50">
                    <Link legacyBehavior href="/candidate-list">
                      <a>
                        <i className="mdi mdi-chevron-right"></i> Candidate List
                      </a>
                    </Link>
                  </li>
                  <li className="text-base transition-all duration-500 ease-in-out text-white/50 hover-text-gray-50 hover-text-base dark-text-gray-300 dark-hover-text-gray-50">
                    <Link legacyBehavior href="/candidate-grid">
                      <a>
                        <i className="mdi mdi-chevron-right"></i> Candidate Grid
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-4 md:col-span-6 xl:col-span-2 md:mt-0">
            <div className="md:flex">
              <div className="w-1/2">
                <p className="mb-4 text-white text-lg md:text-16 font-bold">Support</p>
                <ul className="space-y-4">
                  <li className="text-base transition-all duration-500 ease-in-out text-white/50 hover-text-gray-50 hover-text-base dark-text-gray-300 dark-hover-text-gray-50">
                    <Link legacyBehavior href="/contact">
                      <a>
                        <i className="mdi mdi-chevron-right"></i> Help Center
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <p className="mb-4 text-white text-lg md:text-16 font-bold">Support (cont.)</p>
                <ul className="space-y-4">
                  <li className="text-base transition-all duration-500 ease-in-out text-white/50 hover-text-gray-50 hover-text-base dark-text-gray-300 dark-hover-text-gray-50">
                    <Link legacyBehavior href="/faqs">
                      <a>
                        <i className="mdi mdi-chevron-right"></i> FAQs
                      </a>
                    </Link>
                  </li>
                  <li className="text-base transition-all duration-500 ease-in-out text-white/50 hover-text-gray-50 hover-text-base dark-text-gray-300 dark-hover-text-gray-50">
                    <Link legacyBehavior href="/privacy-policy">
                      <a>
                        <i className="mdi mdi-chevron-right"></i> Privacy Policy
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
