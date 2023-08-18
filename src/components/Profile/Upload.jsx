import React from 'react';

const Upload = () => {
    return (
        <div>
            <div className="flex justify-between items-center h-fit mb-12">
                <div className="">
                    <img src="../../../../public/images/Ellipse 255 (1).png" alt="" />
                </div>
                <div className="">
                    <label htmlFor="imgs" className='px-8 py-1 bg-[#F0EFFA] rounded-full cursor-pointer text-sm'>Upload Photo</label>
                    <input type="file" id='imgs' className='hidden' />
                </div>
            </div>
        </div>
    );
};

export default Upload;