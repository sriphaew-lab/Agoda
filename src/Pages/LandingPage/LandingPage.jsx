import React from "react";
import styles from "./landingPage.module.css";
import { Navbar } from "../../Components/Landing/Navbar/Navbar";
import { FormSelection } from "../../Components/Landing/FormSelection/FormSelection";
import { Promotion } from "../../Components/Landing/Promotion/Promotion";
import { Package } from "../../Components/Landing/Package/Package";
import { Provider } from "../../Components/Landing/Provider/Provider";
import { Review } from "../../Components/Landing/Review/Review";
import { DestinationCarousels } from "../../Components/Landing/DestinationCarousels/DestinationCarousels";
import { Footer } from "../../Components/Landing/Footer/Footer";
import { ScrollUpNav } from "../../Components/Landing/Navbar/ScrollUpNav";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <FormSelection />
      {/* <Promotion /> */}
      <Package />
      <Provider />
      <Review />
      <ScrollUpNav calcScroll="500" />
      {/* <DestinationCarousels /> */}
      <Footer />
    </>
  );
};
