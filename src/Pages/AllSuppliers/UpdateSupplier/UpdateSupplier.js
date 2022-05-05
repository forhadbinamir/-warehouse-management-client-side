import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateSupplier = () => {
    const { id } = useParams()
    return (
        <div>
            <h2>Updating Supplier : {id}</h2>
        </div>
    );
};

export default UpdateSupplier;