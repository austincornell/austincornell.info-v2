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
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";
import LuddyPic from "../../images/iu-luddy-hall.jpg";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import DataArrayOutlinedIcon from "@mui/icons-material/DataArrayOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);


export default function InformaticsCard() {
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
        alt="Luddy School"
        height="140"
        image={LuddyPic}
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
            B.S. Informatics - May 2021
          </Typography>
          <Box>{activeTab === "tab1" ? <Tab1 /> : ""}</Box>
          <Box>{activeTab === "tab2" ? <Tab2 /> : ""}</Box>
          <Box>{activeTab === "tab3" ? <Tab3 /> : ""}</Box>
        </ThemeProvider>
      </CardContent>
      <hr className="cardLine" />
      <CardActions>
        <Stack direction="row" flexWrap="wrap">
          <Button
            startIcon={<DeviceHubOutlinedIcon />}
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
                      backgroundColor: "lightgrey",
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
                      backgroundColor: "lightgrey",
                      color: "black",
                    },
                  }
            }
            onClick={handleTab1}
          >
            Informatics
          </Button>
          <Button
            startIcon={<DataObjectIcon />}
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
                      backgroundColor: "lightgrey",
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
                      backgroundColor: "lightgrey",
                      color: "black",
                    },
                  }
            }
            onClick={handleTab2}
          >
            Computer Science
          </Button>
          <Button
            startIcon={<BusinessCenterOutlinedIcon />}
            variant="contained"
            disableElevation
            size="small"
            sx={
              activeTab === "tab3"
                ? {
                    backgroundColor: "black",
                    border: "1px solid black",
                    borderRadius: "100px",
                    margin: "10px 5px 10px 5px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "lightgrey",
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
                      backgroundColor: "lightgrey",
                      color: "black",
                    },
                  }
            }
            onClick={handleTab3}
          >
            Business
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
          Informatics Courses
        </Typography>
        <div className="redLine" />
        <Typography gutterBottom variant="body1">
          Informatics is a multidisciplinary field that connects technology with
          other fields like business. Here's a sample of some of the content I
          learned:
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          <ColoredChip icon={<CodeIcon />} title="Intro to Informatics" />
          <ColoredChip
            icon={<PeopleAltOutlinedIcon />}
            title="Social Informatics"
          />
          <ColoredChip
            icon={<PeopleAltOutlinedIcon />}
            title="Interface and Design"
          />
          <ColoredChip icon={<CodeIcon />} title="Database Design" />
          <ColoredChip icon={<CodeIcon />} title="Web Design" />
          <ColoredChip icon={<CodeIcon />} title="Cloud Project Management" />
          <ColoredChip
            icon={<EmojiObjectsOutlinedIcon />}
            title="Computing and Environment"
          />
          <ColoredChip
            icon={<EmojiObjectsOutlinedIcon />}
            title="Computer Ethics"
          />
          <ColoredChip icon={<CodeIcon />} title="Info. System Development I" />
          <ColoredChip
            icon={<CodeIcon />}
            title="Info. System Development II"
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
        Computer Science Courses
      </Typography>
      <div className="redLine" />
      <Typography gutterBottom variant="body1">
        My minor in Computer Science along with my own interest in coding
        drastically helped augment my skills as a developer. Here are some
        sample topics:
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        <ColoredChip icon={<CodeIcon />} title="Intro to C.S." />
        <ColoredChip icon={<CodeIcon />} title="Software Systems" />
        <ColoredChip
          icon={<DataArrayOutlinedIcon />}
          title="Discrete Structures"
        />
        <ColoredChip icon={<DataArrayOutlinedIcon />} title="Data Structures" />
        <ColoredChip icon={<CodeIcon />} title="Mobile App Development" />
        <ColoredChip
          icon={<DataArrayOutlinedIcon />}
          title="Distributed Systems"
        />
      </Stack>
    </Box>
  );
}

function Tab3(){
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
          Business Courses
        </Typography>
        <div className="redLine" />
        <Typography gutterBottom variant="body1">
          Business was an area I always wanted to explore and connect technology to. As such, I took the following classes to further my knowledge in the area:
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          <ColoredChip icon={<CodeIcon />} title="Computers in Business" />
          <ColoredChip
            icon={<AttachMoneyOutlinedIcon />}
            title="Business Accounting"
          />
          <ColoredChip
            icon={<EmojiObjectsOutlinedIcon />}
            title="Business Law"
          />
          <ColoredChip
            icon={<AttachMoneyOutlinedIcon />}
            title="Financial Management"
          />
          <ColoredChip icon={<PeopleAltOutlinedIcon />} title="Marketing" />
          <ColoredChip
            icon={<EmojiObjectsOutlinedIcon />}
            title="Operations Management"
          />
          <ColoredChip
            icon={<PeopleAltOutlinedIcon />}
            title="Leadership and Management"
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

