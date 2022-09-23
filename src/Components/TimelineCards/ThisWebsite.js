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
import WebIcon from "@mui/icons-material/Web";
import BlackOutlineChip from "./BlackOutlineChip";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

function ThisWebsite() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        border: "1px solid lightGray",
        borderRadius: "15px",
        boxShadow: "none",
        paddingBottom: "0px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  black" }}
      iconStyle={{ background: "var(--mainRed)", color: "#fff" }}
      icon={<WebIcon />}
    >
      <Accordion
        defaultExpanded={true}
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
              This Website
            </Typography>
            <Typography variant="overline">Updated Summer 2022</Typography>
            <div
              class="redLine"
              sx={{
                marginBottom: "10px",
              }}
            ></div>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              flexWrap="wrap"
            >
              <BlackOutlineChip
                icon={<CodeIcon />}
                title="Web Development"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<DesignServicesOutlinedIcon />}
                title="Design Skills"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<CloudDoneOutlinedIcon />}
                title="Cloud Technologies"
                color="black"
                background="#ffcaca"
              />
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "0",
            }}
          >
            Some may have noticed already, but this site you are currently
            looking at was created by me. That's right, you are swimming in my
            code right now. This website was designed to show off some of the
            technical skills that I have. It's a React project that utilizes
            some component/animation libraries and is hosted on Google Firebase.
            Here's the full stack list:
            <ol>
              <li>
                <a className="hvr-sweep-to-top" href="https://reactjs.org/">
                  React JS
                </a>{" "}
                for the core project
              </li>
              <li>
                <a className="hvr-sweep-to-top" href="https://mui.com/">
                  Material UI
                </a>{" "}
                for the component library
              </li>
              <li>
                <a
                  className="hvr-sweep-to-top"
                  href="https://michalsnik.github.io/aos/"
                >
                  Animate-on-Scroll
                </a>{" "}
                for certain animations
              </li>
              <li>
                <a
                  className="hvr-sweep-to-top"
                  href="https://ianlunn.github.io/Hover/"
                >
                  Hover.css
                </a>{" "}
                for class helpers
              </li>
              <li>
                <a
                  className="hvr-sweep-to-top"
                  href="https://stephane-monnot.github.io/react-vertical-timeline/#/"
                >
                  React Timeline
                </a>{" "}
                for timeline components
              </li>
              <li>
                <a
                  className="hvr-sweep-to-top"
                  href="https://firebase.google.com"
                >
                  Firebase by Google Cloud
                </a>{" "}
                for all hosting and backend services
              </li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
}

export default ThisWebsite;
