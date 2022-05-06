import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.init';
import { toast } from 'react-toastify';

const DeliverSup = () => {
    const { supplierId } = useParams()
    const [deliver, setDeliver] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/suppliers/${supplierId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDeliver(data))
    }, [supplierId])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const person = {
            user: user?.displayName,
            email: user?.email,
            service: supplierId,
            supplierName: deliver?.supplierName,
            address: user?.address,
            price: deliver?.price
        }
        const urlLink = `http://localhost:5000/person`
        fetch(urlLink, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(person)

        })
            .then(res => res.json())
            .then(response => {
                const userId = response.insertedId
                console.log(userId)
                if (userId) {
                    toast('Your deliver is successfully completed')
                }
            })
        // axios.post('http://localhost:5000/person', person)
        //     .then(response => {
        //         console.log(response)
        //     })
        console.log(data)
    };

    return (
        <div className='w-50 mx-auto border p-5 m-5 rounded-lg'>
            <h2> Supplier Name:{deliver.supplierName} </h2>
            <p> Supplier id:{supplierId} </p>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <input className='border mb-2 p-2 rounded w-100' value={user?.displayName} placeholder='User Name' {...register("name", { required: true, maxLength: 20 })} /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={user?.email} placeholder='Email' {...register("email")} readOnly /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={deliver?.supplierName} placeholder='Supplier Name' {...register("supplierName")} readOnly /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={user?.address} placeholder='Address' {...register("address")} /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={deliver?.price} placeholder='Price' type="number" {...register("price")} /> <br />
                <input className='border mb-2 p-2 rounded w-100' value={deliver?.quantity} placeholder='Quantity' type="number" {...register("quantity")} /> <br />
                <input className='border mb-2 p-2 rounded  w-100 bg-gray-300' type="submit" value='Deliver' />
            </form>
        </div>
    );
}

export default DeliverSup;