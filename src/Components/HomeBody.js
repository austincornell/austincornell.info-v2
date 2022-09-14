import React from "react";
import "../App.css";
import Box from "@mui/system/Box";
import { Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import HomeCard from "../Components/HomeCard";
import Grid from "@mui/material/Grid";
import AustinRed from "../images/austinCornell-1.jpg";


const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 1,
      type: "easeInOut",
    },
    
  },
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeInOut",
    },
  },
};



function HomeBody() {

    return (
      
      <Box>
        
        <HomeBodySection1 />
        <HomeBodySection2 />
      </Box>
    );

}

function HomeBodySection1(){
  const [ref, inView] = useInView();

  

  return (
    <Box
      sx={{
        height: "50vh",
        marginTop: "200px",
      }}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
    >
      <Grid container spacing={2}>
        <Grid item md={12} lg={4}>
          <img className="homeRedImage" src={AustinRed} alt="Austin Red" />
        </Grid>
        <Grid item md={12} lg={8}>
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
            <a class="hvr-sweep-to-top" href="">
              I'm super glad
            </a>{" "}
            you decided to visit. This website was coded by me (with help from
            various frameworks) as a side-project. I truly hope you can get some
            information out of it. The goal is to provide anyone with more
            detailed information about myself while also demonstrating some
            skills. To start, you can see a quick-bytes section below that
            should get you my most basic details. If you want more, click
            around! Don't forget you can email me by clicking button in the top
            right corner. Happy clicking!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function HomeBodySection2(){
  return (
    <Grid container spacing={3}>
      <Grid item sm={12} md={6}>
        <HomeCard className=""></HomeCard>
      </Grid>
      <Grid item sm={12} md={6}>
        <HomeCard className=""></HomeCard>
      </Grid>
      <Grid item sm={12} md={6}>
        <HomeCard className=""></HomeCard>
      </Grid>
      <Grid item sm={12} md={6}>
        <HomeCard className=""></HomeCard>
      </Grid>
    </Grid>
  );
}


export default HomeBody;