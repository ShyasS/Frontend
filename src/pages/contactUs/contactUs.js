/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';
import './contactUs.css';
import Button from 'react-bootstrap/Button';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector('#contact').disabled = true;
    try {
      const response = await axios.post('api/send-email', formData);
      console.log(response);

      alert('Email sent successfully');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // console.error('Error sending email:', error);
      alert('Error sending email');
      // Handle the error (show error message or redirect)
    }
  };

  return (
    <div id="CardText">
      {/* Button to open modal */}
      <Button
        type="button"
        data-bs-toggle="modal"
        className="my-global-button btn btn"
        data-bs-target="#contactModal"
      >
        Contact Us
      </Button>

      {/* Modal */}
      <div
        className="modal fade"
        id="contactModal"
        style={{ backgroundColor: 'transparent' }}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" id="CardText1">
          <div className="modal-content" id="CardBackIMg1">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* Contact form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label text-black" required>
                    Full Name
                  </label>
                  <input
                    type="text"
                    style={{ backgroundColor: 'white', color: 'black' }}
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    style={{ backgroundColor: 'white', color: 'black' }}
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-black">
                    Subject
                  </label>
                  <input
                    type="text"
                    style={{ backgroundColor: 'white', color: 'black' }}
                    className="form-control"
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-black">
                    Message
                  </label>
                  <textarea
                    style={{ backgroundColor: 'white', color: 'black' }}
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" id="contact" className="btn my-global-button w-25 text-black">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
