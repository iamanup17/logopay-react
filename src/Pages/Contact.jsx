import React, { useState } from 'react';
import testimonial from '../images/testimonial.jpg';

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // ************************************* F I R E B A S E - - C O N N E C T I O N *****************************************************************************
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, address, message } = userData;

    if (firstName && lastName && email && phone && address && message) {
      const res = await fetch(
        'https://reactfirebase-82de5-default-rtdb.firebaseio.com/userRecords.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (res) {
        alert(' data stored successfully');
        setUserData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          message: '',
        });
      } else {
        alert(' Please fill valid data ');
      }
    } else {
      alert('please fill data ');
    }

    // https://reactfirebase-82de5-default-rtdb.firebaseio.com/
  };
  // ************************************* F I R E B A S E - - C O N N E C T I O N *****************************************************************************
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* left side  */}
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading">
                    connect with our <br /> sales team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <figure>
                    <img src={testimonial} alt="sdf" className="img-fluid" />
                  </figure>
                </div>
                {/* left side end */}

                {/* Right side start */}

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone No."
                          value={userData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email Id"
                          value={userData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Your Address"
                          value={userData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className=" main-hero-para"
                      >
                        I agree to the terms & conditions
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={handleSubmit}
                    >
                      {' '}
                      Submit{' '}
                    </button>
                  </form>
                </div>
                {/* Right side end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
