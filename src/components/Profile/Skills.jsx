import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div>
            <div className="p-5 border-2 border-slate-300 rounded-md mb-5">
                <div className="flex justify-between items-center mb-2">
                    <h3 className='text-[#222222] font-bold'>Skills</h3>
                    <Link className='bg-[#F0EFFA] text-[12.67px] px-5 py-2 rounded-2xl text-[#222]'>Edit</Link>
                </div>
                <div className="">
                    <h2 className='text-[#222222]'>Next.js</h2>
                    <h2 className='text-[#222222]'>typescript</h2>
                </div>
            </div>
        </div>
    );
};

export default Skills;