import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import styles from "./review.module.css";

export const Review = () => {

  return (
    <Container className={styles.provider_cont} maxWidth="lg">
    <Typography
    style={{ textAlign: "center", marginBottom: 40 }}
    variant="h5"
    >
      Voices from Medix Travellers
    </Typography>

    <Container maxWidth="lg">
    <Grid className={styles.rentalGrid} container>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <div className={styles.reviews}>
          <h1>HIFU at Medtopia</h1>
          <p>in Bangkok</p>
          <h2>
            "We booked HIFU package after reading
            a handful of reviews, and it was easily the best decision we
            made for our face treatment to Thailand."
          </h2>
          <p>-Milind from Bulgaria</p>
        </div>
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <div className={styles.reviews}>
          <h1>Wellness at the Dawn</h1>
          <p>in Chiagmai</p>
          <h2>
            "We booked holistic wellnes therapy through MedixToursim after reading a
            handful of reviews, and it was the best decision we made
            for our trip to Chaingmai."
          </h2>
          <p>-Abhishek from Delhi</p>
        </div>
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <div className={styles.reviews}>
          <h1>IVF at Inspire IVF</h1>
          <p>in Bangkok</p>
          <h2>
            "We had tried several ways to have a baby for many years.
            Last year, we received a recommendation from MedixToursim
            and booked a Baby Perfect program at Inspire IVF.
            Last three months, we flied to Thailand with a hope.
            Unbelievable! it is success from the first try!"
          </h2>
          <p>-Avile from Bahrain</p>
        </div>
      </Grid>
    </Grid>
    </Container>
    </Container>
  );
};
