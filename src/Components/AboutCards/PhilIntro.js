import React from "react";
import Typography from "@mui/material/Typography";
import HomeButton from "../HomeButton";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import { Box } from "@mui/system";


export default function PhilIntro() {
  return (
    <Box>
      <div id="philosophy"></div>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "black",
          marginBottom: "10px",
          marginTop: "8vh",
        }}
      >
        My Philosophy
      </Typography>
      <div className="redLine"></div>
      <Typography variant="body1">
        There are three main areas of my work ethic that I like to touch on the
        most:
      </Typography>
      
    </Box>
  );
}
