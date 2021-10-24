import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleDelete = id => {

        const confirm = window.confirm("Are You Sure?")
        if (confirm) {
            axios.delete(`http://localhost:5000/services/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Service Deleted');
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining)
                    }
                })
        }

    }
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        handleDelete={handleDelete}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;