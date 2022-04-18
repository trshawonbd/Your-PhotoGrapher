import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../../App';
import './CheckOut.css';

const CheckOut = () => {
 /*    const para = useParams();
    const { id } = para;
    console.log(id, name); */
    /* const [services, setServices ] = useContext(ServiceContext);

    const service = services.find((service) => service.id == id);
    console.log(service)
    const {name, price, picture, about } = service;
    console.log(name)  */
    return (
        <div>
            <h2 className='my-5'>Thanks for Choosing my Service</h2>
            <h3 className='my-3'>Your Choosing Plan</h3>
            <hr />
            {/*  <div className="card mb-3 container" >
            <div className="row g-4">
                <div className="col-md-4 d-flex align-items-center ">
                    <img src={picture} className="img-fluid" alt="..." />

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title service-name">{name}</h5>
                        <hr />
                        <h5 className="card-text card-price">Price: {price}</h5>
                        <hr />
                        <p className="card-text "><span className='description'>Description:</span>  <hr /> {about}</p>
                        <hr />
                    </div> */}
                    <button className='book-btn'>Pay Now</button>
 
              </div>
            /* </div>
        </div>
 
        </div> */
    );
};

export default CheckOut;