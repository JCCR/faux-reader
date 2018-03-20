import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css';
import Base from "./Base";
import {
  grey100,
  grey400,
  grey500,
  grey900,
  red600,
  red700
} from "material-ui/styles/colors";

class App extends Component {
  muiTheme = getMuiTheme({
    palette: {
      primary1Color: red600,
      primary2Color: red700,
      primary3Color: grey400,
      accent1Color: grey900,
      accent2Color: grey100,
      accent3Color: grey500,
    }
  });

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <Base/>
      </MuiThemeProvider>
    );
  }
}

export default App;
