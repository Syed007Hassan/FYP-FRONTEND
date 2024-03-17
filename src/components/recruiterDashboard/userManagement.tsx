"use client"
import React, { useState } from 'react';

const UserManagementDashboard = () => {
  // Sample user data with assigned tasks (replace with your actual data)
  const initialUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      tasks: ['Task 1', 'Task 2']
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      tasks: ['Task 3', 'Task 4']
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      tasks: ['Task 5', 'Task 6']
    },
  ];

  const [users, setUsers] = useState(initialUsers);

  // Function to delete a user
  const deleteUser = (userId: any) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto px-4 py-8">

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tasks</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <ul>
                  {user.tasks.map((task, index) => (
                    <li key={index} className="text-sm">{task}</li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to add a new user */}
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add User
      </button>
    </div>
  );
};

export default UserManagementDashboard;
