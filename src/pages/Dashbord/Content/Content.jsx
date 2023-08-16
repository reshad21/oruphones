import React from 'react';
import Header from '../../../components/Header/Header';
import About from '../../../components/Profile/About';
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
                <div className="px-7 pt-10 pb-7 rounded-xl bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-36 shadow-md shadow-slate-500 mb-10 mx-auto w-[90%] mt-[-100px]">
                    <div className="">
                        <Upload />
                        <Details />
                        <About />
                        <Skills />
                    </div>
                    <div className="">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugit officia! Exercitationem numquam dolorum eligendi, nam facere voluptas eos officia laborum ab. Itaque, laborum odit molestiae velit libero in nobis quidem nulla? Soluta ducimus debitis explicabo mollitia, ut enim, esse id voluptate dolore rem facilis! In voluptatibus officia, debitis accusantium maxime nihil voluptates natus, consectetur, temporibus id facere saepe dicta mollitia ex quidem optio. Laudantium sapiente dolore consectetur recusandae quaerat repudiandae eum doloribus voluptatibus? Dolorem blanditiis tenetur inventore sit et voluptatem veritatis dignissimos consequatur ratione asperiores laboriosam praesentium provident, repellendus beatae aut, nam explicabo? Dolores quod distinctio sint necessitatibus animi.</p>
                    </div>
                </div>
                {/* <div className="clear-both pb-5"></div> */}
            </div>
        </div>
    );
};

export default Content;