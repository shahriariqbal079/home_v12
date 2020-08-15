import React from "react";
import "./App.css";

import Header from "./components/Header";
import HeaderTitle from "./components/HeaderTitle";
import OnTrend from "./components/OnTrend/OnTrend";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search";
import Body from "./components/Body";


import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container direction="column">
      
      <Grid item>
        <Header />
      </Grid>

      <Grid item>
        <HeaderTitle />
      </Grid>

      <Grid item>
        <Search />
        
        </Grid>

      <Grid item>
        <OnTrend />
      </Grid>

      <Grid item> <Body /> </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
