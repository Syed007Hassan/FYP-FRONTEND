import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaPlus, FaTasks } from 'react-icons/fa';

const UserManagementDashboard = () => {
  const initialUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', tasks: ['Task 1', 'Task 2'] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', tasks: ['Task 3', 'Task 4'] },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', tasks: ['Task 5', 'Task 6'] },
  ];

  const [users, setUsers] = useState(initialUsers);

  const deleteUser = (userId: any) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {users.map(user => (
        <div key={user.id} className="rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 border-4 border-purple-200 bg-purple-50 mb-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold mb-2 inline">{user.name} <FaTasks className="inline text-green-500" /></h2>
            <p className="mb-2 inline ml-4"><strong>Email:</strong> {user.email}</p>
          </div>
          <div>
            <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => console.log('Edit user')}>
              <FaEdit />
            </button>
            <button className="text-red-600 hover:text-red-900" onClick={() => deleteUser(user.id)}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <FaPlus /> Add User
      </button>
    </div>
  );
};

export default UserManagementDashboard;