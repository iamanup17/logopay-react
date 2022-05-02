import { useState } from 'react';
import testimonial from '../images/testimonial.jpg';
import AboutApi from '../Api/AboutApi';

const About = () => {
  const [aboutData, setaboutData] = useState(AboutApi);
  return (
    <>
      <section className="common-section our-services ">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img ">
              <img src={testimonial} alt="image" />
            </div>
            {/* Right side data */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                Available at Google Play store and IOS store
              </h3>
              <h1 className="main-heading">How to use the aapp</h1>
              {aboutData.map((data) => {
                const { id, number, title, info } = data;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{number}</div>

                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className="btn-style btn-style-border mt-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section our-services our-services-rightside ">
        <div className="container mb-5">
          <div className="row">
            {/* Right side data */}
            <div className="col-12 col-lg-7 our-services-list  our-services-rightside-content ">
              <h3 className="mini-title">Support in Any Languages</h3>
              <h1 className="main-heading">
                World class support is available 24*7
              </h1>
              {aboutData.map((data) => {
                const { id, number, title, info } = data;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{number}</div>

                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className="btn-style btn-style-border mt-3">
                Learn More
              </button>
            </div>
            {/* right side ends */}
            <div className="col-12 col-lg-5 our-service-leftside-img">
              <img src={testimonial} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
