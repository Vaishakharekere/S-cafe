// src/pages/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>About Us</h1>
          <p className="lead">Welcome to Sahyadri!</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://sahyadri.edu.in/images/gallery1/campus/Sahyadri-Food-Court.jpg"
            alt="Sahyadri"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            At Sahyadri, our mission is to provide excellent services and solutions in various domains, ensuring customer satisfaction and fostering innovation. We aim to be the leaders in our industry by offering top-notch quality and value.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
            <li>Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
            <li>Quality: We provide outstanding products and unsurpassed service that deliver premium value to our customers.</li>
            <li>Teamwork: We work together, across boundaries, to meet the needs of our customers and to help the company win.</li>
            <li>Respect for People: We value our people, encourage their development, and reward their performance.</li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <h2>Our History</h2>
          <p>
            Founded in 2007, Sahyadri has grown from a small startup to a renowned company with a strong presence in multiple sectors. Over the years, we have continuously adapted to the changing market and have emerged as a trusted name for our clients.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <h2>Our Team</h2>
          <p>
            Our team comprises of talented and dedicated professionals who are passionate about what they do. Their expertise and commitment drive our success and ensure that we consistently exceed our clients' expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
