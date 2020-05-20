import React from "react";
import Hero from '../components/Hero'
import { Link } from "react-router-dom";
import Banner from'../components/Banner';
import  Services from '../components/Services'
import FeaturedRooms from "../components/FeaturedRooms";

const home = () => {
  return (   
  <>
  <Hero>
    <Banner title="Starters rooms" subtitle="AC rooms starting at 599/- only">
      <Link to='/rooms' className='btn-primary'>
        OUR ROOMS
      </Link>
    </Banner>
  </Hero>
  <Services />
  <FeaturedRooms />
  </>
  );
};

export default home;
