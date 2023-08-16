import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <div>

            <div className="p-5 border-2 border-slate-300 rounded-md mb-5">

                <div className="flex justify-between items-end mb-5">
                    <div className="flex flex-col">
                        <span className='text-[10.67px] font-medium text-[#1F1F1FB2]'>Your Name</span>
                        <span className='text-[10.67px] font-medium text-[#222222]'>Vishnu Swaroop</span>
                    </div>
                    <div className="">
                        <Link className='bg-[#F0EFFA] text-[12.67px] px-5 py-2 rounded-2xl text-[#222]'>Edit</Link>
                    </div>
                </div>

                <div className="flex justify-between items-end mb-5">
                    <div className="flex flex-col">
                        <span className='text-[10.67px] font-medium text-[#1F1F1FB2]'>Email</span>
                        <span className='text-[10.67px] font-medium text-[#222222]'>vishnu@oruphones.com</span>
                    </div>
                    <div className="">
                        <Link className='bg-[#F0EFFA] text-[12.67px] px-5 py-2 rounded-2xl text-[#222]'>Edit</Link>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className='text-[10.67px] font-medium text-[#1F1F1FB2]'>Phone Number</span>
                        <span className='text-[10.67px] font-medium text-[#222222]'>+91 49652845732</span>
                    </div>
                    <div className="">
                        <Link className='bg-[#F0EFFA] text-[12.67px] px-5 py-2 rounded-2xl text-[#222]'>Edit</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;