import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";

const HomePage = () => {
  //console.log("Home Page");
  return (
    <main>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <Services></Services>
      <Contact></Contact>
    </main>
  );
};

export default HomePage;
