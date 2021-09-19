//  const drawer = (
//   <>
//     <SwipeableDrawer
//       disableBackdropTransition={!iOS}
//       disableDiscovery={iOS}
//       open={openDrawer}
//       onClose={() => setOpenDrawer(false)}
//       onOpen={() => setOpenDrawer(true)}
//       classes={{ paper: classes.drawer }}
//     >
//       <List disablePadding>
//         <ListItem
//           className={classes.drawerItem}
//           onClick={() => setOpenDrawer(false)}
//           divider
//           button
//           component={Link}
//           to="/"
//         >
//           <ListItemText disableTypography>Home</ListItemText>
//         </ListItem>
//         <ListItem
//           className={classes.drawerItem}
//           onClick={() => setOpenDrawer(false)}
//           divider
//           button
//           component={Link}
//           to="/service"
//         >
//           <ListItemText disableTypography>Services</ListItemText>
//         </ListItem>
//         <ListItem
//           className={classes.drawerItem}
//           onClick={() => setOpenDrawer(false)}
//           divider
//           button
//           component={Link}
//           to="/revolution"
//         >
//           <ListItemText>Revolution</ListItemText>
//         </ListItem>
//         <ListItem
//           onClick={() => setOpenDrawer(false)}
//           divider
//           button
//           component={Link}
//           to="/about"
//         >
//           <ListItemText className={classes.drawerItem}>About Us</ListItemText>
//         </ListItem>
//         <ListItem
//           onClick={() => setOpenDrawer(false)}
//           divider
//           button
//           component={Link}
//           to="/contact"
//         >
//           <ListItemText className={classes.drawerItem}>
//             Contact Us
//           </ListItemText>
//         </ListItem>
//         {/*  // @@@@ */}
//         <ListItem
//           className={classes.drawItemEstimate}
//           onClick={() => setOpenDrawer(false)}
//           divider
//           button
//           component={Link}
//           to="/estimate"
//         >
//           <ListItemText className={classes.drawerItem}>
//             Free Estimate
//           </ListItemText>
//         </ListItem>
//       </List>
//     </SwipeableDrawer>
//     <IconButton
//       className={classes.drawerIconContainer}
//       disableRipple
//       onClick={() => setOpenDrawer(!openDrawer)}
//     >
//       <MenuIcon />
//     </IconButton>
//   </>
// );
