import React from 'react';
import ConnectionCard from '../../../components/Card/ConnectionCard';
import Header from '../../../components/Header/Header';

const Connections = () => {
    return (
        <>
            <div className="">
                <Header />
                <div className="content bg-slate-100 min-h-full w-full pt-5 pb-5 clear-both relative pl-4 pr-4">
                    <div className="bg-[#1E2875] text-white rounded-md p-5 px-4 mb-9">
                        <p>My Connections</p>
                    </div>
                    <div className="grid grid-cols-3 gap-9">
                        <ConnectionCard />
                        <ConnectionCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Connections;