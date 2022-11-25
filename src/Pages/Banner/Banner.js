import React, { useEffect, useState } from 'react';
import BannerItem from './BannerItem';

const Banner = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetch('fakeApi.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    console.log(items);
    return (
        <div>
            
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className='grid grid-cols-3 gap-5'>
                        {
                          items.slice(0,6).map(item=><BannerItem
                          key={item._id}
                          item={item}
                          ></BannerItem>)
                        }
                    </div>
                    <div>
                        <h1 className="text-8xl font-bold">We picked some <span className='text-red-500'>cool things</span> for you!</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;