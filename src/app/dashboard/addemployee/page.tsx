"use client";
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateEmployee } from '@/redux/services/addEmployee/employeeAction';
import { redirect } from 'next/navigation';

const Page = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [designation, setDesignation] = useState('');
    const [phoneNum, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [decodedData, setDecodedData] = useState(null);
    const [companyIdTemp, setCompanyIdTemp] = useState('');

    const { success } = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();



    useEffect(() => {

        const parseJwt = async () => {
            const session = await getSession();
            if (!session || !session?.user || !session?.user.data) {
              throw new Error("Invalid session");
            }
            const jwt: string = session?.user.data.jwt;
            const base64Url = jwt.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedData = JSON.parse(window.atob(base64));
            setDecodedData(decodedData);
            setCompanyIdTemp(decodedData.companyId.toString() || '');
        }

        parseJwt();
    }
    , []);


    const handleSubmit = (event: any) => {
        const name = firstName + " " + lastName;

        const role = "employer";

        if (password !== repeatPassword) {
            alert("Passwords do not match");
            return;
        }
        const companyId = parseInt(companyIdTemp);
        event.preventDefault();
        const phone = parseInt(phoneNum);
        const data = {
            name,
            designation,
            role,
            phone,
            email,
            password,
            companyId,
        }
        console.log(data);
        dispatch(updateEmployee(data));
        redirect("/dashboard");
    };

    return (
        <div className=" min-h-screen justify-center">
            <div className="grid grid-rows-1 grid-flow-col">
                <div className='pt-6 pr-20 pl-10 pb-16'>
                    <div className="pr-20 pl-20">
                        <h1 className=" text-blue-500 mb-4">Syncflow recruitment</h1>
                        <h1 className="text-4xl text-blue-900 pt-20">Add Employee</h1>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className='grid grid-rows-1 grid-flow-col'>
                                    <div className='pr-4'>
                                        <TextField
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            name="firstName"
                                            autoComplete="given-name"
                                            variant="outlined"
                                            size="small"
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className='pl-4'>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                            variant="outlined"
                                            size="small"
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-rows-1 grid-flow-col pt-10 pb-10'>
                                    <div className='pr-4'>
                                        <TextField
                                            required
                                            fullWidth
                                            id="designation"
                                            label="Designation"
                                            name="designation"
                                            autoComplete="designation"
                                            variant="outlined"
                                            size="small"
                                            onChange={(e) => setDesignation(e.target.value)}
                                        />
                                    </div>
                                    <div className='pl-4'>
                                        <TextField
                                            required
                                            fullWidth
                                            id="phone"
                                            label="Phone Number"
                                            name="phone"
                                            autoComplete="tel"
                                            variant="outlined"
                                            size="small"
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div >
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            variant="outlined"
                                            size="small"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                </div>
                                <div className='grid grid-rows-1 grid-flow-col pt-10'>
                                    {/* password and repeat password fields */}
                                    <div className='pr-4'>
                                        <TextField
                                            required
                                            fullWidth
                                            id="password"
                                            label="Password"
                                            name="password"
                                            autoComplete="new-password"
                                            variant="outlined"
                                            size="small"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className='pl-4'>
                                        <TextField
                                            required
                                            fullWidth
                                            id="password"
                                            label="Repeat Password"
                                            name="password"
                                            autoComplete="new-password"
                                            variant="outlined"
                                            size="small"
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <button
                                type="submit"
                                className=" flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                Add Employee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white shadow-lg  p-6">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 uppercase tracking-wide pt-10">
                        Guidelines
                    </h2>
                    <ul className="list-disc list-inside mb-4 pt-10">
                        <li className="font-bold pt-4">Add Employee to give them access to the portal</li>

                        <li className="font-bold pt-4">Employees will have their personalized dashboards</li>

                        <li className="font-bold pt-4">Employees can be assigned to perform specific workflow tasks</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page;