import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <div>
            <div className="flex justify-between my-4">
                <h3 className='text-slate-900 font-medium text-base'>Experience</h3>
                <Link className='bg-[#F0EFFA] text-[12.67px] px-5 py-2 rounded-2xl text-[#222]'>Edit</Link>
            </div>
            <div className="pl-7 py-4 border-2 border-slate-300 rounded-3xl grid grid-cols-12 gap-2 items-center mb-5">
                <div className="col-span-9">
                    <div className="flex gap-9 items-center">
                        <span className='text-slate-900 font-medium text-base'>7 Years (2014-2021)</span>
                        <span className='text-slate-900 font-medium text-base'>Full-time</span>
                    </div>
                    <div className="flex gap-9 items-center">
                        <span className='text-slate-600 text-sm'>Oruphones</span>
                        <span className='text-slate-600 text-sm'>--Full Stack Developer</span>
                    </div>
                </div>
                <div className="col-span-3">
                    <img src="../../../public/images/image 13.png" alt="" className='w-[90px]' />
                </div>
            </div>
            <div className="pl-7 py-4 border-2 border-slate-300 rounded-3xl grid grid-cols-12 gap-2 items-center">
                <div className="col-span-9">
                    <div className="flex gap-9 items-center">
                        <span className='text-slate-900 font-medium text-base'>7 Years (2014-2021)</span>
                        <span className='text-slate-900 font-medium text-base'>Full-time</span>
                    </div>
                    <div className="flex gap-9 items-center">
                        <span className='text-slate-600 text-sm'>Oruphones</span>
                        <span className='text-slate-600 text-sm'>--Full Stack Developer</span>
                    </div>
                </div>
                <div className="col-span-3">
                    <img src="../../../public/images/image 13.png" alt="" className='w-[90px]' />
                </div>
            </div>
        </div>
    );
};

export default Experience;