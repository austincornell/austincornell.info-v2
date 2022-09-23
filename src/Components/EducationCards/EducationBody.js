import React from "react";
import Grid from "@mui/material/Grid";
import EducationIntro from "./EducationIntro";
import InformaticsCard from "./InformaticsCard";
import MSISCard from "./MSISCard";

export default function AboutBody(){
    return (
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "7vh",
          marginBottom: "2vh",
        }}
      >
        <Grid item xs={12} data-aos="fade-up" data-aos-delay="200">
          <EducationIntro />
        </Grid>
        <Grid item xs={12} md={6}>
          <InformaticsCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <MSISCard />
        </Grid>
      </Grid>
    );
}