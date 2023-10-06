"use client"
import React from 'react';

const Home = () => {
  return (
    <section className="relative py-64 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 group-data-[mode=dark]:bg-neutral-900 ">
      <div className="inset-0 absolute bg-[url('/src/assets/images/home/img-01.png')] bg-center"></div>
      <div className="container relative mx-auto">
        <div className="grid items-center grid-cols-12 rtl:gap-10">
          <div className="col-span-12 col-start-2">
            <div className="mb-3 text-center ltr:mr-14 rtl:ml-14">
              <h1 className="mb-3 text-5xl leading-tight text-white fw-semibold">Search Between More Then <br /><span className="text-yellow-500 fw-bold">10,000+</span> Open Jobs.</h1>
              <p className="text-white text-17">Find jobs, create trackable resumes and enrich your applications.</p>
            </div>
            <form action="#">
              <div className="registration-form">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 xl:col-span-3">
                    <div className="mt-3 rounded-l filter-search-form filter-border mt-md-0">
                      <i className="uil uil-briefcase-alt"></i>
                      <input type="search" id="job-title" className="w-full filter-input-box placeholder:text-gray-100 placeholder:text-13 dark:text-gray-100" placeholder="Job, Company name..." />
                    </div>
                  </div>
                  <div className="col-span-12 xl:col-span-3">
                    <div className="h-full mt-3">
                      <button className="btn group-data-[theme-color=violet]:bg-violet-400 group-data-[theme-color=sky]:bg-sky-400 group-data-[theme-color=red]:bg-red-400 group-data-[theme-color=green]:bg-green-400 group-data-[theme-color=pink]:bg-pink-400 group-data-[theme-color=blue]:bg-blue-400 border rounded-lg border-transparent ltr:xl:rounded-l-none rtl:xl:rounded-r-none w-full py-[18px] text-white" type="submit"><i className="uil uil-search me-1"></i> Find Job</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <ul className="mt-4 text-center">
            <li className="inline-block text-white">
              <i className="text-lg text-yellow-500 mdi mdi-tag-multiple-outline"></i>
              Trending Keywords:
            </li>
            <li className="inline-block text-white/50"><a href="javascript:void(0)"> Design, </a></li>
            <li className="inline-block text-white/50"><a href="javascript:void(0)"> Development, </a></li>
            <li className="inline-block text-white/50"><a href="javascript:void(0)"> Manager, </a></li>
            <li className="inline-block text-white/50"><a href="javascript:void(0)"> Senior </a></li>
          </ul>
        </div>
      </div>
      <img src="assets/images/bg-shape.png" alt="" className="absolute block -bottom-5 dark:hidden" />
      <img src="assets/images/bg-shape-dark.png" alt="" className="absolute hidden -bottom-5 dark:block" />
    </section>
  );
};

export default Home;
