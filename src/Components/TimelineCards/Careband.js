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
import Stack from "@mui/material/Stack";
import CodeIcon from "@mui/icons-material/Code";
import ColoredChip from "../ColoredChip";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import HomeButton from "../HomeButton";


export default function Careband() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "white",
        color: "black",
        borderTop: "1px solid lightgrey",
        borderRight: "1px solid lightGrey",
        borderLeft: "1px solid lightGrey",
        borderBottom: "1px solid lightGrey",
        borderRadius: "15px",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid  black" }}
      iconStyle={{
        background: "var(--mainRed)",
        color: "#fff",
      }}
      icon={<DesignServicesOutlinedIcon />}
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
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="left"
            spacing={0}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Careband Research Study
            </Typography>
            <Typography variant="overline">Fall 2019 - Spring 2020</Typography>
            <div className="redLine"></div>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: "wrap",
            }}
          >
            <ColoredChip
              icon={<CodeIcon />}
              title="Web Development"
              color="black"
              background="#ffcaca"
            />
          </Stack>
          <Typography variant="body1">
            A recent project, that was unfortunately affected by COVID, was an
            opportunity I had to work with an Indiana University Alumni doing
            research for his company <b>Careband</b>. Adam Sobol (CEO) worked
            with IU to investigate his products (wearable devices for those with
            mental illnesses) as they were applied in rural homes rather than
            assisted-living centers, where they currently are deployed.
          </Typography>
          <br />
          <Typography variant="body1">
            My experience here was gained as I interacted with participants,
            delved into the process of research (using the IRB and
            writing/recording documents), and communicated across team members
            to find more individuals to recruit into the project and obtain
            insights.
          </Typography>
          <br />
          <Typography variant="body1">
            Unfortunately, COVID essentially shut this project now as we no
            longer could interact with participants, enter their homes to
            install hardware, or conduct other IU-related tasks. I was moved
            off-campus and since retired from the project to pursue other items.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
}

