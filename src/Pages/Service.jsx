// ServicePage.js

import React from 'react';

const ServicePage = () => {
  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <div className="service-item">
        <h2>Web Development</h2>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis recusandae voluptates consequatur facilis expedita esse perspiciatis neque excepturi minus, quidem obcaecati? Maxime ducimus vero iste. Aut neque tempore culpa quaerat.
        </p>
      </div>
      <div className="service-item">
        <h2>Mobile App Development</h2>
        <p>
          Our team can build native or cross-platform mobile applications for iOS and Android devices
          using technologies like React Native and Flutter.
        </p>
      </div>
      <div className="service-item">
        <h2>UI/UX Design</h2>
        <p>
          We provide custom UI/UX design services to ensure that your website or application not only looks
          great but also provides an intuitive user experience.
        </p>
      </div>
    </div>
  );
}

export default ServicePage;
