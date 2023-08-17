import React from 'react';

const ProfessionalDetails = () => {
    return (
        <div className='px-3 py-4 border-2 border-slate-300 rounded-3xl grid grid-cols-12 gap-2 items-center'>
            <div className="col-span-10 pr-3">
                <h3 className='text-slate-900 font-medium text-base'>Professional Details</h3>
                <p className=' text-slate-700 text-sm'>This are the professional details shown to users in the app.</p>
            </div>
            <div className="col-span-2">
                <img src="../../../public/images/Stars.png" alt="" />
            </div>
        </div>
    );
};

export default ProfessionalDetails;