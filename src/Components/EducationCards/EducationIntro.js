import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HomeButton from "../HomeButton";
import LuddyPic from "../../images/iu-luddy-hall.jpg";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);


export default function EducationIntro() {
  const matches = useMediaQuery("(min-width:600px)");
  if (matches) {
    var maxWidthScreen = 1200;
  } else {
    var maxWidthScreen = 600;
  }
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h6"
        xs={{
          fontWeight: "normal",
        }}
      >
        Let's dig a little deeper into
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "var(--mainRed)",
        }}
      >
        My Education
      </Typography>
      <div className="blackLine"></div>
      <Typography variant="body1">
        Education is a <b>massive</b> part of the anyone's experience in a given
        field. To make things more transparent and easily accessible, I have
        detailed my two degrees and their associated components/classes. Feel free to click
        through the different sections to see the applicable material.
      </Typography>
      <Typography variant="body1" sx={{
        marginBottom: "5px"
      }}>
        <br />
        This way, you can get a better feel for <i>what</i> instruction I
        recieved while at <b>Indiana University</b>. As a reminder, my
        undergraduate degree was in{" "}
        <a
          className="hvr-sweep-to-top"
          href="https://informatics.indiana.edu/programs/bs-informatics/index.html"
        >
          Informatics
        </a>
        , while my graduate degree was in
        <a
          className="hvr-sweep-to-top"
          href="https://kelley.iu.edu/programs/ms-information-systems/index.html"
        >
          Information Systems
        </a>{" "}
        from the Kelley School of Business.
      </Typography>
      <HomeButton
        text="View Resume"
        icon={<FileDownloadOutlinedIcon />}
        destination="/files/CornellAustin_Resume_Redacted.pdf"
        isFile={true}
      />
      <HomeButton
        text="GitHub"
        icon={<CodeOutlinedIcon />}
        destination="https://github.com/austincornell/austincornell.info-v2"
      />
      <HomeButton
        text="LinkedIn"
        icon={<PeopleAltOutlinedIcon />}
        destination="https://www.linkedin.com/in/austincornell/"
      />
      <HomeButton
        text="Indiana University"
        icon={<AccountBalanceOutlinedIcon />}
        destination="https://iu.edu"
      />
    </ThemeProvider>
    
  );
}
