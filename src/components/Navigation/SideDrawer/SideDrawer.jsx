import React from "react";
import classes from "./SideDrawer.module.css";

import Logo from "../../Logo/Logo.jsx";
import NavigationItems from "../NavigationItems/NavigationItems.jsx";

import Backdrop from "../../UI/Backdrop/Backdrop.jsx";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={props.open} closeModal={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
