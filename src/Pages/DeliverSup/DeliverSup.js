import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.init';
const DeliverSup = () => {
    const { supplierId } = useParams()
    const [deliver, setDeliver] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/suppliers/${supplierId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setDeliver(data))
    }, [user])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-50 mx-auto border p-5 m-5 rounded-lg'>
            <h2> Supplier Name:{deliver.supplierName} </h2>
            <p> Supplier id:{supplierId} </p>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <input className='border mb-2 p-2 rounded w-100' value={user?.displayName} placeholder='User Name' {...register("name", { required: true, maxLength: 20 })} readOnly disabled /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={user?.email} placeholder='Email' {...register("email")} readOnly disabled /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={deliver?.supplierName} placeholder='Supplier Name' {...register("supplierName")} readOnly disabled /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={user?.address} placeholder='Address' {...register("address")} /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={deliver?.price} placeholder='Price' type="number" {...register("price", { min: 18, max: 99 })} readOnly disabled /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={deliver?.quantity} placeholder='Quantity' type="number" {...register("quantity", { min: 18, max: 99 })} /> <br />
                <input className='border mb-2 p-2 rounded  w-100 bg-gray-300' type="submit" value='Deliver' />
            </form>
        </div>
    );
}

export default DeliverSup;