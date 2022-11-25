import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between bg-[#404040] py-10 px-6'>
            <div >
                <h1 className='text-2xl text-white'><span className='text-2xl font-bold'>Shop</span>Card</h1>
            </div>
            <ul className='flex'>
                <li className='mx-2'>About Us</li>
                <li className='mx-2'>Contact</li>
                <li className='mx-2'>Help</li>
            </ul>
            <div>
                <h1>English</h1>
            </div>
        </div>
    );
};

export default Footer;