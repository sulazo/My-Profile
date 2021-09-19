import React from "react";
import animationData from "../animations/landinganimation/data.js";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Button, Typography, Card, CardContent } from "@material-ui/core";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileIcon from "../assets/mobileIcon.svg";
import webSiteIcon from "../assets/websiteIcon.svg";
import repeatingBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./CallToAction";

const useStyles = makeStyles((theme) => ({
  animation: {
    minWidth: "21em",
    maxWidth: "50em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
    marginTop: "2em",
    marginLeft: "10%",
  },
  buttonContainer: {
    marginTop: "1em",
    marginLeft: "1em",
    minWidth: "27em",
    marginBottom: "2em",
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
    //  "&:hover": { backgroundColor: "red" }

    "&:hover": { backgroundColor: theme.palette.secondary.light },
  },
  h2: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2.5em",
    color: theme.palette.common.arcBlue,
    lineHeight: 1.5,
    // marginLeft: "5em",
    [theme.breakpoints.down("sm")]: { marginLeft: "0" },
  },
  h3: {
    fontSize: "2.5rem",
    fontFamily: "Pacifico",
    color: theme.palette.common.arcBlue,
  },

  h4: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.75em",
    color: theme.palette.common.arcBlue,
  },

  heroTextContainer: {
    minWidth: "25em",
    //maxWidth:"",
    marginLeft: "1em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },

  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: { marginLeft: 0 },
  },
  infoBackgound: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgoundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  learnButtonHero: {
    color: theme.palette.common.arcBlue,
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "0.9rem",
    fontWeight: "bold",
    // borderRadius:50, means 50 pixels
    borderRadius: 50,
    height: 45,
    width: 145,
    color: "white",
    //marginRight: 40,
    borderColor: "white",
    borderWidth: 2,
    [theme.breakpoints.down("sm")]: { marginBottom: "1em" },
  },
  learnButton: {
    marginTop: 10,
    height: 35,
    padding: 5,
    color: theme.palette.common.arcBlue,
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "0.7rem",
    fontWeight: "bold",
    borderRadius: 50,
    marginRight: 40,
    borderColor: "blue",
    borderWidth: 2,
  },

  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },

  revolutionBackgound: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: "center",
    backgoundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    borderRadius: 15,
    padding: "10em",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  subTitle1: {
    fontSize: "1.25rem",
    fontWeight: 300,
    color: "#868686",
    // marginBottom: "1em"
  },
  subTitle2: {
    fontSize: "1.25rem",
    fontWeight: 300,
    color: "white",
    // marginBottom: "1em"
  },
  specialText: {
    fontFamily: "Pacifico",
    color: "orange",
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    //
  },
  typo: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "#0B72B9",
    lineHeight: 1.5,
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

