import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound ">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h1>We are sorry , page not found</h1>
          <h2>
            The Page you are looking for might have been removed , had its name
            changed or is temporarily unavailable
          </h2>
          <button className="btn btn-style">
            <NavLink to="/"> Go To Home </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
