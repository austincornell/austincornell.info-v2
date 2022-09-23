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
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";

export default function Apple() {
  const [expanded, setExpanded] = React.useState(false);

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
            <Typography variant="caption">Apple Inc.</Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Technical Advisor
            </Typography>
            <Typography variant="overline">Spring 2019 - Fall 2019</Typography>
            <div className="redLine"></div>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ flexWrap: "wrap" }}
            >
              <BlackOutlineChip
                icon={<ReportGmailerrorredOutlinedIcon />}
                title="Technical Troubleshooting"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<ChatOutlinedIcon />}
                title="Communication"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<EmojiObjectsOutlinedIcon />}
                title="Problem Solving"
                color="black"
                background="#ffcaca"
              />
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            My time at <b>Apple</b> is one of the, if not the top, best
            experiences I have had in my working history. Due to connections
            with Indiana University, the company had a great program setup for
            college students who wanted to get involved in their team.
          </Typography>
          <br />
          <Typography variant="body1">
            My position title was <i>College At Home</i> Advisor and I
            essentially helped customers who called in with their technical
            issues. I had to problem solve, troubleshoot, and follow strict
            guidelines while also connecting and communicating with each person
            I met.
          </Typography>
          <br />
          <Typography variant="body1">
            Ultimately, the experience was less about the tasks and more related
            to the soft skills learned along with the experience with the
            company. Being able to be involved with such a large entity was both
            rewarding and eye-opening.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
}

