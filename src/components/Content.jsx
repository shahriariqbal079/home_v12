import React from "react";
import CustomCard from "./CustomCard";
import { Grid } from "@material-ui/core";
import constants from "./constants";
import ContentCategories from "./ContentCategories";

const Content = () => {
  const MakerCard = (Obj) => {
    /*   const {title, price, description, avatarUrl, imageUrl } = coffeMakerObj */

    return (
      <Grid item xs={10} sm={3}>
        <CustomCard {...Obj} />
      </Grid>
    );
  };

  return (
    <Grid container direction="column">

      <Grid item> <ContentCategories /> </Grid>

      <Grid container item spacing={4}>
        {constants.map((constObj) =>
          MakerCard(constObj)
        )}
      </Grid>

    </Grid>
  );
};

export default Content;