export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*-----------------Hero Block ---- */}
        <Grid
          container
          justifyItems="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant="h2" align="center" className={classes.h2}>
              Bringing West Coast Technology <br /> to the MidWest
            </Typography>

            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Button variant="contained" className={classes.estimateButin}>
                Free Estimate
              </Button>
              <Button variant="outlined" className={classes.learnButtonHero}>
                Learn More
              </Button>
            </Grid>
          </Grid>

          <Grid item sm>
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </Grid>
        </Grid>
      </Grid>

      {/*...................Service Block........................................................ */}

      <Grid
        container
        direction="row"
        className={classes.serviceContainer}
        justify={matchesSM ? "center" : undefined}
      >
        <Grid
          item
          // className={classes.temp}
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          {/* Holds text and button*/}
          <Typography variant="h4" className={classes.h4}>
            Custom Software Development
          </Typography>
          <Typography variant="subtitle1" className={classes.subTitle1}>
            Save Energy.Save Time.Save Money.
          </Typography>
          <Typography variant="subtitle1" className={classes.subTitle1}>
            Complete digital solutions,from investigation <br />
            to {""}
            <span className={classes.specialText}>celebration.</span>
          </Typography>
          <Button variant="outlined" className={classes.learnButtonHero}>
            Learn More
          </Button>
        </Grid>
        {/* ends here Text and button  Grid*/}
        <Grid item>
          {/* Holds the image*/}
          <img
            alt="custom software icon"
            src={customSoftwareIcon}
            className={classes.icon}
          />
        </Grid>
        {/* end of image grid*/}
      </Grid>

      {/*Service Block ends here */}

      <Grid
        // IOS?Android dev section
        container
        direction="row"
        className={classes.serviceContainer}
        justify={matchesSM ? "center" : "flex-end"}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
          }}

          // className={classes.temp}
        >
          {/* Holds text and button*/}
          <Typography variant="h4" className={classes.h4}>
            IOS/Android Development
          </Typography>
          <Typography variant="subtitle1" className={classes.subTitle1}>
            Extend Functionality,Extend Access,Increase Engagement.
          </Typography>
          <Typography variant="subtitle1" className={classes.subTitle1}>
            Integrate your web experience or create a standalone app{" "}
            {matchesSM ? null : <br />}with either mobile platform
          </Typography>
          <Button variant="outlined" className={classes.learnButtonHero}>
            Learn More
          </Button>
        </Grid>
        {/* ends here Text and button  Grid*/}
        <Grid item>
          {/* Holds the image*/}
          <img
            alt="phone icon"
            src={mobileIcon}
            className={classes.icon}
            style={{
              marginRight: matchesSM ? 0 : "5em",
            }}
          />
        </Grid>
        {/* end of image grid*/}
      </Grid>
      {/* '''''''''''''''''''''Web Site dev section''''''''''''''''''''''''' */}
      <Grid
        container
        direction="row"
        className={classes.serviceContainer}
        justify={matchesSM ? "center" : undefined}
      >
        <Grid
          item
          // className={classes.temp}
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          {/* Holds text and button*/}
          <Typography variant="h4" className={classes.h4}>
            Web Development
          </Typography>
          <Typography variant="subtitle1" className={classes.subTitle1}>
            Reach More.Discover More.Sell More.
          </Typography>
          <Typography variant="subtitle1" className={classes.subTitle1}>
            Optimized for search Engines.built for speed.
          </Typography>
          <Button variant="outlined" className={classes.learnButtonHero}>
            Learn More
          </Button>
        </Grid>
        {/* ends here Text and button  Grid*/}
        <Grid item>
          {/* Holds the image*/}
          <img
            alt="website software icon"
            src={webSiteIcon}
            className={classes.icon}
          />
        </Grid>
        {/* end of image grid*/}
      </Grid>

      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: "100em", marginTop: "12em" }}
      >
        <Card className={classes.revolutionCard}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h3" gutterBottom className={classes.h3}>
              The Revolution
            </Typography>

            <Typography variant="subtitle1" className={classes.subTitle1}>
              Visionary insights coupled with cutting-edge technology is a
              recipe for revolution
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              Learn More
            </Button>
          </CardContent>
        </Card>
        <div
          className={classes.revolutionBackgound}
          // style={{ position: "absolute" }}
        />
      </Grid>
      {/* *************************** Contact section*********************************** */}

      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ height: "70em" }}
      >
        <Grid
          container
          item
          style={{ position: "absolute" }}
          direction={matchesMD ? "column" : "row"}
          spacing={matchesMD ? "5" : "0"}
          alignItems={matchesMD ? "center" : "inherit"}
        >
          <Grid item sm style={{ marginLeft: matchesMD ? 0 : "5em" }}>
            <Typography
              variant="h2"
              class={classes.h2}
              style={{ color: "white" }}
            >
              About Us
            </Typography>
            <Typography variant="subtitle2" class={classes.subTitle2}>
              Let's get personal
            </Typography>
            <Button variant="outlined" className={classes.learnButtonHero}>
              Learn More
            </Button>
          </Grid>

          <Grid
            item
            sm
            style={{
              marginRight: matchesMD ? 0 : "5em",
              textAlign: matchesMD ? "center" : "right",
            }}
          >
            <Typography
              variant="h2"
              class={classes.h2}
              style={{ color: "white" }}
            >
              Contact Us
            </Typography>
            <Typography variant="subtitle2" class={classes.subTitle2}>
              Say hi!
              <span role="img" aria-label="emoji-waving hand">
                👋
              </span>
            </Typography>
            <Button variant="outlined" className={classes.learnButtonHero}>
              Learn More
            </Button>
          </Grid>

          {/* <Grid item > </Grid> */}
        </Grid>
        <div className={classes.infoBackgound} />
      </Grid>

      {/* **************************** Contact section ends here */}
      <CallToAction />
    </Grid>
  );
}

/*
 */

/* 
ERROR LOGS:
A.Spelling error usually attributes,marginLeft(marginleft),variant(varaint)

TODO TASKS
*******************************
 1.Set minandmaxwidth  to 50em and 21em respectively for animation to make 
this makes it responsive  i small and big screens.use animation className
the marginLeft is set to 10 % to make it  a responsive spacing  on diff screen sizes
2.useTheme  allows theme to be used at component level,you do not need it of make styles
3.use heroTextContainer to make the button responsive at md and xs
4. make animation responsive for xs maxWidth 30 em

// */

// <Grid item>
// {/* Holds all texts of service block*/}
// <Typography variant="h4">Custom Software Development</Typography>
// <Typography variant="subtitle1" className={classes.subTitle1}>
//   Save Energy.Save Time.Save Money.
// </Typography>
// <Typography variant="subtitle" className={classes.subTitle1}>
//   Complete digital solutions,from investigation to {""}
//   <span className={classes.specialText}>
//     celebration. <br />
//   </span>
// </Typography>
// <Button variant="outlined" className={classes.learnButton}>
//   <span style={{ marginRight: 10 }}> Learn More</span>
// </Button>
// </Grid>
// <Grid item>
// <img src={customSoftwareIcon} alt="logo" />
// </Grid>
