import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex bg-gray-200 p-2 items-center'>
            <p className='bg-[#D72050] px-3 py-1 text-white'>Latest</p>
             <Marquee pauseOnHover={true} speed={100} className='space-x-5'>
                <Link to="/news">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, neque!</Link>
                <Link to="/news">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, neque!</Link>
                <Link to="/news">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, neque!</Link>
             </Marquee>
        </div>
    );
};

export default LatestNews;