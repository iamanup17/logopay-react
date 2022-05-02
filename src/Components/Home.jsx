import React from 'react';
import Services from '../Pages/Services';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Footer from './Footer';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Header />
      <HowItWorks />
      <About />
      <Services />
      <hr />
      <Contact />
    </>
  );
};

export default Home;
