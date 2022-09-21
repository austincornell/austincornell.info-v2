import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";


function WorkHistoryTimeline() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
     return (
       <VerticalTimeline layout="1-column-left" lineColor="black">
         <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{
             background: "white",
             color: "black",
             borderTop: "4px solid black",
             borderRight: "1px solid lightGrey",
             borderLeft: "1px solid lightGrey",
             borderBottom: "1px solid lightGrey",
             borderRadius: "15px",
             boxShadow: "none",
           }}
           contentArrowStyle={{ borderRight: "7px solid  red" }}
           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
           icon={<InfoOutlinedIcon />}
         >
           <Accordion
             sx={{
               boxShadow: "none",
               "&:before": {
                 backgroundColor: "white",
               },
             }}
           >
             <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
             >
               <Typography
                 variant="h5"
                 sx={{
                   fontWeight: "bold",
                   color: "var(--mainRed)",
                 }}
               >
                 Accordion 1
               </Typography>
               {/* <br/>
               <Typography
                 variant="body1"
               >
                 Accordion 1
               </Typography> */}
             </AccordionSummary>
             <AccordionDetails>
               <Chip icon={<InfoOutlinedIcon />} label="With Icon" />
               <Chip icon={<InfoOutlinedIcon />} label="With Icon" />
               <Chip icon={<InfoOutlinedIcon />} label="With Icon" />
               <Chip icon={<InfoOutlinedIcon />} label="With Icon" />
               <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                 eget.
               </Typography>
             </AccordionDetails>
           </Accordion>
         </VerticalTimelineElement>
       </VerticalTimeline>
     );
}

export default WorkHistoryTimeline;