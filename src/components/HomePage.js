import React from 'react';
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Nav from './Nav';
import Footer from './Footer';

const HomePage = () => {


    return (
    <main>
        <Nav />
        <Hero />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
    </main>
    )
}

export default HomePage;