import { React } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  // SwipeableDrawer,
} from "@material-ui/core";
import logo from "../assets/logo.svg";
import useStyles from "./MyCustomStyles";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
//import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SwipeableTemporaryDrawer from "./SwapDrawer";
import Tabx from "./Tabx";
import { Link } from "react-router-dom";

function HeaderPractise(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        postion="fixed"
        // style={{
        //   backgroundColor: "#0B72B9",
        //   zIndex: theme.zIndex.modal + 1
        // }}
        className={classes.appBar}
      >
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            className={classes.logoContainer}
            disableRipple
          >
            <img src={logo} alt="company logo" className={classes.logo} />
          </Button>
          {matches ? <SwipeableTemporaryDrawer /> : <Tabx {...props} />}
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolBarMargin} />
      {/* <SwipeableTemporaryDrawer /> */}
    </>
  );
}
export default HeaderPractise;
//TODO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//forgot to add eevnt to handle change function
// I placed estimate button inside tabs.resolved by taking it out of tabs
//The tabs were too big and close to the logo .Resolved by applying  minwidth:60  on tabs
//wrong import of @material...
// need to learn more on MenuListprops and classes on <Menu>
// forgot to import useTheme for responsive ui and how 2 use useMediaQuery
