//TODO
//creating unique index for keys in  map functions e.g key ={`${opt}${index}`}
// key={`${option}${menuOptionsIndex}`} key={`${option}${tabOptions.activeIndex}`}

import { React, useState, useEffect } from "react";
import { Tabs, Tab, Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./MyCustomStyles";

export default function Tabx(props) {
  const classes = useStyles();
  // const [tabIndexValue, setTabIndexValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuOptions = [
    {
      menuName: "Services",
      link: "/service",
      activeIndex: 1,
      selectedIndex: 0,
    },
    { menuName: "RPOS", link: "/rpos", activeTabIndex: 1, selectedIndex: 1 },
    { menuName: "Print", link: "/print", activeTabIndex: 1, selectedIndex: 2 },
    {
      menuName: "Warranty",
      link: "/warranty",
      activeTabIndex: 1,
      selectedIndex: 3,
    },
  ];
  const tabsOptions = [
    { link: "/", name: "Home", activeTabIndex: 0 },
    {
      link: "/service",
      name: "Services",
      activeTabIndex: 1,
      mouseOver: handleClick,
    },
    { link: "/revolution", name: "The Revolution", activeTabIndex: 2 },
    { link: "/about", name: "About Us", activeTabIndex: 3 },
    { link: "/contact", name: "Contact Us", activeTabIndex: 4 },
  ];
  useEffect(() => {
    [...menuOptions, ...tabsOptions].forEach((tabOpt) => {
      switch (window.location.pathname) {
        case `${tabsOptions.link}`:
          if (props.tabIndexValue !== tabsOptions.activeIndex) {
            props.setTabIndexValue(tabOpt.activeIndex);
            if (
              tabOpt.selectedIndex &&
              tabOpt.selectedIndex !== selectedIndex
            ) {
              setSelectedIndex(tabOpt.selectedIndex);
            }
          }

          break;
        case "/estimate":
          props.setTabIndexValue(5);
          break;
        default:
          break;
      }
    });
  }, [props.tabIndexValue, tabsOptions, menuOptions]);

  function handleClose() {
    setAnchorEl(false);
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleChange(e, newValue) {
    props.setTabIndexValue(newValue);
  }

  function handleMenuItemClick(e, index) {
    setAnchorEl(null);
    setSelectedIndex(index);
  }

  return (
    <>
      <Tabs
        onChange={handleChange}
        value={props.tabIndexValue}
        className={classes.tabsContainer}
      >
        {tabsOptions.map((tabsOpt, index) => (
          <Tab
            key={`${tabsOpt}${index}`} //study this line for keys
            component={Link}
            to={tabsOpt.link}
            className={classes.tab}
            // label="Services"
            // onClick={handleClick}
            onMouseOver={tabsOpt.mouseOver}
            label={tabsOpt.name}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        size="medium"
        variant="contained"
        color="secondary"
        className={classes.estimateButton}
        onClick={() => {
          props.setTabIndexValue(5);
        }}
      >
        Free Estimate
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1302 }}
        elevation="0"
        keepMounted
      >
        {menuOptions.map((option, menuOptionsIndex) => (
          <MenuItem
            className={classes.menuItem}
            selected={menuOptionsIndex === selectedIndex}
            key={`${option}${menuOptionsIndex}`}
            onClick={(event) => {
              //index is not needed
              handleMenuItemClick(event, menuOptionsIndex);
              handleClose();
              props.setTabIndexValue(1);
            }}
            component={Link}
            to={option.link}
          >
            {option.menuName}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

// useEffect(() => {
//   const pathname = window.location.pathname;
//   const valueIndex = tabsOptions.findIndex(
//     (option) => option.link === pathname
//   );
//   const index = menuOptions.findIndex((option) => option.link === pathname);

//   if (pathname === "/estimate") {
//     setTabIndexValue(false);
//   } else {
//     setTabIndexValue(tabIndexValue === -1 ? 1 : valueIndex);
//   }
//   setSelectedIndex(index);
// }, [menuOptions,tabsOptions,tabIndexValue]);

// onClick={(event) => {
//   handleMenuItemClick(event, menuOptionsIndex);
//   setTabIndexValue(1);
//   handleClose();
//  }}

//Refactored  codes

/* <Tab component={Link} to="/" className={classes.tab} label="Home" />
        <Tab
          component={Link}
          to="/service"
          className={classes.tab}
          label="Services"
          
          onMouseOver={handleClick}
        />
        <Tab
          component={Link}
          to="/revolution"
          className={classes.tab}
          label="Revolution"
        />
        <Tab
          component={Link}
          to="/contact"
          className={classes.tab}
          label="Contact Us"
        />
        <Tab
          className={classes.tab}
          label="About Us"
          component={Link}
          to="/about"
        /> */
