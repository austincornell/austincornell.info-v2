import React from "react";
import Typography from "@mui/material/Typography";
import HomeButton from "../HomeButton";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import { Box } from "@mui/system";


export default function AboutIntro() {
  return (
    <Box>
      
      <Typography
        variant="h6"
        xs={{
          fontWeight: "normal",
        }}
      >
        Here's a little more
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "var(--mainRed)",
        }}
      >
        About Myself
      </Typography>
      <div className="blackLine"></div>
      <Typography variant="body1">
        A massive welcome to my website! Truly. This section is going to detail
        some other personal information rather than just facts and figures that
        you can find elsewhere. My goal is for you to be able to understand more
        about me <b>as a person</b> rather than the boring stuff that you can
        find on a resume.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "25px",
        }}
      >
        <br />
        Just like most people, I could tell you that I work hard and show up and
        so on... But in reality, there is one thing that you should know:
      </Typography>
      <Typography
        variant="h6"
        sx={{
          borderLeft: "3px solid var(--mainRed)",
          paddingLeft: "10px",
        }}
      >
        When I do something, I do it because I care about it.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "5px",
        }}
      >
        <br />
        Many people forget that effort and work becomes hollow when they do not
        strive towards a goal because of their true interest. If I choose to
        work on something or pursue a career with you, then you <i>know</i> I am
        truly interested.
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
    </Box>
  );
}
