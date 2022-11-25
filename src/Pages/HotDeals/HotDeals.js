import React, { useEffect, useState } from 'react';
import BannerItem from '../Banner/BannerItem';

const HotDeals = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('fakeApi.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
  

    return (
        <div>
            <h1 className='text-xl ml-4'>Today’s hot deals</h1>
            <hr className='my-4' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-9'>
                {
                    items.slice(6,11).map(item => <BannerItem
                        key={item._id}
                        item={item}
                    ></BannerItem>)
                }
            </div>
        </div>
    );
};

export default HotDeals;