import { Container, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import styles from "./provider.module.css";
import InfiniteCarousel from "react-leaf-carousel";
import { AppContext } from "../../../context/Provider";
import { Link } from "react-router-dom";

export const Provider = () => {
  const { setSearchedCity } = useContext(AppContext);

  return (
    <Container className={styles.provider_cont} maxWidth="lg">
      <Typography className={styles.provider_heading} variant="h4">
        Popular Healthcare Providers
      </Typography>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
        ]}
        showSides={true}
        sidesOpacity={0}
        // sideSize={0.1}
        slidesToScroll={6}
        slidesToShow={6}
        scrollOnDevice={true}
        
      >
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Mumbai")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="./images/provider/provider-klaire.jpeg"
            />
            <h4>Bangkok</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Hyderabad")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="./images/provider/provider-narada.jpeg"
            />
            <h4>Chiangmai</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Kolkata")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="./images/provider/provider-inspireivf.jpeg"
            />
            <h4>Bangkok</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Chennai")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="./images/provider/provider-rattinan.jpeg"
            />
            <h4>Bangkok</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Bangalore")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="./images/provider/provider-thedawn.jpeg"
            />
            <h4>Chiangmai</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("New Delhi")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="./images/provider/provider-medtopia.jpeg"
            />
            <h4>Bangkok</h4>
          </div>
        </Link>
      </InfiniteCarousel>
    </Container>
  );
};

