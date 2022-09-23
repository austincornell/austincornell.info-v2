import React from 'react'
import Box from '@mui/material/Box';
import { useState } from 'react';
import FaceIcon from "@mui/icons-material/Face";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import CodeIcon from "@mui/icons-material/Code";
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";
import KelleyPic from "../../images/iu-kelley-school.jpg";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import DataArrayOutlinedIcon from "@mui/icons-material/DataArrayOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);


export default function MSISCard() {
  const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
      // update the state to tab1
      setActiveTab("tab1");
    };
    const handleTab2 = () => {
      // update the state to tab2
      setActiveTab("tab2");
    };
    const handleTab3 = () => {
      // update the state to tab2
      setActiveTab("tab3");
    };

    const matches = useMediaQuery("(min-width:600px)");
  if (matches) {
    var maxWidthScreen = 1200;
  } else {
    var maxWidthScreen = 600;
  }
  return (
    <Card
      sx={{ maxWidth: maxWidthScreen, borderRadius: "15px", marginTop: "50px" }}
      variant="outlined"
      data-aos="fade-up"
      data-aos-delay="{{200}}"
    >
      <CardMedia
        component="img"
        alt="Kelley School"
        height="140"
        image={KelleyPic}
      />
      <CardContent sx={{ minHeight: 340 }}>
        <ThemeProvider theme={theme}>
          <Typography
            gutterBottom
            variant="overline"
            component="div"
            sx={{
              fontWeight: 500,
            }}
          >
            M.S. Information Systems - May 2022
          </Typography>
          <Box>{activeTab === "tab1" ? <Tab1 /> : ""}</Box>
          <Box>{activeTab === "tab2" ? <Tab2 /> : ""}</Box>
        </ThemeProvider>
      </CardContent>
      <hr className="cardLine" />
      <CardActions>
        <Stack direction="row" flexWrap="wrap">
          <Button
            startIcon={<ZoomInMapOutlinedIcon />}
            variant="contained"
            disableElevation
            size="small"
            sx={
              activeTab === "tab1"
                ? {
                    backgroundColor: "black",
                    border: "1px solid black",
                    borderRadius: "100px",
                    margin: "10px 5px 10px 5px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }
                : {
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderRadius: "100px",
                    color: "black",
                    margin: "10px 5px 10px 5px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }
            }
            onClick={handleTab1}
          >
            MSIS Core
          </Button>
          <Button
            startIcon={<VpnKeyOutlinedIcon />}
            variant="contained"
            disableElevation
            size="small"
            sx={
              activeTab === "tab2"
                ? {
                    backgroundColor: "black",
                    border: "1px solid black",
                    borderRadius: "100px",
                    margin: "10px 5px 10px 5px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }
                : {
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderRadius: "100px",
                    color: "black",
                    margin: "10px 5px 10px 5px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }
            }
            onClick={handleTab2}
          >
            Security and Data
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

function Tab1(){
    return (
      <Box>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{
            fontWeight: 500,
          }}
        >
          MSIS Core Courses
        </Typography>
        <div className="redLine" />
        <Typography gutterBottom variant="body1">
          My graduate program was split into two parts: a core and a
          specialization. <b>Core</b> involved drinking from a fire hose of
          information in all areas relating to information systems, including:
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          <ColoredChip
            icon={<PeopleAltOutlinedIcon />}
            title="Agile and Processes"
          />
          <ColoredChip icon={<CodeIcon />} title="Cloud Computing" />
          <ColoredChip icon={<CodeIcon />} title="Data Analytics" />
          <ColoredChip icon={<CodeIcon />} title="Data and Systems" />
          <ColoredChip
            icon={<EmojiObjectsOutlinedIcon />}
            title="Design Thinking"
          />
          <ColoredChip icon={<CodeIcon />} title="ERP and Automation" />
          <ColoredChip icon={<CodeIcon />} title="IT Architecture" />
          <ColoredChip
            icon={<EmojiObjectsOutlinedIcon />}
            title="IT Governance and Risks"
          />
          <ColoredChip
            icon={<EmojiObjectsOutlinedIcon />}
            title="IT Project Management"
          />
          <ColoredChip icon={<PeopleAltOutlinedIcon />} title="IT Strategy" />
          <ColoredChip
            icon={<EmojiObjectsOutlinedIcon />}
            title="Product Management"
          />
          <ColoredChip icon={<CodeIcon />} title="Emerging Technologies" />
          <ColoredChip
            icon={<PeopleAltOutlinedIcon />}
            title="Collaboration and Ethics"
          />
        </Stack>
      </Box>
    );
}

function Tab2() {
  return (
    <Box>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          fontWeight: 500,
        }}
      >
        Specialization Courses
      </Typography>
      <div className="redLine" />
      <Typography gutterBottom variant="body1">
        My specializations within the program were in{" "}
        <i>Enterprise Risk and Security Management</i> and <i>Data Analytics</i>
        . Here are some of the courses I took for them:
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        <ColoredChip icon={<CodeIcon />} title="Advanced IT Security" />
        <ColoredChip
          icon={<EmojiObjectsOutlinedIcon />}
          title="Cybersecurity Law"
        />
        <ColoredChip icon={<DataArrayOutlinedIcon />} title="Data Analytics" />
        <ColoredChip icon={<CodeIcon />} title="Predictive Analytics" />
        <ColoredChip
          icon={<EmojiObjectsOutlinedIcon />}
          title="Organizational Security"
        />
        <ColoredChip
          icon={<EmojiObjectsOutlinedIcon />}
          title="Deloitte Capstone Experience"
        />
      </Stack>
    </Box>
  );
}



function ColoredChip(props) {
  return (
    <Chip
      icon={props.icon}
      label={props.title}
      size="small"
      
      
      sx={{
        margin: "4px 2px 4px 2px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid var(--mainRed)"
      }}
    />
  );
}

