import React, {Component} from "react";
import classes from "./Layout.module.css";

import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer.jsx";
import Aux from "../Auxiliraly/Auxiliraly";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.jsx";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };

  toggleSidebarHandler = () => {
    let x = window.innerWidth;
    if (x <= 500) {
      this.setState((prevState) => {
        return {
          showSideDrawer: !prevState.showSideDrawer,
        };
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <Aux>
        <Toolbar toggleSidebar={this.toggleSidebarHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
