import React, { useEffect, useState } from 'react';
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/suppliers')
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
        </div>
    );
};

export default Inventory;