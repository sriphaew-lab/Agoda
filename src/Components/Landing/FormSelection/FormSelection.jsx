import React, { useContext, useEffect, useState } from "react";
import styles from "./formSelection.module.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ApartmentIcon from "@material-ui/icons/Apartment";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightIcon from "@material-ui/icons/Flight";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SearchIcon from "@material-ui/icons/Search";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Calendar } from "./Calendar";
import RoomSelect from "./RoomSelect";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/Provider";
import { Checkbox } from "antd";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5392F9",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    margin: "auto",
    backgroundColor: "#fff",
    transform: "translateY(-260px)",
    borderRadius: 9,
    boxShadow: "0 4px 10px #bbb",
    zIndex: 10,
    position: "relative",
    top: "16px",
    padding: "0 0px",
  },
  tab: {
    margin: "8px 0",
    fontSize: "14px",
    textShadow: "0.5px 0 1px #777",
  },
  margin: {
    width: "100%",
    margin: "10px 0",
    backgroundColor: "#fff",
    outline: "none",
  },
  input: {
    border: "none",
  },
  form: {
    width: "83%",
    height: window.innerWidth > 970 ? "300px" : "360px",
    margin: "auto",
    backgroundColor: "#F8F7F9",
    transform: "translateY(-260px)",
    borderRadius: 9,
    padding: "40px 50px",
  },
}));

export const FormSelection = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);
  const [focus, setFocus] = useState(false);
  const [debounce, setDebounce] = useState(false);
  // const cities = [{"_id":"6202ab103bfdace055c08e9e","treatment":"Regenerative Medicine"},{"_id":"6202ab1a3bfdace055c08e9f","treatment":"Alternative Medicine"},{"_id":"6202ab293bfdace055c08ea0","treatment":"Cardio Vascular Treatment"},{"_id":"6202ab333bfdace055c08ea1","treatment":"Musculoskeletal Treatment"},{"_id":"6202ab653bfdace055c08ea3","treatment":"Dental Treatment"},{"_id":"6202ab753bfdace055c08ea4","treatment":"IVG"},{"_id":"6202ab843bfdace055c08ea5","treatment":"Cancer Treatment"},{"_id":"6202aba13bfdace055c08ea6","treatment":"Cosmetic Surgery"},{"_id":"6202abb13bfdace055c08ea7","treatment":"Cosmetic Medicine"},{"_id":"6202abc43bfdace055c08ea8","treatment":"Plastic and Reconstructive Surgery"},{"_id":"6202abd13bfdace055c08ea9","treatment":"Reassignment/Sex Change"},{"_id":"6202abe03bfdace055c08eaa","treatment":"Eye Treatment"},{"_id":"6202abeb3bfdace055c08eab","treatment":"Organ Transplant"},{"_id":"6202abf53bfdace055c08eac","treatment":"Precision Medicine"},{"_id":"6202abfe3bfdace055c08ead","treatment":"NCD"}];


  const { searchedCity, setSearchedCity } = useContext(AppContext);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleSearch = (e) => {
    // setSearch(e.target.value);
    setSearchedCity(e.target.value);
  };

  const handleDebounceCity = async (city) => {
    console.log(city);
    // setSearch(city)
    await setSearchedCity(city);
    await setDebounce(false);
  };

  useEffect(() => {
    axios.get("https://agoda-api.herokuapp.com/city").then(({ data }) => {
    // axios.get("http://localhost:5000/api/v1/destination").then(({ data }) => {
      setCities(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: focus ? "rgba(0,0,0,0.7)" : "transparent",
          display: focus ? "block" : "none",
        }}
        className={styles.main_container}
      ></div>
      <img
        className={styles.background_image}
        src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png"
        alt=""
      />
      <ThemeProvider theme={theme}>
        <Paper theme={theme} square className={classes.root}>
          <div className={styles.newTag}>New!</div>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            <Tab
              className={classes.tab}
              icon={<HomeWorkIcon />}
              label="TREATMENT"
            />
            <Tab
              className={classes.tab}
              icon={<ApartmentIcon />}
              label="WELLNESS"
            />
            <Tab
              className={classes.tab}
              icon={<FlightTakeoffIcon />}
              label="PROVIDER"
            />
            <Tab
              className={classes.tab}
              icon={<FlightIcon />}
              label="DOCTOR"
            />
            <Tab
              className={classes.tab}
              icon={<EventAvailableIcon />}
              label="ACCOMMODATION"
            />
          </Tabs>
        </Paper>
      </ThemeProvider>

      <Paper
        style={{
          backgroundColor: focus ? "#666" : "#F8F7F9",
          boxShadow: focus ? "none" : "0 4px 10px #888, 0 -4px 10px #888",
        }}
        square
        className={classes.form}
      >

        <Grid container>
          <Grid
            className={styles.formFirstLine}
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <SearchIcon className={styles.searchIcon} />
            <input
              onFocus={() => {
                setFocus(true);
                setDebounce(true);
              }}
              onBlur={() => {
                setFocus(false);
                // setDebounce(false);
              }}
              type="text"
              // value={search}
              value={searchedCity}
              onChange={handleSearch}
              placeholder="Enter a destination"
            />
          </Grid>

          {/* debounce result */}

          <Paper
            style={{ display: debounce ? "block" : "none" }}
            className={styles.debounceRes}
          >
            <div className={styles.debounceTooltip}></div>
            {cities
              .filter((city) =>
                city.toLowerCase().indexOf(searchedCity.toLowerCase()) !== -1
                  ? true
                  : false
              )
              .map((city, idx) => {
                return (
                  <div
                    onClick={() => {handleDebounceCity(city)} }
                    className={styles.debounceCity}
                    key={idx}
                  >
                    <LocationOnIcon className={styles.locationIcon} />
                    <p>{city}, India</p>
                  </div>
                );
              })}

            {/* {cities.map((item) => {
                return (
                  <div
                    onClick={() => {handleDebounceCity(item.city)} }
                    className={styles.debounceCity}
                    key={item._idx}
                  >
                    <LocationOnIcon className={styles.locationIcon} />
                    <p>{item.city}, Thailand</p>
                  </div>
                );
              })}               */}
          </Paper>

          {/* debounce result end */}

          <Grid
            style={{ paddingBottom: window.innerWidth > 800 ? "0" : "10px" }}
            className={styles.formSecLine}
            container
            item
          >
            <Grid
              className={styles.calendar}
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
            >
              <Calendar setFocus={setFocus} />
            </Grid>
            <Grid
              className={styles.roomSelect}
              item
              lg={5}
              md={5}
              sm={12}
              xs={12}
            >
              <RoomSelect setFocus={setFocus} />
            </Grid>
          </Grid>

          <Grid
            style={{ width: "98%" }}
            className={styles.formThirdLine}
            container
            item
          >
            <Grid
              className={styles.checkbox_flightHotel}
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
            >
              <Checkbox>Save up to 25% on accommodation</Checkbox>
              <div className={styles.checkboxTag}>Treatment + Accommodation</div>
            </Grid>
          </Grid>

          <Link
            className={styles.searchBtnLink}
            style={{ color: "#fff" }}
            to="/hotel"
          >
            <button className={styles.searchBtn}>SEARCH</button>
          </Link>
        </Grid>
      </Paper>
    </div>
  );
};
