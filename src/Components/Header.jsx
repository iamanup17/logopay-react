import React from 'react';
import heroImage from '../images/hero1.jpg';
import testimonial from '../images/testimonial.jpg';

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            {/* ****************************************MAIN HEADER LEFT SIDE*********************************************** */}
            <div
              className="col-12 col-lg-6 header-left-side d-flex flex-column justify-content-center align-items-start 
            order-lg-first order-last"
            >
              <h1 className="display-2">
                Online Payment made <br /> easy for you
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                quaerat quibusdam nesciunt suscipit fugit quasi saepe sequi
                necessitatibus, quis amet aut! Similique itaque corporis
                possimus, saepe alias animi perferendis provident blanditiis.
                Reiciendis.
              </p>
              <h3>Get Early Access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-100 w-lg-75  me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button btn-style">Get it Now</div>
              </div>
            </div>
            {/* ****************************************MAIN HEADER LEFT SIDE*********************************************** */}

            {/* ****************************************MAIN HEADER RIGHT SIDE*********************************************** */}
            <div
              className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center
             main-herosection-images order-md-first order-sm-last"
            >
              <img src={heroImage} alt="hero2" className="img-fluid" />
              <img
                src={testimonial}
                alt="hero2"
                className="img-fluid heroimg2"
              />
            </div>

            {/* ****************************************MAIN HEADER RIGHT SIDE*********************************************** */}
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
