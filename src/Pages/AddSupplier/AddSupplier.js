import React from "react";
import { useForm } from "react-hook-form";
import './AddSupplier.css'
const Supplier = (event) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // sending data to server using POST method
        fetch('http://localhost:5000/suppliers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('added data', result)
                alert('Supplier added successfully')
                event.target.reset()
            })
    };

    return (
        <div className="w-[60%] mx-auto border p-10 m-10 rounded bg-purple-300">
            <div><h2 className="text-center mb-5">Add Supplier</h2></div>
            <form className="supplier-form" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2 border" placeholder="Product Name" type='text' {...register("name", { required: true, maxLength: 20 })} />
                <input className="mb-2 border" placeholder="Supplier Name" type='text'  {...register("supplierName")} />
                <textarea className="mb-2 border" placeholder="Description" type='text'  {...register("description")} />
                <input className="mb-2 border" placeholder="image Url" type='Supplier Name'  {...register("image")} />
                <input className="mb-2 border" placeholder="Price" type="number" {...register("price",)} />
                <input className="mb-2 border" placeholder="Quantity" type="number" {...register("quantity",)} />
                <input className="mb-2 bg-slate-500 text-white" type="submit" value='Add Supplier' />
            </form>
        </div>
    );
}
export default Supplier;
