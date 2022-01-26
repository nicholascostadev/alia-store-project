import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';

function Home() {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Contact />
    <Footer />
  </div>;
}

export default Home;
