import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <div>
                <img className='w-[300px] py-3' src={logo} alt="" />
            </div>
            <h2 className='text-gray-500'>Journalism Without Fear or Favour</h2>
            <p className=''>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;