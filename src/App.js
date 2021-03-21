import React, { useState } from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
//import blue from "@material-ui/core/colors/blue";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import logo1 from "./logo.svg";
import GetData from "./Components/Getdata";
import Home from "./Components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",

      primary: {
        main: darkMode ? "#424242" : "#fafafa",
      },

      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="wrapper">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div className="main">
            <CssBaseline />
            <Container maxWidth="sm">
              <Typography variant="h1" component="h2">
                h1. Heading
              </Typography>
              <Home />
              <GetData />

              <Switch>
                <Route exact path="/"></Route>
                <Route exact path="/index.html"></Route>

                <Route path="/About" />

                <Route
                  path="*"
                  render={() => (
                    <div align="center">
                      {" "}
                      <h3>
                        Error404 : Page not found, page under construction{" "}
                      </h3>{" "}
                      <img src={logo1} alt="Smiley face"></img>
                    </div>
                  )}
                />
              </Switch>
            </Container>
          </div>
          <div>
            <Footer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
