import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
    return (
        <div>
            <div className="flex justify-between my-4">
                <h3 className='text-slate-900 font-medium text-base'>Education</h3>
                <Link className='bg-[#F0EFFA] text-[12.67px] px-5 py-2 rounded-2xl text-[#222]'>Edit</Link>
            </div>
            <div className="px-5 py-4 border-2 border-slate-300 rounded-3xl items-center mb-5">
                <p className='text-slate-800 font-semibold text-xl'>IIT  HYDERABAD</p>
                <div className="flex justify-between items-center py-3">
                    <span className='text-slate-800 font-semibold'>(2020-2014)</span>
                    <span className='text-slate-800 font-semibold'>Btech</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
    );
};

export default Education;