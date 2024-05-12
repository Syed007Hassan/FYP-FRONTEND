"use client";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import "/src/styles/sidebar.css";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  useGetUsersQuery,
  resetSuccess,
} from "@/redux/services/Recruiter/recruiterAction";
import Recruiter, { ApiResponse } from "@/types/recruiter";
import {
  DeleteRegisteredEmployee,
  UpdateRegisteredEmployee,
} from "@/redux/services/Recruiter/recruiterAction";
import Cookies from "js-cookie";
import { parseJwt } from "@/lib/Constants";
import Toast, { ToastProps } from "@/components/Toast";

const UserManagement = () => {
  const [toastProps, setToastProps] = useState<ToastProps | null>(null);
  const [token, setToken] = useState<string>("");
  const [companyId, setCompanyId] = useState<string>("");
  const [userData, setUserData] = useState<ApiResponse>();
  const [users, setUsers] = useState<Recruiter[]>([]);
  const [email, setEmail] = useState("");
  const [decodedData, setDecodedData] = useState(null);
  const { data, error, isLoading, refetch } = useGetUsersQuery({
    companyId: companyId,
  });
  const [recruiterId, setRecruiterId] = useState<string>("");
  const [employeeId, setEmployeeId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const { success } = useAppSelector((state: RootState) => state.userReducer);

  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.sidebarState
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    console.log("userData", data);
    setUserData(data);
  }, [data]);

  useEffect(() => {
    const parseJwtFromSession = async () => {
      // const session = await getSession();
      const session = Cookies.get("token");
      if (!session) {
        throw new Error("Invalid session");
      }
      const jwt: string = session.toString();
      const decodedData = parseJwt(jwt);
      setDecodedData(decodedData);
      setEmail(decodedData?.email || "");
      setCompanyId(decodedData?.companyId || "");
      setRecruiterId(decodedData?.recruiterId || "");
      setToken(jwt);
    };

    parseJwtFromSession();
  }, []);

  useEffect(() => {
    if (toastProps) {
      const timer = setTimeout(() => {
        setToastProps(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [toastProps]);

  const handledelete = async ({ employeeId }: { employeeId: string }) => {
    try {
      await dispatch(
        DeleteRegisteredEmployee({ employeeId, recruiterId, token })
      );
      setToastProps({
        type: "success",
        message: "Employee deleted successfully",
      });
      // setDispatchSuccess(true);
      // refetch();
    } catch (error) {
      console.error("Error:", error);
      // handle error here
      setToastProps({
        type: "error",
        message: "Failed to delete employee",
      });
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(resetSuccess());
      refetch();
    }
  }, [success]);

  const handleUpdate = async ({ employeeId }: { employeeId: string }) => {
    // e.preventDefault();

    const temp_data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      designation: designation,
    };

    try {
      await dispatch(
        UpdateRegisteredEmployee({ temp_data, employeeId, recruiterId, token })
      );
      setToastProps({
        type: "success",
        message: "Employee updated successfully",
      });
      refetch();
    } catch (error) {
      setToastProps({
        type: "error",
        message: "Failed to update employee",
      });
    }
  };

  return (
    <div
      className={`content overflow-hidden ${
        isSidebarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      {toastProps && <Toast {...toastProps} />}
      <div
        className={`content overflow-x-hidden ${
          isSidebarOpen ? "shifted-dashboard" : ""
        }`}
      >
        <div className="container mx-auto px-24 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-700">
              User Management
            </h1>
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
                <th className="px-4 py-2 border-2 border-blue-500">
                  Designation
                </th>
                <th className="px-4 py-2 border-2 border-blue-500">Email</th>
                <th className="px-4 py-2 border-2 border-blue-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData?.data?.map((user, index) => (
                <tr
                  key={index}
                  className="text-center border-b border-blue-200"
                >
                  <td className="px-4 py-2 border-2 border-blue-500">
                    {user?.name}
                  </td>

                  <td className="px-4 py-2 border-2 border-blue-500">
                    {user?.phone}
                  </td>
                  <td className="px-4 py-2 border-2 border-blue-500">
                    {user?.designation}
                  </td>
                  <td className="px-4 py-2 border-2 border-blue-500">
                    {user?.email}
                  </td>
                  <td className="px-4 py-2 border-2 border-blue-500">
                    <button
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                      data-modal-target="update"
                      data-modal-toggle="update"
                      onClick={() => openModal()}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() =>
                        handledelete({
                          employeeId: user?.recruiterId
                            ? user.recruiterId.toString()
                            : "",
                        })
                      }
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen &&
        userData?.data?.map((user, index) => (
          <div
            key={index}
            id="select-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Update Employee Details
                  </h3>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="select-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  {/* write code here for Update Employee Details */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-1">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1">
                      <div className="block">
                        <label className="text-gray-700">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-input mt-1 block w-full"
                        />
                      </div>
                      <div className="block">
                        <label className="text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-input mt-1 block w-full"
                        />
                      </div>
                      <div className="block">
                        <label className="text-gray-700">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-input mt-1 block w-full"
                        />
                      </div>
                      <div className="block">
                        <label className="text-gray-700">Designation</label>
                        <input
                          type="text"
                          name="designation"
                          id="designation"
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                          className="form-input mt-1 block w-full"
                        />
                      </div>
                      <div className="block">
                        <label className="text-gray-700">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-input mt-1 block w-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        onClick={() =>
                          handleUpdate({
                            employeeId: user?.recruiterId
                              ? user.recruiterId.toString()
                              : "",
                          })
                        }
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default UserManagement;

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
