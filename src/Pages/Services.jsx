import React, { useState } from 'react';
import ServiceData from '../Api/ServiceApi';

const Services = () => {
  const [sData, setSData] = useState(ServiceData);
  return (
    <>
      <section className="service-main-container ">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            {' '}
            How to Send Money , you wanna know
          </h1>
          <div className="row">
            {sData.map((d) => {
              const { id, logo, title, info } = d;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 service-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
