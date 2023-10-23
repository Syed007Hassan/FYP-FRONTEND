// // MainLayout.tsx
// import React, { useState } from 'react';
// import Header from '@/components/Header';
// import  Sidebar  from '@/components/Sidebar';

// const MainLayout: React.FC = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
//       <div className="flex-1">
//         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//         {children}
//       </div>
//     </div>
//   );
// };

// export default MainLayout;
