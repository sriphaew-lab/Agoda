import React from "react";
import styles from "./package.module.css";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Carousel from 'react-grid-carousel'

export const Package = () => {

  return (
  <Container className={styles.Dest_Cont} maxWidth="lg">
    <Typography
      style={{ textAlign: "center", marginBottom: 40 }}
      variant="h4"
    >
      Popular Packages
    </Typography>
    <Carousel cols={3} rows={1} gap={10} showDots={1} loop autoplay={4000}>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
            <img
                className={styles.rentalImg}
                src="./images/package/medtopia-01.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Ulthera</div>
              <div className={styles.treatment_price}>THB 49,000</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/narada-02.png"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Fine Thread V-Shape Lifting</div>
              <div className={styles.treatment_price}>THB 9,900</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/medtopia-02.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>HIFU</div>
              <div className={styles.treatment_price}>THB 15,000</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="/images/package/rattinan-04.webp"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Breat Silicon Removal</div>
              <div className={styles.treatment_price}>THB 50,000</div> 
            </div>
          </div>
        </Carousel.Item> 
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/inspireivf-01.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Egg Preservation</div>
              <div className={styles.treatment_price}>THB 110,000</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/rattinan-01.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Liposuction</div>
              <div className={styles.treatment_price}>THB 35,000</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/inspireivf-02.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Baby Perfect</div>
              <div className={styles.treatment_price}>THB 299,000</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/rattinan-02.jpg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Body Firming by Tesla Former</div>
              <div className={styles.treatment_price}>THB 3,500</div> 
            </div>
          </div>
        </Carousel.Item>        
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/inspireivf-03.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Sperm Check</div>
              <div className={styles.treatment_price}>FREE</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/rattinan-03.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Reduce Sweat and Body Odor</div>
              <div className={styles.treatment_price}>.-</div> 
            </div>
          </div>
        </Carousel.Item>        
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/inspireivf-04.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Woman Blood Test for IV</div>
              <div className={styles.treatment_price}>THB 26,900</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/inspireivf-05.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Package IV</div>
              <div className={styles.treatment_price}>THB 36,000</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/narada-03.png"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Otoplasty</div>
              <div className={styles.treatment_price}>THB 12,000</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/narada-04.png"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Fat Transfer</div>
              <div className={styles.treatment_price}>THB 19,000</div> 
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className={styles.rentalTypes}>
              <img
                className={styles.rentalImg}
                src="./images/package/narada-01.jpeg"
                alt=""
              />
            <div className={styles.flex_style}>
              <div className={styles.treatment_name}>Acne Treatment</div>
              <div className={styles.treatment_price}>THB 2,900</div> 
            </div>
          </div>          
        </Carousel.Item>       
        {/* ... */}
      </Carousel>
  </Container>
  );
};
