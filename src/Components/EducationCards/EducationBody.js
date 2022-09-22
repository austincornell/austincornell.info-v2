import React from "react";
import Grid from "@mui/material/Grid";
import InformaticsCard from "./InformaticsCard";
import InformaticsAccordion from "./InformaticsAccordion";

export default function AboutBody(){
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <InformaticsCard/>
        </Grid>
        <Grid item xs={12} md={6}>
            <InformaticsAccordion/>
        </Grid>
      </Grid>
    );
}