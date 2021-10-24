import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service inderted Successfully!')
                    reset();
                }
            })
    };
    return (
        <div className='add-product'>
            <h1>Add Products</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder='Service Name' />
                <textarea {...register("description")} placeholder='Service Decription' />
                <input {...register("image")} placeholder='Image url' />
                <input type="number" {...register("charge")} placeholder='Service Charge' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;