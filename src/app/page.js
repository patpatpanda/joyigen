// src/app/page.js
import Hero from '../components/Hero/Hero';


import AboutUs from '../components/AboutUs/AboutUs';

import CallToAction from '../components/CallToAction/CallToAction';
import Offers from '../components/Offers/Offers';
export default function Home() {
  return (
    <>
      <Hero />
     
        <AboutUs />
      
     
        <CallToAction/>
    </>
  );
}
