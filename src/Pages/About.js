import React from "react";
import NavBar from "../Components/NavBar";
import VerticalNav from "../Components/VerticalNav";
import Container from "@mui/system/Container";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import AboutBody from "../Components/AboutCards/AboutBody";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNav from "../Components/Mobile/MobileNav";


function About() {
  const matches = useMediaQuery("(min-width:900px)");
  if (matches) {
    return (
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <VerticalNav />
        </Grid>
        <Grid item xs={11}>
          <NavBar />
          <Container>
            <AboutBody />
          </Container>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MobileNav />
          <Container>
            <AboutBody />
          </Container>
        </Grid>
      </Grid>
    );
  }
}

export default About;
