"use client";
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import "/src/styles/sidebar.css";
import { useAppSelector } from '@/redux/hooks';
import { RootState } from "@/redux/store";


const UserManagement = () => {
  const initialUsers = [
    { id: 1, firstName: 'John', lastName: 'Doe', phoneNo: '1234567890', designation: 'Manager', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', phoneNo: '0987654321', designation: 'Developer', email: 'jane@example.com' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', phoneNo: '1122334455', designation: 'Designer', email: 'alice@example.com' },
  ];

  const [users, setUsers] = useState(initialUsers);

  const deleteUser = (userId: any) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.sidebarState
  );

  return (
    <div className={`content overflow-hidden ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className={`content overflow-x-hidden ${isSidebarOpen ? "shifted-dashboard" : ""}`}>
        {/* ...rest of your code... */}

        <div className="container mx-auto px-24 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-700">User Management</h1>
            <a href="/recruiter/addemployee">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded">
                Add User
              </button>
            </a>
          </div>
          <table className="table-auto w-full text-gray-800">
            <thead className="bg-blue-200">
              <tr>
                <th className="px-4 py-2 border-2 border-blue-500">Name</th>
                <th className="px-4 py-2 border-2 border-blue-500">Phone No</th>
                <th className="px-4 py-2 border-2 border-blue-500">Designation</th>
                <th className="px-4 py-2 border-2 border-blue-500">Email</th>
                <th className="px-4 py-2 border-2 border-blue-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="text-center border-b border-blue-200">
                  <td className="px-4 py-2 border-2 border-blue-500">{user.firstName} {user.lastName}</td>

                  <td className="px-4 py-2 border-2 border-blue-500">{user.phoneNo}</td>
                  <td className="px-4 py-2 border-2 border-blue-500">{user.designation}</td>
                  <td className="px-4 py-2 border-2 border-blue-500">{user.email}</td>
                  <td className="px-4 py-2 border-2 border-blue-500">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => console.log('Edit user')}>
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-900" onClick={() => deleteUser(user.id)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UserManagement;