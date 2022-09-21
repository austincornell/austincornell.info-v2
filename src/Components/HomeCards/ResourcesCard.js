import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HomeButton from "../HomeButton";
import ResourcePic from "../../images/resourcesImage.jpg";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import PanToolAltOutlinedIcon from "@mui/icons-material/PanToolAltOutlined";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function ResourcesCard(props) {
    return (
      <Card
        sx={{ maxWidth: 1200, borderRadius: "15px" }}
        variant="outlined"
        data-aos="fade-up"
        data-aos-delay="{{200}}"
      >
        <CardMedia
          component="img"
          alt="Resources Image"
          height="140"
          image={ResourcePic}
        />

        <CardContent sx={{ minHeight: 220 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              fontWeight: 500,
            }}
          >
            Quick Resources
          </Typography>
          <div className="redLine" />
          <Typography variant="body1">
            This site was a blast to make and really helped refine some skills
            in JavaScript, React, and cloud deployment via Google's
            <a className="hvr-sweep-to-top" href="https://firebase.google.com">
              Firebase.
            </a>
            However, below are some other frameworks and resources that I used
            to help build some of the interactions and components found on the
            site. They were a huge time saver so feel free to check them out!
          </Typography>
        </CardContent>
        <hr className="cardLine" />
        <CardActions>
          <Stack
            direction="row"
            
            sx={{
              flexWrap: "wrap"
            }}
          >
            <HomeButton
              text="Material UI"
              icon={<SourceOutlinedIcon />}
              destination="https://mui.com/"
            />
            <HomeButton
              text="Animate On Scroll"
              icon={<MouseOutlinedIcon />}
              destination="https://michalsnik.github.io/aos/"
            />
            <HomeButton
              text="Hover.css"
              icon={<PanToolAltOutlinedIcon />}
              destination="https://ianlunn.github.io/Hover/"
            />
          </Stack>
        </CardActions>
      </Card>
    );

}

export default ResourcesCard;