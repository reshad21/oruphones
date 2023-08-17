import React from 'react';
import { Link } from 'react-router-dom';

const Certification = () => {
    return (
        <div>
            <div className="flex justify-between my-4">
                <h3 className='text-slate-900 font-medium text-base'>Certifications</h3>
                <Link className='bg-[#F0EFFA] text-[12.67px] px-5 py-2 rounded-2xl text-[#222]'>Edit</Link>
            </div>
            <div className="px-7 py-2 border-2 border-slate-300 rounded-[40px] grid grid-cols-12 gap-2 items-center">
                <div className="col-span-3">
                    <img src="../../../public/images/Vector.png" alt="" />
                </div>
                <div className="col-span-9">
                    <p className='pl-6'>Python</p>
                    <p>Coding Ninjas</p>
                </div>
            </div>
        </div>
    );
};

export default Certification;