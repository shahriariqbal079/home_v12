import React, { Component } from "react";
import { Grid } from "@material-ui/core";

/* ......styles...... */

const header_title = {
  marginTop:'5.6%',
  height: "4.3%",
  
  textAlign: "center",
  fontSize: " 42px",
  fontWeight: " normal",
  fontStretch: " normal",
  fontStyle: "normal",
  lineHeight: "1.43",
  letterSpacing: "normal",
};

export class HeaderTitle extends Component {
  render() {
    return (
      <Grid container style={header_title}>
        <Grid item xs={false} sm={3} />

        <Grid item xs={12} sm={6}>
            <p style={{margin: '0px' }}>  Explore hundreds of articles <br /> with just a click </p> 
        </Grid>

        <Grid item xs={false} sm={3} />
      </Grid>
    );
  }
}

export default HeaderTitle;
