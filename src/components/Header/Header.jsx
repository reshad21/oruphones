import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <div className="navber w-full p-3">
                <div className="hidden md:flex lg:flex items-center w-fit ml-auto">
                    <span><IoMdNotificationsOutline size={25} /></span>
                    <div className='border-2 border-slate-200 rounded-lg flex items-center ml-3'>
                        <div className="flex pr-4 items-center justify-center py-1">
                            <img src="/public/images/image 11.png" alt="" />
                            <div className="flex flex-col justify-center gap-4">
                                <span className='text-xs leading-[0]'>welcome back,</span>
                                <p className=' text-base leading-[0]'>vishnu Swaroop</p>
                            </div>
                        </div>

                        <div className="">
                            <span><FiChevronDown size={25} /></span>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden md:hidden block relative">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Link onClick={() => setToggle(!toggle)}><img src="../../../public/images/menu.png" alt="" /></Link>
                            <Link><img src="../../../public/images/image 13.png" alt="" /></Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <span><IoMdNotificationsOutline size={25} /></span>
                            <Link><img src="../../../public/images/image 11.png" alt="" /></Link>
                        </div>
                    </div>
                    {
                        toggle &&
                        <div className="px-3 py-5 absolute top-8 left-0 w-[200px] border-2 border-slate-400 rounded-xl z-10 bg-slate-700 flex flex-col justify-center items-center gap-2">
                            <Link to="/" className='py-2 px-2 border-2 bg-slate-100 w-full rounded-md text-slate-900'>My Profile</Link>
                            <Link to="connections" className='py-3 px-2 border-2 bg-slate-100 w-full rounded-md text-slate-900'>My Connections</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;