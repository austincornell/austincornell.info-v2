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
import DataArrayOutlinedIcon from "@mui/icons-material/DataArrayOutlined";

export default function Cromosoma() {
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
            <Typography variant="caption">Indiana University</Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Cromosoma Capstone Project
            </Typography>
            <Typography variant="overline">
              Spring 2019 - Summer 2022
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
                icon={<CodeIcon />}
                title="Full Stack Development"
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
                icon={<DesignServicesOutlinedIcon />}
                title="Design Skills"
                color="black"
                background="#ffcaca"
              />
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            During my senior academic year, I had the fantastic opportunity to
            complete a Capstone Project that fulfilled the final requirement for
            my
            <a
              className="hvr-sweep-to-top"
              href="https://informatics.indiana.edu/programs/bs-informatics/index.html"
            >
              Informatics
            </a>
            degree. These projects can be wide and varied, but I had the
            opportunity to work with a team to directly make an impact with a
            small non-profit.
          </Typography>
          <br />
          <Typography variant="body1">
            My project was essentially to design, discuss, and implement
            technical systems for a Mexico-based non-profit named{" "}
            <b>Cromosoma</b>. This non-profit aims to helps small businesses in
            their area develop an online presence. Given the current times, this
            type of work is necessary to keeping local shops and businesses
            afloat.
          </Typography>
          <br />
          <Typography variant="body1">
            Hence, my team and I worked with Cromosoma to directly develop a
            system for collecting client information, storing that information,
            and automatically generating content (websites, marketing material,
            etc.) based off this information. The project has completed
            development and I can happily discuss it more, if requested.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
}

