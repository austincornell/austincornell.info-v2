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
import { Tooltip } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import CodeIcon from "@mui/icons-material/Code";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";
export default function InformaticsAccordion() {
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
      sx={{ maxWidth: maxWidthScreen, borderRadius: "15px" }}
      variant="outlined"
      data-aos="fade-up"
      data-aos-delay="{{200}}"
    >
      <CardContent sx={{ minHeight: 220 }}>
        <Box>{activeTab === "tab1" ? <Tab1 /> : ""}</Box>
        <Box>{activeTab === "tab2" ? <Tab2 /> : ""}</Box>
        <Box>{activeTab === "tab3" ? <Tab3 /> : ""}</Box>
      </CardContent>
      <hr className="cardLine" />
      <CardActions>
        <Button
          startIcon={<DeviceHubOutlinedIcon />}
          variant="contained"
          disableElevation
          size="medium"
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
          Informatics
        </Button>
        <Button
          startIcon={<DataObjectIcon />}
          variant="contained"
          disableElevation
          size="medium"
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
          Computer Science
        </Button>
        <Button
          startIcon={<BusinessCenterOutlinedIcon />}
          variant="contained"
          disableElevation
          size="medium"
          sx={
            activeTab === "tab3"
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
          onClick={handleTab3}
        >
          Business
        </Button>
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
          Informatics
        </Typography>
        <div className="redLine" />
        <Typography gutterBottom variant="body1">
          Here is a sample of some of my informatics courses:
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          <ColoredChip icon={<CodeIcon/>}title="Intro to Informatics" />
          <ColoredChip title="Social Informatics" />
          <ColoredChip title="Database Design" />
          <ColoredChip title="Web Design" />
          <ColoredChip title="Cloud Project Management" />
          <ColoredChip title="Computing and Environment" />
          <ColoredChip title="Computer Ethics" />
          <ColoredChip title="Info. System Development I" />
          <ColoredChip title="Info. System Development II" />
        </Stack>
      </Box>
    );
}

function Tab2() {
  return <p>HO</p>;
}

function Tab3(){
    return <p>HEYY</p>;
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

