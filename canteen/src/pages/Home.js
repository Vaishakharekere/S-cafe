import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <CarouselComponent />
      
      <Features />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
