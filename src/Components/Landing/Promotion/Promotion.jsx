import React from "react";
import styles from "./promotion.module.css";
import { Container, Grid } from "@material-ui/core";

export const Promotion = () => {

  return (
    <Container maxWidth="lg">
      
        <Grid container>
          <div className={styles.advertImg}>
            <Grid
              item
              className={styles.advertGrid}
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcSP20210824EUv2/en-us.png"
                alt=""
              />
            </Grid>
            <Grid
              item
              className={styles.advertGrid}
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcPD2021H2/en-us/home_banner.png"
                alt=""
              />
            </Grid>
           <Grid
              item
              className={styles.advertGrid}
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcSP20210824EUv2/en-us.png"
                alt=""
              />
            </Grid>
          </div>
        </Grid>
    </Container>
  );
};
