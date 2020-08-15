import React, { Component } from "react";

import Content from "./Content";

import { Grid } from "@material-ui/core";

export class Body extends Component {
  render() {
    return (
      <Grid container style={{ backgroundColor:' #f0f4f5', paddingBottom: '100px' }} >
        <Grid item xs={false} sm={2} />

        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>

        <Grid item xs={false} sm={2} />
      </Grid>
    );
  }
}

export default Body;
