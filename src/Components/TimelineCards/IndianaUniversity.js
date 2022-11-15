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
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import BlackOutlineChip from "./BlackOutlineChip";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CoPresentIcon from '@mui/icons-material/CoPresent';

export default function IndianaUniversity() {
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
      icon={<CoPresentIcon />}
    >
      <Accordion
        sx={{
          boxShadow: "none",
          "&:before": {
            backgroundColor: "white",
          },
        }}
        id="indianaUniversity"
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
              Instructor & Ambassador
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
                icon={<PeopleAltOutlinedIcon />}
                title="Leadership"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<LightbulbOutlinedIcon />}
                title="Teaching/Instruction"
                color="black"
                background="#ffcaca"
              />
              <BlackOutlineChip
                icon={<SettingsOutlinedIcon />}
                title="Management"
                color="black"
                background="#ffcaca"
              />
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Choosing to become an Assistant Instructor at Indiana University was
            one of the best decisions I have made, which explains why I was
            involved for most of my college career. At IU, I helped instruct an
            introductory course for informatics (I101) and a business course
            focused on technology (K201). These classes teach anyone who is
            interested in the tech field the basics ranging from databases to
            HTML and Python. Alongside this, I frequently led the team that
            represented the technology school to help recruit prospective
            students and aid them in making their higher education decisions.
          </Typography>
          <br />
          <Typography variant="body1">
            My responsibilities ranged from teaching lab sessions (usually
            coding lessons in various languages) to grading and monitoring
            student progress in the course. More recently, due to COVID moving
            our classes online, I migrated to creating material being taught in
            the class and gave insights into what I believe students should
            learn. Plus, I had the additional opportunity to take my talents to
            the{" "}
            <a
              className="hvr-sweep-to-top"
              href="https://infocpst.luddy.indiana.edu/ "
            >
              Informatics Capstone experience{" "}
            </a>
            and help revamp content designed for graduating seniors.
          </Typography>
          <br />
          <Typography variant="body1">
            From an experiential standpoint, teaching has truly shown me how
            awesome it is to see students advance so quickly in technical skills
            given only a single semester. Simultaneously, it is extremely
            rewarding to be able to see the progress of your teachings in the
            work around you. Keeping in touch with students as they move through
            the curriculum and seeing them grow professionally is something I
            continue to do.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
}



