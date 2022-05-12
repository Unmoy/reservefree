import React from "react";
import Doctors from "../Doctors/Doctors";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Listing from "../Listing/Listing";
import Navbar from "../Navbar/Navbar";
import Specialist from "../Specialist/Specialist";

const HomePage = () => {
  return (
    <>
      <Header />
      <Specialist />
      <Doctors />
      <Listing />
     
    </>
  );
};

export default HomePage;
