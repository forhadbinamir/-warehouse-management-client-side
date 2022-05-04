import React from 'react';

const InventoryItem = ({ item }) => {
    console.log(item)
    const { name, image, price, supplierName, quantity, description, id } = item
    return (
        <div>
            <div className='shadow p-3 rounded h-[550px] relative'>
                <img className='w-[200px] h-[200px]' src={image} alt="" />
                <h2>{name}</h2>
                <h5>Price: <span className='text-yellow-400'>{price}</span> </h5>
                <h5>Quantity:<span className='text-yellow-400'>{quantity}</span></h5>
                <p>{description.slice(0, 150)}</p>
                <h4>Supplier:{supplierName}</h4>
                <div className='flex justify-between absolute bottom-5 '>
                    <button className='bg-yellow-400 mr-6 py-2 px-3 rounded font-bold '>Delivery</button>
                    <button className='bg-gray-400 py-2 px-3 rounded font-bold'>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;