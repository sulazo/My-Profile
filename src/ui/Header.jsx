import { React, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/logo.svg";
import useStyles from "./Styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

// import { makeStyles } from "@material-ui/styles";

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [tabIndexValue, setTabIndexValue] = useState(0);
  const [anchorElx, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // const [open, setOpen] = useState(false); //determines visibilty of the menu

  useEffect(() => {
    if (window.location.pathname === "/" && tabIndexValue !== 0) {
      setTabIndexValue(0);
    } else if (window.location.pathname === "/service" && tabIndexValue !== 1) {
      setTabIndexValue(1);
    } else if (
      window.location.pathname === "/revolution" &&
      tabIndexValue !== 2
    ) {
      setTabIndexValue(2);
    } else if (window.location.pathname === "/about" && tabIndexValue !== 3) {
      setTabIndexValue(3);
    } else if (window.location.pathname === "/contact" && tabIndexValue !== 4) {
      setTabIndexValue(4);
    } else if (
      window.location.pathname === "/estimate" &&
      tabIndexValue !== 5
    ) {
      setTabIndexValue(5);
    }
    switch (window.location.pathname) {
      case "/":
        if (tabIndexValue !== 0) {
          setTabIndexValue(0);
        }
        break;

      case "/service":
        if (tabIndexValue !== 1) {
          setTabIndexValue(1);
          // setSelectedIndex(0);
        }
        break;
      case "/rpos":
        if (tabIndexValue !== 1) {
          setTabIndexValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/warranty":
        if (tabIndexValue !== 1) {
          setTabIndexValue(1);
        }
        break;
      case "/print":
        if (tabIndexValue !== 1) {
          setTabIndexValue(1);
          setSelectedIndex(2);
        }
        break;
      default:
        break;
    }
  }, [tabIndexValue]);
  // array of objects

  const route = [
    { name: "Home", link: "/" },
    { name: "Home", link: "/" },
    { name: "Home", link: "/" },
    { name: "Home", link: "/" },
    { name: "Home", link: "/" }
  ];
  const menuOptions = [
    // { menuName: "Services", link: "/service" },
    { menuName: "RPOS", link: "/rpos" },
    { menuName: "Warranty", link: "/warranty" },
    { menuName: "Print Services", link: "/print" }
  ];
  const handleChange = (event, tabIndexValue) =>
    setTabIndexValue(tabIndexValue);
  function handleClose(e) {
    // setOpen(false);
    setAnchorEl(null);
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
    // setOpen(true);
  }
  function handleMenuItemClick(event, i) {
    setAnchorEl(null);
    setSelectedIndex(i);
    // setOpen(false);
  }
  const tabsX = (
    <>
      <Tabs
        value={tabIndexValue}
        onChange={handleChange}
        className={classes.tabsContainer}
      >
        <Tab label="Home" className={classes.tab} component={Link} to="/" />
        <Tab
          label="Services"
          className={classes.tab}
          component={Link}
          to="/service"
          onMouseOver={handleClick}
        />
        <Tab
          label="The Revolution"
          className={classes.tab}
          component={Link}
          to="/revolution"
        />
        <Tab
          label="About Us"
          className={classes.tab}
          component={Link}
          to="/about"
        />
        <Tab
          label="Contact Us"
          className={classes.tab}
          component={Link}
          to="/contact"
        />
      </Tabs>
      <Button
        disableRipple
        variant="contained"
        size="medium"
        color="secondary"
        className={classes.estimateButton}
        component={Link}
        to="/estimate"
      >
        Free estimate
      </Button>

      {/* Menu should be inside the toolbar */}
      <Menu
        anchorEl={anchorElx}
        open={Boolean(anchorElx)} //{open}
        OnClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        keepMounted
        //@@@@@@@@@@@ used classes
        classes={{ paper: classes.menu }}
        elevation="0"
      >
        {menuOptions.map((menuIt3m, menuOptionsIndex) => {
          // map((element, index, array) => { ... } )
          return (
            <MenuItem
              key={`&(menuIt3m)(menuOptionsIndex)`}
              // classes={{root:classes.menuItem}}  check why classes is used here instead of className
              className={classes.menuItem}
              selected={
                // handlemenuItem click sets menuontions index to the index of the menu
                // here we check if the menuxoptionindex is = to the selectedindex which  was set by handleMenuclick function
                menuOptionsIndex === selectedIndex && tabIndexValue === 1
              }
              onClick={(event) => {
                handleMenuItemClick(event, menuOptionsIndex);
                setTabIndexValue(1);
                handleClose();
              }}
              component={Link}
              to={menuIt3m.link}
            >
              {menuIt3m.menuName}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem
            className={classes.drawerItem}
            onClick={() => {
              setTabIndexValue(0);
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={tabIndexValue === 0}
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            onClick={() => {
              setOpenDrawer(false);
              setTabIndexValue(1);
            }}
            divider
            button
            component={Link}
            to="/service"
            selected={tabIndexValue === 1}
          >
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            onClick={() => {
              setOpenDrawer(false);
              setTabIndexValue(2);
            }}
            divider
            button
            component={Link}
            to="/revolution"
            selected={tabIndexValue === 2}
          >
            <ListItemText>Revolution</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setTabIndexValue(3);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={tabIndexValue === 3}
          >
            <ListItemText className={classes.drawerItem}>About Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setTabIndexValue(4);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={tabIndexValue === 4}
          >
            <ListItemText className={classes.drawerItem}>
              Contact Us
            </ListItemText>
          </ListItem>
          {/*  // @@@@ */}
          <ListItem
            className={classes.drawItemEstimate}
            onClick={() => {
              setOpenDrawer(false);
              setTabIndexValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            selected={tabIndexValue === 5}
          >
            <ListItemText className={classes.drawerItem}>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );

  return (
    <div>
      {/* backgroundColor: "#0B72B9", backgroundColor: "#0B72B9", */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        // style={{ backgroundColor: "#0B72B9" }}
      >
        <Toolbar disableGutters>
          <Button component={Link} to="/" className={classes.logoContainer}>
            <img alt="Company logo" src={logo} className={classes.logo} />
          </Button>
          {matches ? drawer : tabsX}
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolBarMargin} />
    </div>
  );
}

// function handleClick(event) {
//   //contains info about where we clicked on d screen
//   setAnchorEl(event.currentTarget);
//   // setAnchorEl(e.currentEvent); //tells where the menu  where it's to be built/ rendered
//   // setOpen(true);
// }

/* <MenuItem
              className={classes.menuItem}
              onClick={() => {
                handleClose();
                setIndex(1);
              }}
              component={Link}
              to="/custom"
            >
              Custom Services
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={() => {
                handleClose();
                setIndex(1);
              }}
              component={Link}
              to="/print"
            >
              Print Services
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={() => {
                handleClose();
                setIndex(1);
              }}
              component={Link}
              to="/warranty"
            >
              Warranty Services
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={() => {
                handleClose();
                setIndex(1);
              }}
              component={Link}
              to="/rpos"
            >
              RPOS Services
            </MenuItem> */
