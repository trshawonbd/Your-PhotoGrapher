import React from 'react';
import './Info.css';
import info from '../../images/info-pic.jpg';

const Info = () => {
    return (
        <div>
        <h2 className='my-5'>Gratitude</h2>
        <div className="card mb-3 my-5 card-border" /* style={{ width: "540px"}} */>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={info} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 d-flex align-items-center">
      <div className="card-body">
        <h2 className="card-title">EVALUATED WEDDING PICTURES</h2>
        <p className="card-text">As a wedding photographer, I most appreciate the sincere and beautiful moments that this day offers. My greatest pleasure is to give the happy young couple a set of pictures that will tell a beautiful story about this day! It's like a little fairy tale about your love in a visual form. In order to create a beautiful story about your day as a whole, I recommend choosing a photographer to capture your own activities for the whole day. I have been present since your preparation and will finish when the official part of the day is over. I'm supportive of taking pictures of beauty. I will guide and guide you exactly so that you stay in the photos naturally and beautifully! Other times, I kindly stay in the background and capture all the moments that day brings with my camera.</p>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Info;