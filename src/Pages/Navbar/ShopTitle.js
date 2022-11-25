import React from 'react';
import profile from '../../Asset/image/icons8-male-user-24.png'

const ShopTitle = () => {
    return (
        <div className='mt-2'>
            <div className='flex justify-between'>
                <h1 className='text-2xl text-white'><span className='text-2xl font-bold'>Shop</span>Card</h1>
                <div className='flex'>
                    <span><img className=' rounded-[28px]' src={profile} alt="" /></span>
                    <h1 className='text-base ml-2'>Sign in</h1>
                </div>                             
            </div>
        </div>
    );
};

export default ShopTitle;