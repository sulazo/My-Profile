import { makeStyles } from "@material-ui/styles";
import background from "../assets/background.jpg";

const useStyles = makeStyles((theme) => ({
  sendButtoni: {
    fontSize: "1em",
    borderRadius: "60",
    height: "25",
    width: "245",
    backgroundColor: theme.palette.common.arcOrange,
    "&:hover": { backgroundColor: theme.palette.secondary.light },
  },

  toolBarMargin: {
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: { marginBottom: "4em" },
    [theme.breakpoints.down("sm")]: { marginBottom: "3em" },
    // height: "45px"
  },
  tabsContainer: {
    marginLeft: "auto",
  },

  tab: {
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1rem",
    minWidth: 60,
    // width: 160,
  },

  appBar: {
    backgroundColor: "#0B72B9",
    zIndex: theme.zIndex.modal + 1,
    // marginBottom: "350px"
    // backgroundColor: "secondary"
  },
  menu: {
    color: "white",
    zIndex: 1302,
    // backgroundColor: "grey",
    backgroundColor: "#0B72B9",
    borderRadius: "0",
  },
  menuItem: {
    opacity: 0.7,
    "&:hover": { opacity: 1, backgroundColor: "orange !important" },
  },
  menuRoot: {},
  logo: {
    padding: 0,
    height: "7em",
    // width: "10em"
    [theme.breakpoints.down("md")]: { height: "6em" },
    [theme.breakpoints.down("sm")]: { height: "5em" },
  },
  logoContainer: {
    // height: "8em",
    marginRight: "auto",
    padding: 0,
    "&:hover": {
      backgroundColor: "white",
    },
  },

  estimateButton: {
    textTransform: "none",
    borderRadius: "15px",
    height: "45px",
    //  marginLeft: "20px",
    //  marginRight: "25px",
    margin: "auto 20px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    // flexGrow: 1,
    //  marginRight: "auto",
    // marginRight:"10px",
    // "&:hover": {
    //   backgroundColor: "red"
    // }
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "white",
  },
  drawer: {
    backgroundColor: "#0B72B9",
  },
  drawerItem: {
    opacity: 0.7,
    color: "white", //color refers to text color
    // ..theme.typograpghy.tab
  },
  drawerItemSelected: {
    // opacity: 1,
    color: "white",
    "& .MuiListItemText-root": {
      opacity: 1,
    },

    //color refers to text color
    // ..theme.typograpghy.tab
  },

  drawerItemEstimate: {
    backgroundColor: "orange",
  },

  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgoundSize: "cover",
    // backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    // width: "100%",
    // [theme.breakpoints.down("sm")]: {
    //   backgroundImage: `url(${background})`,
    // },
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
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
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
  // backgroundColor: "orange",
  // //  "&:hover": { backgroundColor: "red" }

  // "&:hover": { backgroundColor: theme.palette.secondary.light },
}));
export default useStyles;
