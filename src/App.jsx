import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu ,MenuCategories,ReviewsSection } from './container';
import { Navbar } from './components';
import './app.css'

const Home= () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <MenuCategories />
    <ReviewsSection />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default Home
