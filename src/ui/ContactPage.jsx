import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import { Typography, Button, TextField } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import { Dialog, DialogContentText, DialogActions } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import axios from "axios";
//import useStyles from "./MyCustomStyles";
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgoundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    paddingBottom: "31em",
    [theme.breakpoints.down("sm")]: {
      // paddingBottom: 0,
      // paddingTop: "30em",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    marginTop: "5em",
    borderRadius: 5,
    marginBottom: "1em",
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
    marginRight: "2em",
    marginLeft: "5em",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: "2em",
      marginTop: "1em",
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
    padding: 5,
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
    textTransform: "none",
    fontSize: "1.5em",
    borderRadius: 60,
    fontFamily: "Pacifico",
    height: 45,
    width: 245,
    color: "white",
    backgroundColor: theme.palette.common.arcOrange,
    "&:hover": { backgroundColor: theme.palette.secondary.light },
    marginBottom: "1em",
  },
  sendDiagButtoni: {
    textTransform: "none",
    fontSize: "1em",
    borderRadius: 60,
    fontFamily: "Pacifico",
    height: 45,
    width: 145,
    color: "white",
    // textTransform: "none",
    backgroundColor: theme.palette.common.arcOrange,
    "&:hover": { backgroundColor: theme.palette.secondary.light },
    // marginBottom: "1em",
  },
}));
export default function ContactPage() {
  const classes = useStyles();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [openDiag, setOpenDiag] = useState(false);

  const [message, setMessage] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  // const onConfirm = () => {
  //    const cors = "https://cors-anywhere.herokuapp.com/";
  //   axios
  //     .get("https://us-central1-material-ui-617a1.cloudfunctions.net/sendMail")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const onConfirm = () => {
    const cors = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        `${cors}https://us-central1-material-ui-617a1.cloudfunctions.net/sendMail`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // const onConfirm = () => {
  //   const cors = "https://cors-anywhere.herokuapp.com/";
  //   axios
  //     .get(
  //       `${cors}https://us-central1-material-ui-617a1.cloudfunctions.net/sendMail`
  //     )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  function onChangeX(event) {
    let valid;
    console.log(valid);
    switch (event.target.id) {
      case "email":
        // setEmail(event.target.email);
        setEmail(event.target.value);

        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else setEmailHelper("");
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Not a valid phone number");
        } else setPhoneHelper("");
        break;
      default:
        break;
    }
  }

  // function handleDiagClose() {
  //   setOpenDiag(false);
  // }
  // same as below
  const handleDiagClose = () => setOpenDiag(false);
  return (
    // <h1>I am on this Page ContactPage</h1>
    <Grid container direction="row">
      <Grid
        // style={{ textAlign: "center" }}
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid
            // style={{ textAlign: "center" }}
            //alignItems="center"
            container
            direction="column"
          >
            <Grid item>
              <Typography
                variant="h2"
                style={{ lineHeight: 1 }}
                className={classes.h2}
              >
                Contact Us
              </Typography>

              <Typography
                variant="body1"
                style={{ color: theme.palette.common.arcBlue }}
              >
                We are waiting
              </Typography>
            </Grid>

            {/*  */}

            <Grid
              justifyContent=""
              container
              item
              direction="row"
              style={{ marginTop: "2em" }}
            >
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography style={{ fontSize: "1em" }}>
                  <a
                    href="tel:9784949924"
                    style={{
                      textDecoration: "none",
                      // "&:hover": {
                      //   backgroundColor: "yellow",
                      // },
                      color: "inherit",
                    }}
                  >
                    (978)-494-9924
                  </a>
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              item
              direction="row"
              justifyContent=""
              style={{ marginBottom: "2em" }}
            >
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography style={{ fontSize: "1em" }}>
                  <a
                    href="mailto:sulazo@yahoo.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    adesholashokunbi.ng@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            {/*  */}
            <Grid container direction="column" style={{ maxWidth: "20em" }}>
              <Grid container item>
                <form noValidate autoComplete="off">
                  <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                      fullWidth
                      label="Name"
                      id="name"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </Grid>

                  <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                      fullWidth
                      error={emailHelper.length !== 0}
                      helperText={emailHelper}
                      label="Email"
                      id="email"
                      value={email}
                      onChange={onChangeX}
                      // onChange={(event) => {
                      //   setEmail(event.target.value);
                      // }}
                    />
                  </Grid>

                  {/* <Grid item style={{ marginBottom: "0.5em" }}> */}
                  <TextField
                    helperText={phoneHelper}
                    error={phoneHelper.length !== 0}
                    fullWidth
                    label="Phone"
                    id="phone"
                    value={phone}
                    onChange={onChangeX}
                    // onChange={(event) => {
                    //   setPhone(event.target.value);
                    // }}
                  />
                  {/* </Grid> */}

                  {/* <Grid item> */}
                  <TextField
                    fullWidth
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                    InputProps={{ disableUnderline: true }}
                    multiline
                    id="message"
                    rows="10"
                    className={classes.message}
                    style={{ maxWidth: "20em" }}
                  />
                  {/* </Grid> */}
                </form>
              </Grid>
            </Grid>

            <Grid
              container
              justify="center"
              item
              style={{ marginTop: "2em", marginBottom: "2em" }}
            >
              <Button
                disabled={
                  // return true if any of the follwing condition is satisfied
                  name.length === 0 || //return tru if length is 0
                  message.length === 0 ||
                  phoneHelper.length !== 0 || // return true if phonehelper contains sometin !==0
                  // phone.length === 0 ||
                  // email.length === 0 ||
                  emailHelper.length !== 0
                }
                //fullWidth
                variant="contained"
                className={classes.sendButtoni}
                onClick={() => {
                  setOpenDiag(true);
                }}
              >
                Send Message
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        PaperProps={{
          style: {
            // paddingBottom: "5em",
            // paddingTop: "5em",
            paddingRight: "5em",
            paddingLeft: "5em",
          },
        }}
        open={openDiag}
        // fullScreen
        // fullScreen={fullScreen}
        // fullScreen={mobileView}
        style={{ zIndex: 1302 }}
        onClose={handleDiagClose}
      >
        <DialogContent>
          <Grid container direction="column" style={{ minWidth: "30em" }}>
            <Grid container item justifyContent="center">
              <Typography variant="h5" gutterBottom className={classes.h4}>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              {/* <form noValidate autoComplete="off"> */}
              <TextField
                fullWidth
                label="Name"
                id="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                label="Email"
                id="email"
                value={email}
                onChange={onChangeX}
                // onChange={(event) => {
                //   setEmail(event.target.value);
                // }}
              />
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                helperText={phoneHelper}
                error={phoneHelper.length !== 0}
                fullWidth
                label="Phone"
                id="phone"
                value={phone}
                onChange={onChangeX}
                // onChange={(event) => {
                //   setPhone(event.target.value);
                // }}
              />
            </Grid>

            {/* <Grid item> */}
            <TextField
              fullWidth
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              InputProps={{ disableUnderline: true }}
              multiline
              id="message"
              rows="10"
              className={classes.message}
              // style={{ maxWidth: "20em" }}
            />
            {/* </Grid> */}
            {/* </form> */}
            {/* </Grid> */}
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
            style={{ marginTop: "2em", marginBottom: "2em" }}
          >
            <Grid item>
              <Button
                style={{ textTransform: "none" }}
                variant="contained"
                onClick={handleDiagClose}
                // size="small"
              >
                Close
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  // return true if any of the follwing condition is satisfied
                  name.length === 0 || //return tru if length is 0
                  message.length === 0 ||
                  phoneHelper.length !== 0 || // return true if phonehelper contains sometin !==0
                  phone.length === 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0
                }
                //fullWidth
                variant="contained"
                className={classes.sendDiagButtoni}
                // style={{ height: 45, width: 345 }}
                onClick={onConfirm}
              >
                Send Message
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
          {/* <DialogContentText>
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText> */}
        </DialogContent>
      </Dialog>
      <Grid
        container
        direction={matchesMD ? "column" : "row"}
        item
        lg={8}
        xl={9}
        className={classes.background}
        alignItems="center"
        // alignItems={matchesMD ? "center" : undefined}
        // style={{ height: "70em" }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            //alignItems="center" mis aligned learn button
            style={{
              marginLeft: mobileView ? 0 : "5em",
              textAlign: matchesMD ? "center" : "inherit",
            }}
            // direction="row"
            //direction={matchesMD ? "column" : "row"} // **item for sample software*
          >
            {/* <Grid container direction="column" item> */}
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
              justifyContent={matchesMD ? "center" : undefined}
            >
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: "0" }}> Learn More</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* ***********item for free estimate button******** */}
        <Grid item>
          <Grid
            container
            //alignItems={matchesMD ? "center" : undefined}
            //justify={matchesMD ? "center" : "undefined"}
            item
          >
            <Grid item>
              <Button variant="outlined" className={classes.estimateButin}>
                Free Estimate
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
//TODO:
/* 
Error log
a.margin: 5, or should not be margin:"5px" (i.e boderRadius="5px") will not take effect
a1.pixel may be ommited

1.Create state for text value to control the textfield set Name,
2use onChange to create

*/
