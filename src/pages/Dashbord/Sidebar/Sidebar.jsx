import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='col-span-0 hidden md:col-span-2 lg:col-span-2 min-h-screen md:flex lg:flex flex-col items-center pt-4'>
            <div className="flex flex-col gap-2">
                <Link className='border-2 rounded-lg border-slate-400 bg-transparent w-[183px] h-[47px] flex items-center justify-center text-slate-800'>Dashboard</Link>
                <div className="flex flex-col ">
                    <div className='flex items-center'>
                        <BiChevronRight /><Link className='hover:border-2 hover:rounded-lg hover:border-slate-400 bg-transparent w-[163px] h-[47px] flex items-center justify-center text-slate-800'>My Profile</Link>
                    </div>
                    <div className='flex items-center'>
                        <BiChevronRight /><Link to='/connections' className='hover:border-2 hover:rounded-lg hover:border-slate-400 bg-transparent w-[163px] h-[47px] flex items-center justify-center text-slate-800'>My Connections</Link>
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-auto'>
                <Link className='hover:border-2 hover:rounded-lg hover:border-slate-400 bg-transparent w-[163px] h-[47px] flex items-center justify-center text-slate-800'>Log Out</Link>
            </div>
        </div>
    );
};

export default Sidebar;