import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Header = () => {
    return (
        <div>
            <div className="navber w-full p-3">
                <div className="flex items-center w-fit ml-auto">
                    <span><IoMdNotificationsOutline size={25} /></span>
                    <div className='border-2 border-slate-200 rounded-lg flex items-center ml-3'>
                        <div className="flex pr-4 items-center justify-center py-1">
                            <img src="/public/images/image 11.png" alt="" />
                            <div className="flex flex-col justify-center gap-4">
                                <span className='text-xs leading-[0]'>welcome back,</span>
                                <p className=' text-base leading-[0]'>vishnu shoroup</p>
                            </div>
                        </div>

                        <div className="">
                            <span><FiChevronDown size={25} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;