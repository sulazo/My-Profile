import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";

import { Typography, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgoundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },

  estimateButin: {
    color: "white",
    textTransform: "none",
    fontFamily: "Pacifico",
    fontSize: "1.5rem",
    // borderRadius:50, means 50 pixels
    borderRadius: 50,
    height: 80,
    width: 205,
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
    //padding: 20,
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

  learnButton: {
    //marginTop: 10,
    height: 35,
    //width: 95,
    //padding: 5,
    color: theme.palette.common.arcBlue,
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "0.7rem",
    fontWeight: "bold",
    borderRadius: 50,
    //marginRight: 40,
    borderColor: theme.palette.common.arcBlue,
    borderWidth: 2,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
      // marginRight: 0,
      // marginLeft: 0,
    },
  },

  subTitle1: {
    fontSize: "1.25rem",
    fontWeight: 300,
    color: "#868686",
    // marginBottom: "1em"
  },
  subTitle2: {
    fontSize: "1.5rem",
    fontWeight: 300,
    color: "white",
    // marginBottom: "1em"
  },
  sendButtoni: {
    fontSize: "1em",
    borderRadius: "60",
    height: "25",
    width: "245",
    backgroundColor: "theme.palette.common.arcOrange",
    "&:hover": { backgroundColor: theme.palette.secondary.light },
  },
}));

export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      //justify="space-between"
      justify={matchesSM ? "center" : "space-between"}
      alignItems="center"
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
      // style={{ height: "60em" }}
    >
      {/* ******Grid contains typography********* */}
      <Grid item>
        <Grid
          container
          // justifyContent="center"
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : "inherit",
          }}
          direction="column" // **item for sample software*
        >
          {/* <Grid item> */}
          <Typography variant="h2" className={classes.h2}>
            Simple Software.
            <br /> Revolutionary Results
          </Typography>
          <Typography variant="subtitle2" className={classes.subTitle2}>
            Take advantage of 21st Century
          </Typography>
          {/* </Grid> */}

          <Grid
            item
            container
            justifyContent={matchesSM ? "center" : undefined}
          >
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: "0" }}> Learn More</span>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* ***********item for free estimate button******** */}
      <Grid item>
        <Grid container justify={matchesSM ? "center" : "undefined"} item>
          {/* <Grid item> */}
          <Button variant="outlined" className={classes.estimateButin}>
            Free Estimate
          </Button>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

// export default function CallToAction() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Grid
//       container
//       //justify="space-between"
//       justify={matchesSM ? "center" : "space-between"}
//       alignItems="center"
//       className={classes.background}
//       direction={matchesSM ? "column" : "row"}
//       // style={{ height: "60em" }}
//     >
//       {/* ******Grid contains typography********* */}
//       <Grid item>
//         <Grid
//           container
//           // justifyContent="center"
//           style={{
//             marginLeft: matchesSM ? 0 : "5em",
//             textAlign: matchesSM ? "center" : "inherit",
//           }}
//           direction="column" // **item for sample software*
//         >
//           <Grid item>
//             <Typography variant="h2" className={classes.h2}>
//               Simple Software.
//               <br /> Revolutionary Results
//             </Typography>
//             <Typography variant="subtitle2" className={classes.subTitle2}>
//               Take advantage of 21st Century
//             </Typography>
//           </Grid>

//           <Grid
//             item
//             container
//             justifyContent={matchesSM ? "center" : undefined}
//           >
//             <Button variant="outlined" className={classes.learnButton}>
//               <span style={{ marginRight: "0" }}> Learn More</span>
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* ***********item for free estimate button******** */}
//       <Grid item>
//         <Grid container justify={matchesSM ? "center" : "undefined"} item>
//           <Grid item>
//             <Button variant="outlined" className={classes.estimateButin}>
//               Free Estimate
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
//TODO:
/* 
1.Hook up all the link  on the home page estimate button etc
2.pass  an index that not exist to clear active tab on estimage page
3.u cant props directly into a component,,use render instead or component={()=> <landingPage></lanfingPage>
3render={(props)=> <LandingPage {..props}setValue={setValue} setSelectedIndex={set..}
*/
