
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li>Wedding Photography</li>
                                <li>Arial Photography</li>
                                <li>Abstract Photography</li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li>About</li>
                                <li>Review</li>
                                <li>Goal</li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text-footer">
                            <h3>Md Taibur Rahman</h3>
                            <p className=''>I would like to meet and get to know you in advance. Let's talk about everything related to photography on the wedding day. I will share my recommendations at the meeting and give advice based on my past experience.</p>
                        </div>
                    </div>
                    <p class="copyright">Your PhotoGrapher ©  {year}</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;