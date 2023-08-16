import React from 'react';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-2">
                <Sidebar />
                <Content />
            </div>
        </>
    );
};

export default Home;