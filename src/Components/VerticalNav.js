import React from "react";
import Box from "@mui/system/Box";
import {ReactComponent as GitHubSVG }from "../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../images/linkedIn.svg";
import AustinLogoBlack from "../images/austinLogoBlack.png";
import { Link } from "react-router-dom";

function VerticalNav(props) {
    return (
      <Box
        sx={{
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
        <Link to="/">
          <img src={AustinLogoBlack} className="logoStyle" />
        </Link>

        <Box
          sx={{
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
      </Box>
    );
}

export default VerticalNav;