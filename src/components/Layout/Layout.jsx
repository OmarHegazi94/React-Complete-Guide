import React from "react";
import Aux from "../../hoc/Auxiliraly";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
