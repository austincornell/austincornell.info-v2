import React from "react";
import Box from "@mui/system/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AustinRed from "../images/austinCornell-1.jpg";
import HomeButton from "./HomeButton";
import AboutCard from "./HomeCards/AboutCard";
import EducationCard from "./HomeCards/EducationCard";
import PhilCard from "./HomeCards/PhilCard";
import ResumeCard from "./HomeCards/ResumeCard";
import FunCard from "./HomeCards/FunCard";
import ResourcesCard from "./HomeCards/ResourcesCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";


function HomeBody() {

    return (
      
      <Box>
        
        <HomeBodySection1 />
        <HomeBodySection2 />
      </Box>
    );

}

function HomeBodySection1(){
const matches = useMediaQuery("(min-width:900px)");

if(matches){
  var photoTopMargin = "25vh"
} else{
  var photoTopMargin = "0vh";
}
return (
  <Grid
    container
    spacing={2}
    sx={{
      marginTop: photoTopMargin,
      marginBottom: "10vh",
    }}
  >
    <Grid item sm={12} md={5} lg={4}>
      {matches && (
        <img
          className="homeImage"
          src={AustinRed}
          alt="Austin Cornell Portrait"
          data-aos="fade-right"
          data-aos-delay="200"
        />
      )}
      {!matches && (
        <img
          className="homeImageMobile"
          src={AustinRed}
          alt="Austin Cornell Portrait"
          data-aos="fade-right"
          data-aos-delay="200"
        />
      )}
    </Grid>
    {!matches && <div className="spacerDiv"></div>}
    <Grid
      item
      sm={12}
      md={7}
      lg={8}
      data-aos="fade-up"
      data-aos-delay="200"
      sx={{
        backgroundColor: "white",
        minHeight: "60vh",
      }}
    >
      <Typography variant="h5">Oh, hello there. My name is</Typography>

      {matches && (
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "var(--mainRed)",
          }}
        >
          Austin Cornell
        </Typography>
      )}

      {!matches && (
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "var(--mainRed)",
          }}
        >
          Austin Cornell
        </Typography>
      )}
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        <a className="hvr-sweep-to-top" href="">
          I'm so glad
        </a>{" "}
        you decided to visit. This website was coded by me (with help from
        various frameworks) as a side-project. I truly hope you can get some
        information out of it. The goal is to provide anyone with more detailed
        information about myself while also demonstrating some skills. To start,
        you can see a quick-bytes section below that should get you my most
        basic details. If you want more, click around! Don't forget you can
        email me by clicking button in the top right corner. Happy clicking!
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