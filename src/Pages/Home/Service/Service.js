import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service, handleDelete }) => {
    // const {service} = props;
    const { _id, name, price, description, image } = service;
    return (
        <div className="service pb-3">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
            <button onClick={() => handleDelete(_id)}>Detete Service</button>
        </div>
    );
};

export default Service;