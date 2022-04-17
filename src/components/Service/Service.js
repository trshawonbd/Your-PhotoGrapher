import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Service.css';

const Service = ({ service, addToCart }) => {

    const [showMore, setShowMore] = useState(false);
    const {name, price, picture, about} = service;
    return (
        <div className="col service-card">
            <div className="card h-100 card-img" style={{ width: "18rem" }}>
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                    {showMore ? about : `${about.slice(0,300)} `
                        }
                            <button className='btn-read-more' onClick={()=> setShowMore(!showMore)}>
                            {showMore ? 'Read Less' : 'Read More'} 
                            </button>  
                    </p>
                    <hr />
                    <h4 className='card-price'>Price:{price}</h4>
                    <hr />
                    <button     onClick={() => addToCart(service)} className='book-now-btn ms-3'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;