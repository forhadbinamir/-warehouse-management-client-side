import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.init';
import axios from 'axios'
const MySuppliers = () => {
    const [user] = useAuthState(auth)
    const [mySuppliers, setMySuppliers] = useState([])
    useEffect(() => {
        const email = user.email
        const url = `http://localhost:5000/person?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMySuppliers(data))
        // const getMySuppliers = async () => {
        //     const url = `http://localhost:5000/person?email=${email}`
        //     const { data } = await axios.get(url)
        //     setMySuppliers(data)
        // }
        // getMySuppliers()
    }, [user])
    return (
        <div className='container'>
            <h2 className='text-center m-3'>Your Order Suppliers list : {mySuppliers.length}</h2>
            <table className='m-5'>
                <tr>
                    <th>Lenth</th>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Supplier Name</th>
                    <th>Price</th>
                </tr>
                {
                    mySuppliers.map(supplier => <tr key={supplier._id}>
                        <td>{mySuppliers.indexOf(supplier) + 1}</td>
                        <td>{supplier._id}</td>
                        <td>{supplier.email}</td>
                        <td>{supplier.supplierName}</td>
                        <td>{supplier.price}</td>
                    </tr>
                    )
                }
            </table>
        </div>
    );
};

export default MySuppliers;