import React from "react";
import NavBar from "../Components/NavBar";
import VerticalNav from "../Components/VerticalNav";
import Container from "@mui/system/Container";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import HomeBody from "../Components/HomeBody";

function Education() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={1}>
        <VerticalNav />
      </Grid>
      <Grid item xs={11}>
        <NavBar />
        <Container>
          <span>This is Education</span>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Education;
