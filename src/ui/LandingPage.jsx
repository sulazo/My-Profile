import React from "react";
import animationData from "../animations/landinganimation/data.js";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/styles";
//  import { useTheme } from '@material-ui/core/styles';
import { Grid, Button, Typography } from "@material-ui/core";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";

const useStyles = makeStyles((theme) => ({
  typo: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "#0B72B9",
    lineHeight: 1.5,
  },
  animation: {
    minWidth: "21em",
    maxWidth: "50em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
    marginTop: "2em",
    marginLeft: "10%",
  },
  learnButtonHero: {
    color: "blue",
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "0.9rem",
    fontWeight: "bold",
    // borderRadius:50, means 50 pixels
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    borderColor: "blue",
    borderWidth: 2,
  },
  learnButton: {
    marginTop: 10,
    height: 35,
    padding: 5,
    color: "blue",
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "0.7rem",
    fontWeight: "bold",
    borderRadius: 50,
    //  marginRight: 40,
    borderColor: "blue",
    borderWidth: 2,
  },
  estimateButin: {
    color: "white",
    textTransform: "none",
    fontFamily: "Pacifico",
    fontSize: "1rem",
    // borderRadius:50, means 50 pixels
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    backgroundColor: "orange",
    "&:hover": { backgroundColor: "red" },
  },
  buttonContainer: {
    marginTop: "1em",
  },

  heroTextContainer: {
    minWidth: "25em",
    //maxWidth:"",
    marginLeft: "1em",
    // [theme.breakpoints.down("md")]: {
    //   marginLeft: 0
    // }
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
  },
  h2: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2.5em",
    color: theme.palette.common.blue,
    lineHeight: 1.5,
  },
  h4: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.75em",
    color: theme.palette.common.blue,
  },
  subTitle1: {
    fontSize: "1.25rem",
    fontWeight: 300,
    color: "#868686",
    marginBottom: "1em",
  },
  specialText: {
    fontFamily: "Pacifico",
    color: "orange",
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function LandingPage() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*----Hero Block ---- */}
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
        >
          <Grid sm item className={classes.heroTextContainer}>
            {/*Holds all content of Hero block */}
            {/* <div style={{ height: "2em" }}></div> */}
            <Typography
              align="center"
              variant="h2"
              // className={classes.typo}
            >
              Bringing West Coast Technology <br /> to the MidWest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButin}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span
                    syle={{ marginRight: 10 }}
                    className={classes.specialText}
                  >
                    Learn more{" "}
                  </span>
                  {/* ButtonArrow width:{15} height={15}  fill={blue}*/}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height="100%" width="100%" />;
          </Grid>
        </Grid>
      </Grid>
      {""}
      {/* Service Block */}

      <Grid item>
        {/* Service Block starts here ? y not container*/}
        {/*  */}
        <Grid container direction="row">
          {/*holds all content of srvice block */}
          <Grid item>
            {/* Holds all texts of service block*/}
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle1}>
              Save Energy.Save Time.Save Money.
            </Typography>
            <Typography variant="subtitle" className={classes.subTitle1}>
              Complete digital solutions,from investigation to {""}
              <span className={classes.specialText}>
                celebration. <br />
              </span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}> Learn More</span>
            </Button>
          </Grid>
          <Grid item>
            {/* Holds icon of service block*/}
            <img src={customSoftwareIcon} alt="custom software icon" />
          </Grid>
        </Grid>
      </Grid>

      {/* Mobile App Block */}

      <Grid item>
        {/* Service Block starts here ? y not container*/}
        {/*  */}
        <Grid container direction="row" justify="flex-end">
          {/*holds all content of srvice block */}
          <Grid item>
            {/* Holds all texts of service block*/}
            <Typography variant="h4">Mobile App Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle1}>
              Save Energy.Save Time.Save Money.{" "}
            </Typography>
            <Typography variant="subtitle" className={classes.subTitle1}>
              Complete digital solutions,from investigation to {""}
              <span className={classes.specialText}>
                celebration. <br />
              </span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}> Learn More</span>
            </Button>
          </Grid>
          <Grid item>
            {/* Holds icon of service block*/}
            <img src={customSoftwareIcon} alt="custom software icon" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
//ToDo
// add arrow button
