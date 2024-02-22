import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../containers/navbar/Navbar";

const WithNavbar = (Component: any) => {
  return (props: any) => {
    return (
      <Grid
        container
        display="flex"
        justifyContent="center"
        gap={{ md: 3, xs: 1 }}
      >
        <Grid item xs={12} position="sticky" top={0} zIndex={9999999}>
          <Navbar />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Component {...props} />
        </Grid>
      </Grid>
    );
  };
};

export default WithNavbar;
