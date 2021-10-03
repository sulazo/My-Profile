/* TODO
copy content of landing page and adjust justification and alignment
Add services page to the router
create style wiyhin the component
using fix width to align components
use media query and styles  for responsivenes
what is the difference between width and minwidth in css
comments
1.!Fixed width on icon and typography was used to make theCustom and website
 grid responsive and align
 2.I often make spelling errors or capitilization error
 3.IF  a property failes to work/effect changes check the spelling or caps
*/

import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Button, Typography, Card, CardContent } from "@material-ui/core";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import webSiteIcon from "../assets/websiteIcon.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  //   animation: {
  //     minWidth: "21em",
  //     maxWidth: "50em",
  //     [theme.breakpoints.down("sm")]: {
  //       maxWidth: "30em",
  //     },
  //     marginTop: "2em",
  //     marginLeft: "10%",
  //   },
  buttonContainer: {
    marginTop: "1em",
    marginLeft: "1em",
    minWidth: "27em",
    marginBottom: "2em",
  },
  //   estimateButin: {
  //     color: "white",
  //     textTransform: "none",
  //     fontFamily: "Pacifico",
  //     fontSize: "1rem",
  //     // borderRadius:50, means 50 pixels
  //     borderRadius: 50,
  //     height: 45,
  //     width: 145,
  //     marginRight: 40,
  //     backgroundColor: "orange",
  //     //  "&:hover": { backgroundColor: "red" }

  //     "&:hover": { backgroundColor: theme.palette.secondary.light },
  //   },
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

  //   learnButtonHero: {
  //     color: theme.palette.common.arcBlue,
  //     textTransform: "none",
  //     fontFamily: "Roboto",
  //     fontSize: "0.9rem",
  //     fontWeight: "bold",
  //     // borderRadius:50, means 50 pixels
  //     borderRadius: 50,
  //     height: 45,
  //     width: 145,
  //     color: "white",
  //     //marginRight: 40,
  //     borderColor: "white",
  //     borderWidth: 2,
  //     [theme.breakpoints.down("sm")]: { marginBottom: "1em" },
  //   },
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
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
    },
    //
  },
  //   typo: {
  //     fontFamily: "Raleway",
  //     fontWeight: 700,
  //     fontSize: "2.5rem",
  //     color: "#0B72B9",
  //     lineHeight: 1.5,
  //   },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

export default function ServicesPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*-----------------Service Header ---- */}
      <Grid
        container
        justifyContent={matchesMD ? "center" : undefined}
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
        item
      >
        <Typography variant="h2" gutterBottom className={classes.h2} style={{}}>
          Services
        </Typography>
      </Grid>

      {/* +++++++++++++++++++++++++++++ IOS?Android dev section Starts here.............. */}

      <Grid
        container
        // direction={matchesMD ? "column" : "row"}
        direction="row"
        className={classes.serviceContainer}
        justify={matchesMD ? "center" : "flex-end"}
      >
        <Grid
          item
          style={{
            textAlign: matchesMD ? "center" : undefined,
            width: matchesMD ? undefined : "35em",
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
          <Button
            variant="outlined"
            className={classes.learnButton}
            style={{ marginBottom: matchesMD ? "5em" : undefined }}
          >
            Learn More
          </Button>
        </Grid>
        {/* ends here Text and button  Grid*/}
        <Grid
          style={{
            // marginLeft: matchesMD ? "auto" : undefined,
            marginRight: matchesMD ? "auto" : undefined,
            marginBottom: matchesMD ? "5em" : undefined,
          }}
          item
        >
          {/* Holds the image*/}
          <img
            alt="phone icon"
            src={mobileAppsIcon}
            width="250em"
            className={classes.icon}
            // style={{
            //   marginRight: matchesSM ? 0 : "5em",
            // }}
          />
        </Grid>
        {/* end of */}
      </Grid>
      {/*...................Custom softwareBlock ........................................................ */}
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
          <Button
            variant="outlined"
            // component={Link}
            // to="/customu"
            component={Link}
            to="/custom"
            className={classes.learnButton}
          >
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

      {/* '''''''''''''''''''''Web Site dev section''''''''''''''''''''''''' */}
      <Grid
        container
        direction="row"
        style={{ marginBottom: "10em" }}
        className={classes.serviceContainer}
        justify={matchesSM ? "center" : "flex-end"}
      >
        <Grid
          item
          // className={classes.temp}
          style={{
            //marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
            width: "35em",
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
        <Grid item style={{ marginRight: "5em" }}>
          {/* Holds the image*/}
          <img
            alt="website software icon"
            src={webSiteIcon}
            className={classes.icon}
            width="250em"
          />
        </Grid>
        {/* end of image grid*/}
      </Grid>
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
