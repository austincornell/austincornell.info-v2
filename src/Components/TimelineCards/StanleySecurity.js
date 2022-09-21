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
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import HomeButton from "../HomeButton";


export default function StanleySecurity() {
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
        background: "#f0c628",
        color: "#fff",
      }}
      icon={<HandymanOutlinedIcon />}
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
              STANLEY Security | Project Management
            </Typography>
            <Typography variant="overline">Summer 2021 Internship</Typography>
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
            This internship was a fantastic opportunity to really learn what it
            is like to contribute to a corporation on large-scale projects.
            During my tenure, I worked on multiple projects that all touched on
            the mobile application they were developing. Mainly, my projects
            fell into three categories:
            <ol>
              <li>Mobile App Localization</li>
              <li>Mobile App Usage Data Collection</li>
              <li>Mobile App Deployment - Marketing Materials</li>
            </ol>
            Firstly, I focused heavily on the process of localizing STANLEY's
            web and mobile apps to ensure they could be launched in different
            regions. This included everything from setting up language
            translations and format swaps, to updating privacy and other related
            documents.
          </Typography>
          <br />
          <Typography variant="body1">
            Secondly, I spent most of my time working with their mobile app to
            ultimately generate app-usage data via the{" "}
            <a className="hvr-sweep-to-top" href="https://segment.com/">
              Segment platform
            </a>
            . This means that I worked with contracted data scientists and
            product owners to create the set of events we would like to
            implement along with what insights we could derive from them.
          </Typography>
          <br />
          <Typography variant="body1">
            Lastly, I worked with the deployment of the mobile application to
            various app stores. More specifically, I worked with the marketing
            materials and renders that are shown on the banners/screenshot
            sections of these pages along with the app description. The goal was
            to make the listing both informative, but also void of any corporate
            or developer greyscale so users felt welcomed.
          </Typography>
          <br />
          <Typography variant="body1">
            This internship was also connected to me through the{" "}
            <a className="hvr-sweep-to-top" href="https://techpoint.org/xtern/">
              Indianapolis Xtern Program
            </a>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
}

