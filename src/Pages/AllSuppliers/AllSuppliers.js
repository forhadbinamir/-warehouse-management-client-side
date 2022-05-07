import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AllSuplier.css'
const AllSuppliers = () => {
    const [suppliers, setSuppliers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/suppliers')
            .then(res => res.json())
            .then(data => setSuppliers(data))
    }, [])

    const handleDeleteSupplier = id => {
        const proceed = window.confirm('Delete Supplier')
        if (proceed) {
            // console.log('delete itams', id)
            const url = `http://localhost:5000/suppliers/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(del => {
                    console.log('success', del)
                    if (del.deletedCount > 0) {
                        toast('Successfully delete supplier')
                        const remaining = suppliers.filter(sup => sup._id !== id)
                        setSuppliers(remaining)
                    }
                })
        }
    }
    return (
        <div className='container text-center my-3 overflow-x-auto relative'>
            <h2 className='text-emerald-800 uppercase'>All Suppliers : {suppliers.length}</h2>
            <table className='border'>
                <thead>
                    <tr>
                        <th>Lenth</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
                        <th>Id</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        suppliers.map(supplier => <tr
                            key={supplier._id}
                        >
                            <td>{suppliers.indexOf(supplier) + 1}</td>
                            <td>{supplier.name}</td>
                            <td>{supplier.price}</td>
                            <td>{supplier.quantity}</td>
                            <td>{supplier.supplierName}</td>
                            <td>{supplier._id}</td>
                            <td className='bg-red-500 text-yellow-100'><button onClick={() => handleDeleteSupplier(supplier._id)} className='font-bold'>Delete</button></td>
                            <td><Link to={`/update/${supplier._id}`} className='bg-gray-400 no-underline'>Update</Link></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSuppliers;