import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="p-5 border-2 border-slate-300 rounded-md mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className='text-[#222222] font-bold'>About Vishnu</h3>
                    <Link className='bg-[#F0EFFA] text-[12.67px] px-5 py-2 rounded-2xl text-[#222]'>Edit</Link>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur eius aperiam quidem. Vitae rerum a itaque? Sequi, eligendi ex.</p>
            </div>
        </div>
    );
};

export default About;