import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceContext } from '../../App';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useContext(ServiceContext);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

 /*    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }
        , []) */

    const addToCart = (service) => {
        const exist = cart.find(s => s.id === service.id)
        if (exist) {
            setCart(cart.map(s => s.id === service.id ? { ...exist, qty: exist.qty + 1 } : s))
            ;
        }
        else{
            setCart([...cart, { ...service, qty: 1 }])
        }
            
            navigate(`/service/${service.id}`);

    }




    return (
        <div className='container '>
            <h2 className='my-5'>All services</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 ">

                {
                    services.map((service) => <Service
                        key={service.id}
                        service={service}
                        addToCart = {addToCart}
                        
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;