import React from 'react'

const page = () => {
  return (
    <div>
      amna
    </div>
  )
}

export default page

//     <div className="main-content">
//       <div className="page-content">

//         <div className="pt-28 lg:pt-44 pb-28 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900  bg-center bg-cover relative" >
//           <div className="container mx-auto">
//             <div className="grid">
//               <div className="col-span-12">
//                 <div className="text-center text-white">
//                   <h3 className="mb-4 text-[26px]">Manage Jobs</h3>
//                   <div className="page-next">
//                     <nav className="inline-block" aria-label="breadcrumb text-center">
//                       <ol className="flex flex-wrap justify-center text-sm font-medium uppercase">
//                         <li><a href="index.html">Home</a></li>
//                         <li><i className="bx bxs-chevron-right align-middle px-2.5"></i><a href="javascript:void(0)">Profile</a></li>
//                         <li className="active" aria-current="page"><i className="bx bxs-chevron-right align-middle px-2.5"></i>Manage Jobs</li>
//                       </ol>
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full h-64">
//             <Image src="/landing-pic.png" alt="Image description" layout="fill" objectFit="cover" className="rounded-lg" />
//           </div>
//         </div>

//         <section className="py-20">
//           <div className="container mx-auto">
//             <div className="grid items-center grid-cols-12 mb-4">
//               <div className="col-span-12 lg:col-span-8">
//                 <div className="mb-3 mb-lg-0">
//                   <h6 className="text-gray-900 text-16 dark:text-gray-50"> Showing 1 – 8 of 11 results </h6>
//                 </div>
//               </div>


//               <div className="col-span-12 lg:col-span-4">
//                 <div className="candidate-list-widgets">
//                   <div className="grid items-center grid-cols-12 gap-3">
//                     <div className="col-span-12 lg:col-span-6">
//                       <div className="selection-widget">
//                         <select className="form-select" data-trigger name="choices-single-filter-orderby" id="choices-single-filter-orderby" aria-label="Default select example">
//                           <option value="df">Default</option>
//                           <option value="ne">Newest</option>
//                           <option value="od">Oldest</option>
//                           <option value="rd">Random</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="col-span-12 lg:col-span-6">
//                       <div className="selection-widget">
//                         <select className="form-select" data-trigger name="choices-candidate-page" id="choices-candidate-page" aria-label="Default select example">
//                           <option value="df">All</option>
//                           <option value="ne">8 per Page</option>
//                           <option value="ne">12 per Page</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8">
//               <div className="grid grid-cols-1 gap-y-5">
//                 <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
//                   <div className="grid grid-cols-12">
//                     <div className="col-span-12 lg:col-span-1">
//                       <a href="#">
//                         <div className="w-full h-64">
//                           <Image src="/landing-pic.png" alt="Image description" layout="fill" objectFit="cover" className="rounded-lg" />
//                         </div></a>
//                     </div>
//                     <div className="col-span-12 lg:col-span-9">
//                       <div className="mt-4 lg:mt-0">
//                         <h5 className="mb-1 text-17"><a href="job-details.html" className="text-gray-900 dark:text-gray-50">Business Associate</a></h5>
//                         <ul className="flex gap-3 mb-0">
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="mdi mdi-map-marker"></i> California</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
//                           </li>
//                         </ul>
//                         <div className="flex flex-wrap gap-2 mt-3">
//                           <span className="px-2 py-0.5 mt-1 font-medium text-red-500 rounded bg-red-500/20 text-13">Part Time</span>
//                           <span className="px-2 py-0.5 mt-1 font-medium text-yellow-500 rounded bg-yellow-500/20 text-13">Urgent</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="items-center col-span-12 lg:col-span-2 ">
//                       <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
//                           <a href="manage-jobs-post.html" className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-edit"></i>
//                           </a>
//                         </li>
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
//                           <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#deleteModal" className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-trash-alt"></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
//                   <div className="grid grid-cols-12">
//                     <div className="col-span-12 lg:col-span-1">
//                       <a href="#">
//                         {/* <img src="assets/images/featured-job/img-02.png" alt="" className="img-fluid rounded-3"> */}
//                         <div className="w-full h-64">
//                           <Image src="/landing-pic.png" alt="Image description" layout="fill" objectFit="cover" className="rounded-lg" />
//                         </div>

