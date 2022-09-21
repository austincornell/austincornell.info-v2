import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import HomeButton from "../../Components/HomeButton";
import AustinChairPic from "../../images/austin-1-resize.jpg"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function AboutCard(props) {
  const matches = useMediaQuery("(min-width:600px)");
    if(matches){
      var maxWidthScreen = 1200;
    }else{
      var maxWidthScreen = 600;
    }
    return (
      <Card
        sx={{ maxWidth: maxWidthScreen, borderRadius: "15px" }}
        variant="outlined"
        data-aos="fade-up"
        data-aos-delay="{{200}}"
      >
        <CardMedia
          component="img"
          alt="Austin Cornell"
          height="140"
          image={AustinChairPic}
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
            About Me
          </Typography>
          <div className="redLine" />
          <Typography variant="body1">
            My name is <b>Austin Cornell</b> and I am a technology professional
            who focuses in development, business, solving problems, and getting
            results. I'm a nerd at heart, but also love cooking, music, and cats
            (duh).
          </Typography>
        </CardContent>
        <hr className="cardLine" />
        <CardActions>
          <HomeButton
            text="More About Me"
            icon={<InfoOutlinedIcon />}
            destination="/about"
          />
        </CardActions>
      </Card>
    );

}

export default AboutCard;