import React from 'react';

const ConnectionCard = ({ data }) => {
    // console.log(data?.btnText);
    const { name, title, company, img, btnText } = data || {};
    return (
        <div className='p-2 border-2 border-slate-400 rounded-lg'>
            <div className='flex justify-between w-full items-center'>
                <div className="">
                    <h3 className='text-slate-900 font-semibold'>{name}</h3>
                    <div className="my-4 text-[13px]">
                        <p>{title}</p>
                        <span className=''>@ {company}</span>
                    </div>
                    <button className='bg-[#BAB6EB] rounded-3xl p-0 px-2 text-sm'>{btnText}</button>
                </div>
                <div className="w-[50%]">
                    <img src={img} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default ConnectionCard;