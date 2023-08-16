import React from 'react';

const Upload = () => {
    return (
        <div>
            <div className="flex justify-between items-center h-fit">
                <div className="">
                    <img src="../../../../public/images/Ellipse 255.png" alt="" />
                </div>
                <div className="">
                    <label htmlFor="imgs" className='px-8 py-1 bg-[#F0EFFA] rounded-full'>Upload Photo</label>
                    <input type="file" id='imgs' className='hidden' />
                </div>
            </div>
        </div>
    );
};

export default Upload;