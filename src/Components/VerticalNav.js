import React from "react";
import Box from "@mui/system/Box";
import NavBarItem from "./NavBarItem";
import "../App.css";
import {ReactComponent as GitHubSVG }from "../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../images/linkedIn.svg";

function VerticalNav(props) {
    return (
      <Box
        sx={{
          backgroundColor: "var(--darkGrey)",
          width: "75px",
          height: "98vh",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: "1rem",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Box>
          <a href="https://github.com/austincornell/austincornell.info-v2">
            <GitHubSVG className="hvr-grow" />
          </a>
        </Box>
        <Box>
          <a href="https://www.linkedin.com/in/austincornell/">
            <LinkedInSVG className="hvr-grow" />
          </a>
        </Box>
      </Box>
    );
}

export default VerticalNav;