import React, { Component } from "react";
import { Container, CssBaseline, Typography, Button } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.props.setDarkMode(!this.props.darkMode)}
        >
          Change Tsdflkaj
        </Button>
        <Switch
          checked={this.props.darkMode}
          onChange={() => this.props.setDarkMode(!this.props.darkMode)}
          name="checkedB"
          color="primary"
        />
      </div>
    );
  }
}

export default Banner;
