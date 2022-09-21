import React from "react";
import MobileNavBarItem from "./MobileNavBarItem";
import Drawer from '@mui/material/Drawer';
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import {Home, Info, Work, School} from "@mui/icons-material";
import { ReactComponent as GitHubSVG } from "../../images/github.svg";
import { ReactComponent as LinkedInSVG } from "../../images/linkedIn.svg";
import AustinLogoBlack from "../../images/austinLogoBlack.png";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";


export default function MobileNav() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item sm={11}>
            <Link to="/">
              <img src={AustinLogoBlack} className="logoStyle" />
            </Link>
          </Grid>
          <Grid item sm={1}>
            <IconButton
              size="large"
              float="right"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Drawer
          anchor="top"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <MobileNavBarItem linkName="Home" dest="/" icon={<Home />} />
            <MobileNavBarItem linkName="About" dest="/about" icon={<Info />} />
            <MobileNavBarItem
              linkName="Work History"
              dest="/workHistory"
              icon={<Work />}
            />
            <MobileNavBarItem
              linkName="Education"
              dest="/education"
              icon={<School />}
            />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
                sx={{
                    paddingBottom: "12px"
                }}
            >
              <a href="https://github.com/austincornell/austincornell.info-v2">
                <GitHubSVG className="hvr-grow" />
              </a>
              <a href="https://www.linkedin.com/in/austincornell/">
                <LinkedInSVG className="hvr-grow" />
              </a>
            </Stack>
          </Stack>
        </Drawer>
      </Box>
    );
  
}


