import React from 'react'
import Grid from "@mui/material/Grid";
import AboutIntro from "./AboutIntro";
import AustinPortrait from "../../images/austin-cornell.jpg";
import HumanityCard from './HumanityCard';
import CommunicationCard from './CommunicationCard';
import DedicationCard from './DedicationCard';
import PhilIntro from './PhilIntro';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import PersonalLifeCard from './PersonalLifeCard';


let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function AboutBody() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "7vh",
          marginBottom: "2vh",
        }}
      >
        <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
          <AboutIntro />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-left"
          data-aos-delay="200"
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={AustinPortrait}
            alt="Austin Portrait"
            width={400}
            className="aboutImage"
          />
        </Grid>
        <Grid item xs={12} data-aos="fade-up" data-aos-delay="200">
          <PhilIntro />
        </Grid>
        <Grid item md={12} lg={4}>
          <HumanityCard />
        </Grid>
        <Grid item md={12} lg={4}>
          <CommunicationCard />
        </Grid>
        <Grid item md={12} lg={4}>
          <DedicationCard />
        </Grid>
        <Grid item sx={12} >
          <PersonalLifeCard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
