import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='col-span-0 md:col-span-2 lg:col-span-2 min-h-screen hidden lg:flex md:flex flex-col  items-center pt-4'>
            <div className="flex flex-col gap-2">
                <Link className='border-2 rounded-lg border-slate-400 bg-transparent px-10 md:px-4 py-2 flex items-center justify-center text-slate-800'>Dashboard</Link>
                <div className="flex flex-col ">
                    <div className='flex items-center mb-2'>
                        <BiChevronRight />
                        <Link to="/" className='hover:border-2 hover:rounded-lg hover:border-slate-400 bg-transparent px-3 py-2 flex items-center justify-center text-slate-800 text-sm md:text-base'>My Profile</Link>
                    </div>
                    <div className='flex items-center'>
                        <BiChevronRight />
                        <Link to='/connections' className='hover:border-2 hover:rounded-lg hover:border-slate-400 bg-transparent px-3 py-2 flex items-center justify-center text-slate-800 text-sm md:text-base'>My Connections</Link>
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-auto'>
                <Link className='hover:border-2 hover:rounded-lg hover:border-slate-400 bg-transparent px-3 py-2 flex items-center justify-center text-slate-800 text-sm md:text-base'>Log Out</Link>
            </div>
        </div>
    );
};

export default Sidebar;