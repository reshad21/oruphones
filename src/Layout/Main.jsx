import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Dashbord/Sidebar/Sidebar';

const Main = () => {
    return (
        <div className='grid grid-cols-12 gap-2'>
            <Sidebar />
            <div className='col-span-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;