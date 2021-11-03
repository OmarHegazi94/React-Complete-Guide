import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems.jsx";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.DrawerToggle} onClick={props.toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
