import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        fetch('https://aqueous-crag-40240.herokuapp.com/suppliers')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    const inventorySlice = inventory.slice(0, 6)
    return (
        <div className='w-[90%] mx-auto py-10'>
            <h2 className='text-5xl py-3'>Our Suppliers</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    inventorySlice.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </div>
            <div className='flex justify-end'>
                <Link to='/allsupplier' className='flex no-underline bg-purple-600 justify-center border-2 mt-4 text-black hover:bg-white font-bold py-2 px-3 rounded'>See all Suppliers </Link>
            </div>
        </div>
    );
};

export default Inventory;