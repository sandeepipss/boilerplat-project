import React from "react";
import { Container } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Container>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed & Coded by{" "}
            <a href="https://in.linkedin.com/in/sandeepnavale" rel="noopener">
              Sandeep Navale
            </a>
            .
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Footer;
