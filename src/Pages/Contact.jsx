// import React from 'react'
// const Contact = () => {
//   return (
//         <>
//       <section className="contact">
//     <h1 className='id'>Contact Me</h1>
//     <div class="contact-container flex s-around items-centers">
//         <div class="form" id="contactForm">
//             <form action="" id="contactFrom">
//                 <div class="name form-div">
//                     <input type="text" name="name" id="name" class="poppins" placeholder="Enter Your Name" />
//                 </div>
//                 <div class="email form-div">
//                     <input type="email" name="email" id="email" class="poppins" placeholder="Enter Your Email"
//                         required />
//                 </div>
//                 <div class="phone form-div">
//                     <input type="phone" name="phone" id="phone" class="poppins" placeholder="Enter Your Phone"
//                         required />
//                 </div>
//                 <div class="textarea form-div">
//                     <textarea name="text" id="textarea" cols="30" rows="10" class="poppins"
//                         placeholder="Enter Messages"></textarea>
//                 </div>
//                 <button className='button' type="submit" class="btn poppins" id="submit">Send</button>
//             </form>
//         </div>
//     </div>
// </section>
// <div className=''></div>
// </>


//   )
// }

// export default Contact


// Contact.js

import React, { useState } from 'react';
// import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission
    console.log(formData);
  };

  return (
      <>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='le' type="submit">Submit</button>
      </form>
    </div>
    <div >
    <div className="contact-left">
                    {/* <h1 class="sub-title">Contact Me</h1> */}
                    <p><i className="fas fa-paper-plane"></i> example@gmail.com</p>
                    <p><i className="fas fa-phone-square-alt"></i> 0987654321</p>
                    <div className="social-icons">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <a className='a' href="images/my-cv.pdf" download >Download CV</a>
                </div>
    </div>
    </>
  );
};

export default Contact;


