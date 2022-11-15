import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import LockIcon from "@mui/icons-material/Lock";
import BlackOutlineChip from "./BlackOutlineChip";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import DataArrayOutlinedIcon from "@mui/icons-material/DataArrayOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";


export default function StanleySecurity() {
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
      iconStyle={{
        background: "var(--mainRed)",
        color: "#fff",
      }}
      icon={<LockIcon />}
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
            <Typography variant="caption">STANLEY Security</Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Project Manager
            </Typography>
            <Typography variant="overline">Summer 2021 Internship</Typography>
            <div className="redLine"></div>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ flexWrap: "wrap" }}
            >
              <BlackOutlineChip
                icon={<SettingsOutlinedIcon />}
                title="Management"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<CloudDoneOutlinedIcon />}
                title="Cloud Technologies"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<DataArrayOutlinedIcon />}
                title="Data Design"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<InsertEmoticonOutlinedIcon />}
                title="Marketing"
                color="black"
                background="#ffcaca"
              />
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
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

