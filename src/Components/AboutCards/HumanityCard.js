import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HomeButton from "../../Components/HomeButton";
import PhilHumanityPic from "../../images/phil-people.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";



export default function HumanityCard() {
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
        image={PhilHumanityPic}
      />

      <CardContent sx={{ minHeight: 370 }}>
        <Typography
          variant="overline"
          xs={{
            fontWeight: "normal",
          }}
        >
          Remember the
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{
            fontWeight: 500,
          }}
        >
          HUMANITY
        </Typography>
        <div className="redLine" />
        <Typography variant="body1">
          Work is more than just knowledge. It's all about people, their
          feelings, and their attitudes.
        </Typography>
        <Typography variant="body1">
          <br />
          The human side of every situation is what makes or breaks a team,
          project, customer, or interaction. Hence, my previous jobs are all
          surrounded with the idea of service. More specifically, serving people
          each day by giving them your best, while also taking the time to
          understand those around you.
        </Typography>
      </CardContent>
      <hr className="cardLine" />
      <CardActions>
        <HomeButton
          text="More About Humanity"
          icon={<InfoOutlinedIcon />}
          destination="https://www.huffpost.com/entry/the-value-of-humanity-in-the-workplace_b_9821828"
        />
      </CardActions>
    </Card>
  );
}
