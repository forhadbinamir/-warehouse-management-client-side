import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const UpdateSupplier = () => {
    const { id } = useParams()
    const [supplier, setSupplier] = useState([])
    useEffect(() => {
        const url = `https://aqueous-crag-40240.herokuapp.com/update/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSupplier(data))
    }, [])


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // sending data to server using PUT method
        const url = `https://aqueous-crag-40240.herokuapp.com/update/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('Update data', result)
                alert('Supplier Update Successfully')
            })
    };

    return (
        <div className="w-[60%] mx-auto border p-10 m-10 rounded bg-purple-300">
            <div><h2 className="text-center mb-5">Update Supplier: {supplier.name} </h2></div>
            <form className="supplier-form" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2 border" placeholder="Product Name" type='text' {...register("name", { required: true, maxLength: 20 })} />
                <input className="mb-2 border" placeholder="Supplier Name" type='text'  {...register("supplierName")} />
                <textarea className="mb-2 border" placeholder="Description" type='text'  {...register("description")} />
                <input className="mb-2 border" placeholder="image Url" type='Supplier Name'  {...register("image")} />
                <input className="mb-2 border" placeholder="Price" type="number" {...register("price",)} />
                <input className="mb-2 border" placeholder="Quantity" type="number" {...register("quantity",)} />
                <input className="mb-2 bg-slate-500 text-white" type="submit" value='Update Supplier' />
            </form>
        </div>
    );
};

export default UpdateSupplier;