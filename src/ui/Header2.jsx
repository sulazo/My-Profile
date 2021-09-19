import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  // useScrollTrigger,
  Tabs,
  Button,
  Tab,
  Menu,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import logo from "../../assets/logo.svg";

// function ElevationScroll(props) {
//   const { children } = props;

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 8 : 0,
//   });
// }

export default function Header2(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEle, setAnchorEle] = useState(null);
  // const [open, setOpen] = useState(false);

  const handleChange = (_, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEle(e.currentTarget);
    // setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEle(null);
    // setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) return setValue(0);
    else if (window.location.pathname === "/services" && value !== 1)
      return setValue(1);
    else if (window.location.pathname === "/revolution" && value !== 2)
      return setValue(2);
    else if (window.location.pathname === "/about" && value !== 3)
      return setValue(3);
    else if (window.location.pathname === "/contact" && value !== 4)
      return setValue(4);
    else if (window.location.pathname === "/estimate" && value !== 5)
      return setValue(5);
  }, [value]);

  return (
    <React.Fragment>
      {/* <ElevationScroll> */}
      <AppBar
        position="fixed"
        color="primary"
        style={{ backgroundColor: "blue" }}
        // style={{ backgroundColor: "yellow" }}
      >
        <Toolbar disableGutters>
          <Button
            disableRipple
            component={Link}
            to="/"
            className={classes.logoContainer}
            onClick={() => setValue(0)}
          >
            <img src={logo} className={classes.logo} alt="company logo" />
          </Button>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.container}
          >
            <Tab label="Home" className={classes.tab} component={Link} to="/" />
            <Tab
              aria-owns={anchorEle ? "simple-menu" : undefined}
              aria-haspopup={anchorEle ? "true" : undefined}
              label="Services"
              className={classes.tab}
              component={Link}
              // onMouseOver={(e) => handleClick(e)}
              onMouseOver={handleClick}
              to="/services"
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
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Free Estimate
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEle}
            open={Boolean(anchorEle)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/services"
            >
              Services
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/customSoftware"
            >
              Custom Software
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/customSoftware"
            >
              Print Services
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setValue(1);
              }}
              component={Link}
              to="/customSoftware"
            >
              Project Development
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    // ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "10em"
  },
  container: {
    marginLeft: "auto"
  },
  tab: {
    // ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    // ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    color: "white"
  },
  logoContainer: {
    // height: "18em",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));
