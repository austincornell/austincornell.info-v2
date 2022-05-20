import React from "react";
import "../App.css";
import Box from "@mui/system/Box";
import { Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import HomeCard from "../Components/HomeCard";
import Grid from "@mui/material/Grid";
import AustinRed from "../images/austinRed.jpg";


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
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <Box
      sx={{
        height: "50vh",
        color: "white",
        marginTop: "400px",
      }}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      component={motion.div}
      animate={control}
    >
      <img className="homeRedImage" src={AustinRed} alt="Austin Red" />
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
        I'm super glad you decided to visit. This website was coded by me (with
        help from various frameworks) as a side-project. I truly hope you can
        get some information out of it. The goal is to provide anyone with more
        detailed information about myself while also demonstrating some skills.
        To start, you can see a quick-bytes section below that should get you my
        most basic details. If you want more, click around! Don't forget you can
        email me by clicking button in the top right corner. Happy clicking!
      </Typography>
    </Box>
  );
}

function HomeBodySection2() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <Box
      sx={{
        height: "50vh",
        color: "white",
        marginTop: "400px",
      }}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      component={motion.div}
      animate={control}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          color: "var(--mainRed)",
        }}
      >
        This is a test 2
      </Typography>
      <Typography variant="body1">
        I am so glad you decided to check this page out
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <HomeCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeBody;