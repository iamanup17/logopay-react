import { useState } from 'react';
import WorkApi from '../Api/WorkApi';

const HowItWorks = () => {
  const [workData, setWorkData] = useState(WorkApi);

  return (
    <>
      <section>
        <div className="container work-container">
          <h1 className="main-heading text-center">
            How Does It Works <br />
            <br />
          </h1>
          <div className="row">
            {workData.map((d) => {
              const { id, logo, title, info } = d;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center work-container-subdiv"
                    // style={{ width: '30%' }}
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                  ;
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
