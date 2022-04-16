import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import Banner1 from '../../images/banner1.jpg';
import Banner2 from '../../images/banner2.jpg';
import Banner3 from '../../images/banner3.jpg';


const Banner = () => {
    return (
        <div>
             <div>
                    <Carousel>
            <Carousel.Item className='banner'>
                <img
                    className="d-block w-100 "
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='banner-title'>Consideration</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className = "banner-title">Purchase</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className = "banner-title">Service</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>

        </div>
    );
};

export default Banner;