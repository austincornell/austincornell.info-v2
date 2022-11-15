import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HomeButton from "../../Components/HomeButton";
import PhilCommunicationPic from "../../images/phil-communication.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";



export default function CommunicationCard() {
  return (
    <Card
      sx={{ borderRadius: "15px" }}
      variant="outlined"
      data-aos="fade-up"
      data-aos-delay="{{200}}"
    >
      <CardMedia
        component="img"
        alt="Austin Cornell"
        height="190"
        image={PhilCommunicationPic}
      />

      <CardContent sx={{ minHeight: 370 }}>
        <Typography
          variant="overline"
          xs={{
            fontWeight: "normal",
          }}
        >
          Focus on
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{
            fontWeight: 500,
          }}
        >
          COMMUNICATION
        </Typography>
        <div className="redLine" />
        <Typography variant="body1">
          Communication is the heart and soul behind human interaction. It's
          importance is unparalleled.
        </Typography>
        <Typography variant="body1">
          <br />
          Communication is the heart and soul behind human interaction. It acts
          as the catalyst for potraying your thoughts and feelings to those
          around you. Without proper, accurate, and punctual communication,
          nothing involving a team will be to the highest calibre.
        </Typography>
      </CardContent>
      <hr className="cardLine" />
      <CardActions>
        <HomeButton
          text="More About Communication"
          icon={<InfoOutlinedIcon />}
          destination="https://asana.com/resources/effective-communication-workplace"
        />
      </CardActions>
    </Card>
  );
}
