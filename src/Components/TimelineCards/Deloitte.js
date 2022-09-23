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

export default function Deloitte() {
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
            <Typography variant="caption">Deloitte</Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Solutions Engineer Analyst
            </Typography>
            <Typography variant="overline">Fall 2022 - Current</Typography>
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
                title="History Being Written"
                color="black"
                background="#ffcaca"
              />
              
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Woah! A little early... History is still being written...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
}

