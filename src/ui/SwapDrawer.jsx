import { React, useState } from "react";
//import Button from "@material-ui/core"
// import Button from "@material-ui/core/Button";
import { IconButton, List, ListItem, ListItemText } from "@material-ui/core";
//import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./MyCustomStyles";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

export default function SwipeableTemporaryDrawer() {
  // const [anchorElement, setAnchorElement] = useState(null);
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [drawerIndex, setDrawerIndex] = useState(0);

  // function toggleDrawer(open, anchorElement) {
  //   setOpenDrawer({ [anchorElement]: open });
  // }

  return (
    <>
      {/* <Button onClick={() => setOpenDrawer(!openDrawer)}>List of Items</Button> */}

      {/* TODO:Replace Button with ICON BUTTON and menuIcon ,setOpen drawer toggles visibility*/}
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        // anchor={anchorElement}
        open={openDrawer} //determines visibility
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        // className={classes.drawer}
        classes={{ paper: classes.drawer }}
      >
        <div style={{ marginBottom: "5em" }} />
        <List>
          <ListItem
            selected={drawerIndex === 0}
            classes={{ selected: classes.drawerItemSelected }}
            onClick={() => {
              setOpenDrawer(false);
              setDrawerIndex(0);
            }}
            button
            component={Link}
            to="/"
            divider
          >
            <ListItemText
              className={classes.drawerItem}
              // className={
              //   drawerIndex === 0
              //     ? classes.drawerItemSelected
              //     : classes.drawerItem
              // }
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            selected={drawerIndex === 1}
            onClick={() => {
              setOpenDrawer(false);
              setDrawerIndex(1);
            }}
            button
            component={Link}
            to="/service"
            divider
          >
            <ListItemText
              className={classes.drawerItem}
              // className={
              //   drawerIndex === 1
              //     ? [classes.drawerItemSelected, classes.drawerItem]
              //     : [classes.drawerItem]
              // }
            >
              Service
            </ListItemText>
          </ListItem>

          <ListItem
            selected={drawerIndex === 2}
            onClick={() => {
              setOpenDrawer(false);
              setDrawerIndex(2);
            }}
            button
            component={Link}
            to="/about"
            divider
          >
            <ListItemText
              className={classes.drawerItem}

              // className={
              //   drawerIndex === 2
              //     ? classes.drawerItemSelected
              //     : classes.drawerItem
              // }
            >
              About Us
            </ListItemText>
          </ListItem>

          <ListItem
            selected={drawerIndex === 3}
            onClick={() => {
              setOpenDrawer(false);
              setDrawerIndex(3);
            }}
            button
            component={Link}
            to="/contact"
            divider
            //className={classes.drawerItem}
          >
            <ListItemText
              className={
                drawerIndex === 3
                  ? classes.drawerItemSelected
                  : classes.drawerItem
              }
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            // className={classes.drawerItemEstimate}
            selected={drawerIndex === 4}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            onClick={() => {
              setOpenDrawer(false);
              setDrawerIndex(4);
            }}
            button
            component={Link}
            to="/estimate"
            divider
          >
            <ListItemText
              className={classes.drawerItem}

              // className={[classes.drawerItem,classes.drawerItemEstimate]}
              // className={
              //   drawerIndex === 4
              //     ? classes.drawerItemSelected
              //     : classes.drawerItem
              // }
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        // style={{ marginLeft: "auto", marginRight: "10px" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
}
