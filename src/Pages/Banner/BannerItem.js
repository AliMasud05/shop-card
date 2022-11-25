import React from 'react';

const BannerItem = ({item}) => {
    const { name, picture,price,discount,}=item
    return (
        <div className=" ">
            <figure><img className='rounded-lg' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-left">
                    {name}
                    
                </h2>
                
                <div className="flex justify-between ">
                    <div className="badge badge-outline">{price}</div>
                    <div className="badge badge-outline">{discount}%</div>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;