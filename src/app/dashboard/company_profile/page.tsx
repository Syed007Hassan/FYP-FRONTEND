"use client";
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useGetUserByEmailQuery } from "@/redux/services/User/getUserApi";
import { getSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetCompanyQuery } from '@/redux/services/Company/getCompanyApi';
import { updateCompany } from '@/redux/services/Company/companyAction';
import { redirect } from 'next/navigation';
import Alert from '@/components/Alert';

interface User {
    data: any; // Define the data property as any type
}


const Page = () => {

    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [companyPhoneNum, setCompanyPhone] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [companyId, setCompanyId] = useState(0);
    const [decodedData, setDecodedData] = useState(null);

    const { success } = useAppSelector((state) => state.companyReducer);
    const dispatch = useAppDispatch();

    const { data, error, isLoading } = useGetCompanyQuery({ id: companyId });
    
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
            console.log(decodedData);
            setCompanyId(decodedData?.companyId);

        }


        parseJwt();

    }
    , []);

    useEffect(() => {
        const newUser: User = {
            data: data,
        }
        
        setCompanyName(newUser?.data?.data?.companyName || '');
        setCompanyAddress(newUser?.data?.data?.companyAddress || '');
        setCompanyPhone(newUser?.data?.data?.companyPhone || '');
        setCompanyEmail(newUser?.data?.data?.companyEmail || '');
        setCompanyWebsite(newUser?.data?.data?.companyWebsite || '');
    
    }, [data]);

    const handleSubmit = (event: any) => {
        // event.preventDefault();

        const companyPhone = parseInt(companyPhoneNum);
        const datas = {
            companyId,
            companyName,
            companyAddress,
            companyPhone,
            companyEmail,
            companyWebsite,
        }
        datas.companyEmail = datas.companyEmail.toLowerCase();
        console.log(datas);
        dispatch(updateCompany(datas));
        // update success
        console.log(success);
        redirect("/dashboard");


    };

    const handleClick = (event: any) => {

        const newUser: User = {
            data: data,
        }

        if (newUser?.data) {
            setCompanyName(newUser?.data?.data?.companyName || '');
            setCompanyAddress(newUser?.data?.data?.companyAddress || '');
            setCompanyPhone(newUser?.data?.data?.companyPhone || '');
            setCompanyEmail(newUser?.data?.data?.companyEmail || '');
            setCompanyWebsite(newUser?.data?.data?.companyWebsite || '');
        }
    }


    return (
        <div className=" min-h-screen justify-center">
            <div className="grid grid-rows-1 grid-flow-col">
                <div className='pt-6 pr-20 pl-10 pb-16'>
                    <div className="pr-20 pl-20">
                        <h1 className=" text-blue-500 mb-4">Syncflow recruitment</h1>
                        <h1 className="text-4xl text-blue-900 pt-20">Company Profile</h1>
                        {success && <Alert message="Update success" />}
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className='grid grid-rows-1 grid-flow-col'>
                                    <div className='pr-4'>
                                        <TextField
                                            required
                                            fullWidth
                                            id="companyName"
                                            label="companyName"
                                            name="companyName"
                                            autoComplete="given-name"
                                            variant="outlined"
                                            size="small"
                                            value={companyName}
                                            onChange={(e) => setCompanyName(e.target.value)}
                                        />
                                    </div>
                                    <div className='pl-4'>
                                        <TextField
                                            required
                                            fullWidth
                                            id="companyAddress"
                                            label="companyAddress"
                                            name="companyAddress"
                                            autoComplete="family-name"
                                            variant="outlined"
                                            size="small"
                                            value={companyAddress}
                                            onChange={(e) => setCompanyAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-rows-1 grid-flow-col pt-10 pb-10'>
                                    <div className='pr-4'>
                                        <TextField
                                            required
                                            fullWidth
                                            id="companyWebsite"
                                            label="companyWebsite"
                                            name="companyWebsite"
                                            autoComplete="companyWebsite"
                                            variant="outlined"
                                            size="small"
                                            value={companyWebsite}
                                            onChange={(e) => setCompanyWebsite(e.target.value)}
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
                                            value={companyPhoneNum}
                                            onChange={(e) => setCompanyPhone(e.target.value)}
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
                                            value={companyEmail}
                                            onChange={(e) => setCompanyEmail(e.target.value)}
                                        />
                                </div>

                            </div>
                            <div className='grid grid-rows-1 grid-flow-col pt-2 pb-2'>
                            <div className='flex justify-end'>
                                <button
                                type="button"
                                className=" flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={handleClick}
                                >
                                Refresh
                                </button>
                            </div>
                            <div className='flex justify-end'>
                                <button
                                type="submit"
                                className=" flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                Update
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='pl-10 pb-6 pr-10 flex' style={{ width: '650px', height: '630px' }}>
                    <Image src="/landing-pic.png" alt="Picture of the author" width={500} height={500} className="object-cover w-full h-full"/>
                </div>
            </div>
        </div>
    )
}

export default Page;