import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.init';
import { toast } from 'react-toastify';

const DeliverSup = () => {
    const quantityRef = useRef()
    const { supplierId } = useParams()
    const [deliver, setDeliver] = useState({})
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/suppliers/${supplierId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDeliver(data))
    }, [deliver])

    const handleStockSubmit = event => {
        event.preventDefault()
        const previousQuantity = parseInt(deliver.quantity)
        const quantity = parseInt(event.target.quantity.value)
        const updateQuantity = previousQuantity + quantity

        const url = `http://localhost:5000/update/${supplierId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ quantity: updateQuantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast('Your quantity supplier is empty')
                }
                toast(data)
            })
    }
    const handelDeliver = event => {
        const previousQuantity = parseInt(deliver.quantity)
        const updateQuantity = previousQuantity - 1


        const url = `http://localhost:5000/update/${supplierId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ quantity: updateQuantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast('Your quantity supplier is empty')

                }
                toast(data)
            })

        const person = {
            user: user?.displayName,
            email: user?.email,
            service: supplierId,
            supplierName: deliver?.supplierName,
            address: user?.address,
            price: deliver?.price,
            quantity: deliver.quantity
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
                if (userId) {
                    toast('Your deliver is successfully completed')
                }
            })

    }
    return (
        <div className='p-5' >
            <div className='w-50 mx-auto border p-5 m-5 rounded-lg'>
                <h2> Your Stock Items: <span className='text-yellow-400'>{deliver.quantity} </span></h2>
                <p> Supplier id:{supplierId} </p>
                <form onSubmit={handleStockSubmit} className=''>

                    <input className='border mb-2 p-2 rounded w-100' placeholder='Quantity' name='quantity' ref={quantityRef} type="number" /> <br />

                    <input className='border mb-2 p-2 rounded  w-100 bg-gray-300' type="submit" value='Update Quantity' />
                </form>
            </div>
            <table className='overflow-x-auto'>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Deliver</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='flex justify-center'><img className='w-10 h-10' src={deliver.image} alt="" /></td>
                        <td>{deliver.price}</td>
                        <td>{deliver.quantity}</td>
                        <td><button onClick={handelDeliver} className='bg-yellow-300 py-2 px-3 font-bold rounded'>Deliver</button></td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DeliverSup;