//                       </a>
//                     </div>
//                     <div className="col-span-12 lg:col-span-9">
//                       <div className="mt-4 lg:mt-0">
//                         <h5 className="mb-1 text-17"><a href="job-details.html" className="text-gray-900 dark:text-gray-50">Marketing Director</a> <small className="font-normal text-gray-500">(2-4 Yrs Exp.)</small></h5>
//                         <ul className="flex gap-3 mb-0">
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">Creative Agency</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="mdi mdi-map-marker"></i> New York</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
//                           </li>
//                         </ul>
//                         <div className="flex flex-wrap gap-2 mt-3">
//                           <span className="px-2 py-0.5 mt-1 font-medium text-red-500 rounded bg-red-500/20 text-13">Part Time</span>
//                           <span className="px-2 py-0.5 mt-1 font-medium text-sky-500 rounded bg-sky-500/20 text-13">Private</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="items-center col-span-12 lg:col-span-2">
//                       <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
//                           <a href="manage-jobs-post.html" className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-edit"></i>
//                           </a>
//                         </li>
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
//                           <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#deleteModal" className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-trash-alt"></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
//                   <div className="grid grid-cols-12">
//                     <div className="col-span-12 lg:col-span-1">
//                       <a href="#">
//                         <div className="w-full h-64">
//                           <Image src="/landing-pic.png" alt="Image description" layout="fill" objectFit="cover" className="rounded-lg" />
//                         </div></a>
//                     </div>
//                     <div className="col-span-12 lg:col-span-9">
//                       <div className="mt-4 lg:mt-0">
//                         <h5 className="mb-1 text-17"><a href="job-details.html" className="text-gray-900 dark:text-gray-50">HTML Developer</a> <small className="font-normal text-gray-500">(2-4 Yrs Exp.)</small></h5>
//                         <ul className="flex gap-3 mb-0">
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="mdi mdi-map-marker"></i> California</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
//                           </li>
//                         </ul>
//                         <div className="flex flex-wrap gap-2 mt-3">
//                           <span className="px-2 py-0.5 mt-1 font-medium text-violet-500 rounded bg-violet-500/20 text-13">Freelance</span>
//                           <span className="px-2 py-0.5 mt-1 font-medium text-violet-500 rounded bg-violet-500/20 text-13">Freelance</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="items-center col-span-12 lg:col-span-2">
//                       <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
//                           <a href="manage-jobs-post.html" className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-edit"></i>
//                           </a>
//                         </li>
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
//                           <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#deleteModal" className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-trash-alt"></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
//                   <div className="grid grid-cols-12">
//                     <div className="col-span-12 lg:col-span-1">
//                       <a href="#">
//                         <div className="w-full h-64">
//                           <Image src="/landing-pic.png" alt="Image description" layout="fill" objectFit="cover" className="rounded-lg" />
//                         </div></a>
//                     </div>
//                     <div className="col-span-12 lg:col-span-9">
//                       <div className="mt-4 lg:mt-0">
//                         <h5 className="mb-1 text-17"><a href="job-details.html" className="text-gray-900 dark:text-gray-50">HTML Developer</a> <small className="font-normal text-gray-500">(5+ Yrs Exp.)</small></h5>
//                         <ul className="flex gap-3 mb-0">
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="mdi mdi-map-marker"></i> California</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
//                           </li>
//                         </ul>
//                         <div className="flex flex-wrap gap-2 mt-3">
//                           <span className="px-2 py-0.5 mt-1 font-medium text-green-500 rounded bg-green-500/20 text-13">Full Time</span>
//                           <span className="px-2 py-0.5 mt-1 font-medium text-sky-500 rounded bg-sky-500/20 text-13">Private</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="items-center col-span-12 lg:col-span-2">
//                       <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
//                           <a href="manage-jobs-post.html" className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-edit"></i>
//                           </a>
//                         </li>
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
//                           <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#deleteModal" className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-trash-alt"></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
//                   <div className="grid grid-cols-12">
//                     <div className="col-span-12 lg:col-span-1">
//                       <a href="#">
//                         <div className="w-full h-64">
//                           <Image src="/landing-pic.png" alt="Image description" layout="fill" objectFit="cover" className="rounded-lg" />
//                         </div></a>
//                     </div>
//                     <div className="col-span-12 lg:col-span-9">
//                       <div className="mt-4 lg:mt-0">
//                         <h5 className="mb-1 text-17"><a href="job-details.html" className="text-gray-900 dark:text-gray-50">Product Designer </a> <small className="font-normal text-gray-500">(0-5 Yrs Exp.)</small></h5>
//                         <ul className="flex gap-3 mb-0">
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">Creative Agency </p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="mdi mdi-map-marker"></i> California</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
//                           </li>
//                         </ul>
//                         <div className="flex flex-wrap gap-2 mt-3">
//                           <span className="px-2 py-0.5 mt-1 font-medium text-blue-500 rounded bg-blue-500/20 text-13">Internship</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="items-center col-span-12 lg:col-span-2">
//                       <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
//                           <a href="manage-jobs-post.html" className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-edit"></i>
//                           </a>
//                         </li>
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
//                           <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#deleteModal" className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-trash-alt"></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-5 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
//                   <div className="grid grid-cols-12">
//                     <div className="col-span-12 lg:col-span-1">
//                       <a href="#">
//                         <div className="w-full h-64">
//                           <Image src="/landing-pic.png" alt="Image description" layout="fill" objectFit="cover" className="rounded-lg" />
//                         </div></a>
//                     </div>
//                     <div className="col-span-12 lg:col-span-9">
//                       <div className="mt-4 lg:mt-0">
//                         <h5 className="mb-1 text-17"><a href="job-details.html" className="text-gray-900 dark:text-gray-50">Project Manager </a> <small className="font-normal text-gray-500">(0-2 Yrs Exp.)</small></h5>
//                         <ul className="flex gap-3 mb-0">
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd </p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="mdi mdi-map-marker"></i> California</p>
//                           </li>
//                           <li className="">
//                             <p className="mb-0 text-sm text-gray-500 dark:text-gray-300"><i className="uil uil-wallet"></i> $250 - $800 / month</p>
//                           </li>
//                         </ul>
//                         <div className="flex flex-wrap gap-2 mt-3">
//                           <span className="px-2 py-0.5 mt-1 font-medium text-blue-500 rounded bg-blue-500/20 text-13">Internship</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="items-center col-span-12 lg:col-span-2">
//                       <ul className="flex flex-wrap gap-3 mt-4 lg:mt-0">
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-green-500 rounded-full bg-green-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
//                           <a href="manage-jobs-post.html" className="text-center avatar-sm success-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-edit"></i>
//                           </a>
//                         </li>
//                         <li className="w-10 h-10 text-lg leading-10 text-center text-red-500 rounded-full bg-red-500/20" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
//                           <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#deleteModal" className="text-center avatar-sm danger-bg-subtle d-inline-block rounded-circle fs-18">
//                             <i className="uil uil-trash-alt"></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-12">
//               <div className="col-span-12">
//                 <ul className="flex justify-center gap-2 mt-8">
//                   <li className="w-12 h-12 text-center border rounded-full cursor-default border-gray-100/50 dark:border-gray-100/20">
//                     {/* <a className="cursor-auto" href="javascript:void(0)" tabindex="-1">
//                       <i className="mdi mdi-chevron-double-left text-16 leading-[2.8] dark:text-white"></i>
//                     </a> */}
//                   </li>
//                   <li className="w-12 h-12 text-center text-white border border-transparent rounded-full cursor-pointer group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">
//                     <a className="text-16 leading-[2.8]" href="javascript:void(0)">1</a>
//                   </li>
//                   <li className="w-12 h-12 text-center text-gray-900 transition-all duration-300 border rounded-full cursor-pointer border-gray-100/50 hover:bg-gray-100/30 focus:bg-gray-100/30 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20">
//                     <a className="text-16 leading-[2.8]" href="javascript:void(0)">2</a>
//                   </li>
//                   <li className="w-12 h-12 text-center text-gray-900 transition-all duration-300 border rounded-full cursor-pointer border-gray-100/50 hover:bg-gray-100/30 focus:bg-gray-100/30 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20">
//                     <a className="text-16 leading-[2.8]" href="javascript:void(0)">3</a>
//                   </li>
//                   <li className="w-12 h-12 text-center text-gray-900 transition-all duration-300 border rounded-full cursor-pointer border-gray-100/50 hover:bg-gray-100/30 focus:bg-gray-100/30 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20">
//                     <a className="text-16 leading-[2.8]" href="javascript:void(0)">4</a>
//                   </li>
//                   <li className="w-12 h-12 text-center text-gray-900 transition-all duration-300 border rounded-full cursor-pointer border-gray-100/50 hover:bg-gray-100/30 focus:bg-gray-100/30 dark:border-gray-100/20 dark:text-gray-50 dark:hover:bg-gray-500/20">
//                     {/* <a href="javascript:void(0)" tabindex="-1">
//                       <i className="mdi mdi-chevron-double-right text-16 leading-[2.8]"></i>
//                     </a> */}
//                   </li>
//                 </ul>
//               </div>

//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }
