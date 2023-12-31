'use client'

import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


const Signout = () => {

    const Router = useRouter();

  useEffect(() => {
    Cookies.remove('token');
    Router.push('/login');
  }, []);

  return <div>Signing out...</div>;
};

export default Signout;
