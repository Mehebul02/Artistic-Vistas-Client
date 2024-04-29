import React from 'react';
import { CgMail } from 'react-icons/cg';
import { FaPhone } from 'react-icons/fa';

const Navbar2 = () => {
    // bg-[#5434DC]
    return (
        <div className='flex flex-col lg:flex-row items-center bg-gradient-to-r p-3 from-[#5434DC] to-[#5691EE]'>
            <div className='flex items-center gap-4 ml-4 cursor-pointer'>
            <FaPhone className='text-xl text-white text-center'></FaPhone>
            <h1 className='text-xl text-white '>01642287450</h1>
            </div>
            <div className='flex items-center gap-4 ml-4 cursor-pointer'>
            <CgMail className='text-2xl text-white text-center'></CgMail>
            <h1 className='text-xl text-white '>mehebul2122@gmail.com</h1>
            </div>
        </div>
    );
};

export default Navbar2;