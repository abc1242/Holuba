import React from "react";

import HomeComponent from "components/Home/HomeComponent";
import "../components/Home/Home.css";

const HomePage = () => {
  return (
    <div className="background">
      <HomeComponent />
      <HomeComponent />
      <HomeComponent />
    </div>
  );
};

export default HomePage;
