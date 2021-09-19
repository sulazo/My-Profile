//TODO
//1Import makeStyles   1.footer{background color :blue ,width:100%} 2.adornment:{width:"25em",verticalAlign:bottom }
// return <footer></footer>
//import footer into App
//index.html body style = "margin:0"
//dit Home div to height:2000px
// import footer  adrormnent as footerAdornment from ...Adornmnet.svg
///* add break points to adormrnt style 21 em  for md and 15em xs zindex 1302 pos relative
// link{fontFamily:Arial,fontsize:0.75rem,fontWeight:bold}
//gridItem{ margin:3em}
//import social icon ,belowimage create <grid ,add all icons
// for social icon use component={"a"} href=https.www
//In each Grid item  tell link to open in new page  or the appby   rel="noopener noreferrer" target="blank"
//justify="flex-end"
//make social icons responsive by using break points .down("xs")= height "2.5em" width 2.5em

import React from "react";
import { makeStyles } from "@material-ui/styles";
import footerlogo from "../assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

//import makeStyles from "@material"
// const useStyles=makeStyles((theme)=>{
//   footer:{
//     backgroundColor: "blue",
//   });
const useStyles = makeStyles((theme) => ({
  //( ) must follow the arrow function
  footer: {
    backgroundColor: "#0B72B9",
    width: "100%",
    position: "relative",
    zIndex: 1302,
    //  position:'relative',
  },
  adornment: {
    verticalAlign: "bottom",
    zIndex: "1302",
    width: "25em",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "19em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  gridItem: { margin: "3em" },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
  Icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "3em",
      width: "3em",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Arial",
    fontSize: "1em",
    fontWeight: "bold",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Hidden mdDown>
        <Grid justify="center" className={classes.mainContainer} container>
          {/*  */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => props.setTabIndexValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid className={classes.gridItem} item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/service"
                onClick={() => props.setTabIndexValue(1)}
              >
                Services
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                RPOS
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                Warranty
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                Print
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                Custom Services
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid className={classes.gridItem} item>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link}>
                The Revolution
              </Grid>
              <Grid item className={classes.link} component={Link}>
                Vision
              </Grid>
              <Grid item className={classes.link} component={Link}>
                Technology
              </Grid>
              <Grid item className={classes.link} component={Link}>
                Process
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid className={classes.gridItem} item>
            <Grid container direction="column" spacing={2}>
              <Grid className={classes.link} item component={Link} to="/" about>
                About Us
              </Grid>
              <Grid className={classes.link} item component={Link}>
                History
              </Grid>
              <Grid className={classes.link} item component={Link}>
                Team
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2}>
              <Grid
                className={classes.link}
                item
                component={Link}
                to="/contact"
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        // style={{ width: "100px" }}
        alt="footer"
        src={footerlogo}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          component={"a"}
          href="https://www.facebook.com"
          rel="no opener no referrer"
          target="blank"
          item
        >
          <img alt="facebook logo" src={facebook} className={classes.Icon} />
        </Grid>
        <Grid
          component={"a"}
          href="https://www.twitter.com"
          rel="no opener no referrer"
          target="blank"
          item
        >
          <img alt="twitter logo" src={twitter} className={classes.Icon} />
        </Grid>
        <Grid
          component={"a"}
          href="https://www.instagram.com"
          rel="no opener no referrer"
          target="blank"
          item
        >
          <img alt="insta logo" src={instagram} className={classes.Icon} />
        </Grid>
      </Grid>

      {/* <h1>Example</h1> */}
    </div>
  );
}
