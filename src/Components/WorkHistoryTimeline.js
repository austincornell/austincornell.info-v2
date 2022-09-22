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
import Typography from "@mui/material/Typography";

function WorkHistoryTimeline() {
    
     return (
       <Grid container>
         <Grid item lg={3}>
          
             <Typography
               variant="h3"
               sx={{
                 fontWeight: "bold",
                 color: "var(--mainRed)",
               }}
             >
               Work History
             </Typography>
          
           <Typography variant="body1">
             
             you decided to visit. This website was coded by me (with help from
             various frameworks) as a side-project. I truly hope you can get
             some information out of it. The goal is to provide anyone with more
             detailed information about myself while also demonstrating some
             skills. To start, you can see a quick-bytes section below that
             should get you my most basic details. If you want more, click
             around! Don't forget you can email me by clicking button in the top
             right corner. Happy clicking!
           </Typography>
         </Grid>
         <Grid item lg={9}>
           <VerticalTimeline layout="1-column-left" lineColor="black">
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
     );
}

export default WorkHistoryTimeline;