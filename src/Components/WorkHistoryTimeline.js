import React from "react";
import {
  VerticalTimeline
} from "react-vertical-timeline-component";

import ThisWebsite from "./TimelineCards/ThisWebsite";
import StanleySecurity from "./TimelineCards/StanleySecurity";
import IndianaUniversity from "./TimelineCards/IndianaUniversity"
import Cromosoma from "./TimelineCards/Cromosoma";
import Careband from "./TimelineCards/Careband";
import Apple from "./TimelineCards/Apple";
import BestBuy from "./TimelineCards/BestBuy";
import Grid from "@mui/material/Grid";
import Deloitte from "./TimelineCards/Deloitte";
import TimelineIntro from "./TimelineCards/TimelineIntro";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);


function WorkHistoryTimeline() {
    
     return (
       <ThemeProvider theme={theme}>
         <Grid
           container
           spacing={4}
           sx={{
             marginTop: "7vh",
             marginBottom: "2vh",
           }}
         >
           <Grid item lg={4} data-aos="fade-up" data-aos-delay="200">
             <TimelineIntro />
           </Grid>
           <Grid item lg={8}>
             <VerticalTimeline layout="1-column-left" lineColor="black">
              <Deloitte/>
               <ThisWebsite />
               <IndianaUniversity />
               <StanleySecurity />
               <Cromosoma />
               <Careband />
               <Apple />
               <BestBuy />
             </VerticalTimeline>
           </Grid>
         </Grid>
       </ThemeProvider>
     );
}

export default WorkHistoryTimeline;