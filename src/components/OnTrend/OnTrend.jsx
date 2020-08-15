import React, { Component } from "react";
import styles from "./OnTrend.module.css";
import { Grid } from "@material-ui/core";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export class OnTrend extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={false} sm={2} />

        <Grid item container direction="column" xs={12} sm={8}>
          <Grid item></Grid>

          <Grid
            item
            style={{
              textAlign: "center",
            }}
          >
            <span>Button </span>
          </Grid>
        </Grid>

        <Grid item xs={false} sm={2} />
      </Grid>
    );
  }
}

export default OnTrend;
