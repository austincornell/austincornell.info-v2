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
import BlackOutlineChip from "./BlackOutlineChip";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

export default function BestBuy() {
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
            <Typography variant="caption">Best Buy Inc.</Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Sales Associate
            </Typography>
            <Typography variant="overline">
              Summer 2017 - Summer 2019
            </Typography>
            <div className="redLine"></div>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ flexWrap: "wrap" }}
            >
              <BlackOutlineChip
                icon={<ChatOutlinedIcon />}
                title="Communication"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<LibraryBooksOutlinedIcon />}
                title="Technical Knowledge"
                color="black"
                background="#ffcaca"
              />
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            My time at <b>Best Buy</b> was on of my largest growth moments at it
            was my first real position I had spent a long period in. During my
            employment, I was a <i>Sales Associate</i> specializing in computing
            devices. It was here I learned most of my starting skills I use
            frequently.
          </Typography>
          <br />
          <Typography variant="body1">
            From strong communication and patience, to broad knowledge and
            problem solving, this position taught me the basis of soft skills
            and computer knowledge that ultimately helped me choose the field I
            am in today.
          </Typography>
          <br />
          <Typography variant="body1">
            Best Buy was a fantastic opportunity to learn about sales and
            technology, but also to collaborate with a talented team and grow as
            a communicator to future potential clients or teams.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
}

