import React from "react";
import Aux from "../../hoc/Auxiliraly";
import Toolbar from "../Navigation/Toolbar/Toolbar.jsx";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
