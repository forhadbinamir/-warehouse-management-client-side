import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    // console.log(item)
    const navigate = useNavigate()


    const handleDeliverSup = (id) => {
        navigate(`/deliver/${id}`)
    }
    const { name, image, price, supplierName, quantity, description, _id } = item
    return (
        <div>
            <div className='shadow p-3 rounded h-[550px] relative'>
                <img className='w-[200px] h-[200px]' src={image} alt="" />
                <h2>{name}</h2>
                <h5>Price: <span className='text-yellow-400'>{price}</span> </h5>
                <h5>Quantity:<span className='text-yellow-400'>{quantity}</span></h5>
                <p>{description.slice(0, 150)}</p>
                <h4>Supplier:{supplierName}</h4>
                <div className='text-center w-100 absolute bottom-5 '>
                    <button onClick={() => handleDeliverSup(item._id)} className='bg-yellow-400 mr-6 py-2 px-3 rounded font-bold '>Update</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;