import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import HomeButton from "../HomeButton";
import KnifePic from "../../images/knife.png"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function FunCard(props) {
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
        <CardMedia
          component="img"
          alt="Custom Knife Photo"
          height="140"
          image={KnifePic}
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
            My Hobbies
          </Typography>
          <div className="redLine" />
          <Typography variant="body1">
            Work/Life balance is something that is invaluable in today's world.
            For me, I enjoy cooking, running, playing games (real or video), and
            spending time with the people I care about. At the time of writing
            this, I am deeply interested in
            <a
              className="hvr-sweep-to-top"
              href="https://www.chefknivestogo.com/"
            >
              chef's knives
            </a>
            (types and sharpening)!
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

export default FunCard;