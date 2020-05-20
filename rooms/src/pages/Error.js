import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return <Hero>
    <Banner title="ERROR" subtitle="SORRY PAGE NOT FOUND">
      <Link to='/' className="btn-primary">BACK TO HOME</Link>
    </Banner>
    </Hero>;
};

export default Error;
