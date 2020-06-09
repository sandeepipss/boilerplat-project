import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class Navbar extends React.Component {
  render() {
    const classes = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Button variant="contained" href="/">
              Home
            </Button>
            <Button variant="contained" href="/">
              About
            </Button>
            <div className={classes.switch}>
              <Switch
                checked={this.props.darkMode}
                onChange={() => this.props.setDarkMode(!this.props.darkMode)}
                name="checkedB"
                label="secondary"
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
