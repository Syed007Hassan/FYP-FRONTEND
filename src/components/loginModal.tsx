// LoginModal.js
import { useState } from 'react';

const LoginModal = () => {
  const [userType, setUserType] = useState('recruiter'); // Default to recruiter

  // const handleLogin = () => {
  //   // Add your login logic here based on userType
  //   // For now, let's just close the modal
  //   onClose();
  // };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <label className="block mb-4">
          User Type:
          <select
            className="border p-2 w-full"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="recruiter">Recruiter</option>
            <option value="applicant">Applicant</option>
          </select>
        </label>
        {/* <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default LoginModal;
