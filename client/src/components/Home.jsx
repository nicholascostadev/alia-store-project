import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';

function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default Home;
