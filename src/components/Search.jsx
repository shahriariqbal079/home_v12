import React, { Component } from "react";
import { Grid } from "@material-ui/core";






const search = {
    width: '80%',
    height: '43px',
   

}

const btn_search = {
    height: '44px'
}


export class Search extends Component {

  

  render() {

 


    return (
      <Grid container>
        <Grid item xs={false} sm={2} />

        <Grid item xs={12} sm={8} style={{ textAlign: 'center'}}>

        <input type="text" placeholder="Search.." style={search} />
        <button type="submit" style={btn_search} >Search</button>

        </Grid>

        <Grid item xs={false} sm={2} />
      </Grid>
    );
  }
}

export default Search;
