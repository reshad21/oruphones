import React from 'react';

const ProfessionalDetails = () => {
    return (
        <div className='px-3 py-4 border-2 border-slate-300 rounded-lg grid grid-cols-12 gap-2 items-center'>
            <div className="col-span-10 pr-3">
                <h3>Professional Details</h3>
                <p>This are the professional details shown to users in the app.</p>
            </div>
            <div className="col-span-2">
                <img src="../../../public/images/Stars.png" alt="" />
            </div>
        </div>
    );
};

export default ProfessionalDetails;