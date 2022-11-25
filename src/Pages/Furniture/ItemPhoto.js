import React from 'react';

const ItemPhoto = ({item}) => {
    const { picture }=item;
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default ItemPhoto;