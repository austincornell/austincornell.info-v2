import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HomeButton from "../../Components/HomeButton";
import PhilDedicationPic from "../../images/phil-dedication.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";



export default function DedicationCard() {
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
        image={PhilDedicationPic}
      />

      <CardContent sx={{ minHeight: 370 }}>
        <Typography
          variant="overline"
          xs={{
            fontWeight: "normal",
          }}
        >
          My Philosophy
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{
            fontWeight: 500,
          }}
        >
          DEDICATION
        </Typography>
        <div className="redLine" />
        <Typography variant="body1">
          Raw dedication and pure interest is needed by all team members to
          truly create success.
        </Typography>
        <Typography variant="body1">
          <br />
          Often times in the work place, you find people who are uninterested or
          generally uninvested in the success of a project. For a truly
          performing team to exist, everyone must be interested and dedicated in
          what they are doing.
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
