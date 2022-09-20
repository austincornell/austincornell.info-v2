import React from "react";
import Box from "@mui/system/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AustinRed from "../images/austinCornell-1.jpg";
import {homeContent} from "../data/homePageContent";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import HomeButton from "./HomeButton";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AboutCard from "./HomeCards/AboutCard";
import EducationCard from "./HomeCards/EducationCard";
import PhilCard from "./HomeCards/PhilCard";
import ResumeCard from "./HomeCards/ResumeCard";
import FunCard from "./HomeCards/FunCard";
import ResourcesCard from "./HomeCards/ResourcesCard";

function HomeBody() {

    return (
      
      <Box>
        
        <HomeBodySection1 />
        <HomeBodySection2 />
      </Box>
    );

}

function HomeBodySection1(){

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "25vh",
        marginBottom: "50vh",
      }}
    >
      <Grid item md={12} lg={4}>
        <img
          className="homeImage"
          src={AustinRed}
          alt="Austin Cornell Portrait"
          data-aos="fade-right"
          data-aos-delay="200"
        />
      </Grid>
      <Grid item md={12} lg={8} data-aos="fade-up" data-aos-delay="200">
        <Typography variant="h5">Oh, hello there. My name is</Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "var(--mainRed)",
          }}
        >
          Austin Cornell
        </Typography>
        <Typography variant="body1">
          <a className="hvr-sweep-to-top" href="">
            I'm so glad
          </a>{" "}
          you decided to visit. This website was coded by me (with help from
          various frameworks) as a side-project. I truly hope you can get some
          information out of it. The goal is to provide anyone with more
          detailed information about myself while also demonstrating some
          skills. To start, you can see a quick-bytes section below that should
          get you my most basic details. If you want more, click around! Don't
          forget you can email me by clicking button in the top right corner.
          Happy clicking!
        </Typography>
        <HomeButton text="View Resume" icon={<DescriptionOutlinedIcon />} />
        <HomeButton text="GitHub" icon={<DescriptionOutlinedIcon />} />
        <HomeButton text="View Resume" icon={<DescriptionOutlinedIcon />} />
        <HomeButton text="View Resume" icon={<DescriptionOutlinedIcon />} />
      </Grid>
    </Grid>
  );
}

function HomeBodySection2(){
  return (
    <Grid container spacing={3} sx={{ marginBottom: "20vh" }}>
      <Grid item sm={12} md={4}>
        <AboutCard />
      </Grid>
      <Grid item sm={12} md={4}>
        <EducationCard />
      </Grid>
      <Grid item sm={12} md={4}>
        <PhilCard />
      </Grid>
      <Grid item sm={12} md={6}>
        <ResumeCard />
      </Grid>
      <Grid item sm={12} md={6}>
        <FunCard />
      </Grid>
      <Grid item sm={12}>
        <ResourcesCard/>
      </Grid>
    </Grid>
  );
}


export default HomeBody;