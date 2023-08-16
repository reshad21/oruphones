import React from 'react';
import Header from '../../../components/Header/Header';
import Details from '../../../components/Profile/Details';
import Upload from '../../../components/Profile/Upload';
const Content = () => {
    return (
        <div className='col-span-12 md:col-span-10 lg:col-span-10'>
            <Header />
            <div className="content bg-slate-100 min-h-full w-full pt-5 relative">
                <div className="bg-[#1E2875] text-white rounded-md pb-40 pt-2 px-4">
                    <p>My Profile</p>
                </div>
                <div className="px-7 py-10 rounded-xl bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-36 w-[90%] absolute left-[50%] top-20 translate-x-[-50%]">
                    <div className="">
                        <Upload />
                        <Details />
                    </div>
                    <div className="">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugit officia! Exercitationem numquam dolorum eligendi, nam facere voluptas eos officia laborum ab. Itaque, laborum odit molestiae velit libero in nobis quidem nulla? Soluta ducimus debitis explicabo mollitia, ut enim, esse id voluptate dolore rem facilis! In voluptatibus officia, debitis accusantium maxime nihil voluptates natus, consectetur, temporibus id facere saepe dicta mollitia ex quidem optio. Laudantium sapiente dolore consectetur recusandae quaerat repudiandae eum doloribus voluptatibus? Dolorem blanditiis tenetur inventore sit et voluptatem veritatis dignissimos consequatur ratione asperiores laboriosam praesentium provident, repellendus beatae aut, nam explicabo? Dolores quod distinctio sint necessitatibus animi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;