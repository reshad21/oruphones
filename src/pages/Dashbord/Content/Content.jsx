import React from 'react';
import ProfessionalDetails from '../../../components/Activity/ProfessionalDetails';
import Header from '../../../components/Header/Header';
import About from '../../../components/Profile/About';
import Certification from '../../../components/Profile/Certification';
import Details from '../../../components/Profile/Details';
import Skills from '../../../components/Profile/Skills';
import Upload from '../../../components/Profile/Upload';
const Content = () => {
    return (
        <div className='col-span-12 md:col-span-10 lg:col-span-10'>
            <Header />
            <div className="content bg-slate-100 min-h-full w-full pt-5 pb-5 clear-both relative">
                <div className="bg-[#1E2875] text-white rounded-md pb-40 pt-2 px-4">
                    <p>My Profile</p>
                </div>
                <div className="px-7 md:px-7 lg:px-10 pt-10 pb-7 rounded-xl bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-2 lg:gap-20 shadow-md shadow-slate-500 mb-10 mx-auto w-[90%] mt-[-100px]">
                    <div className="">
                        <Upload />
                        <Details />
                        <About />
                        <Skills />
                    </div>
                    <div className="">
                        <ProfessionalDetails />
                        <Certification />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;