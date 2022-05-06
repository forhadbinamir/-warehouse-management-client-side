import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.init';
const MySuppliers = () => {
    const [user] = useAuthState(auth)
    const [mySuppliers, setMySuppliers] = useState([])
    useEffect(() => {
        const email = user.email
        const getMySuppliers = async () => {
            const url = `http://localhost:5000/person?email=${email}`
            const { data } = await axios.get(url)
            setMySuppliers(data)
        }
        getMySuppliers()
    }, [user])
    return (
        <div>
            <h2>my Suppliers list : {mySuppliers.length}</h2>
        </div>
    );
};

export default MySuppliers;