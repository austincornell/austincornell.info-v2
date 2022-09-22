import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import HomeButton from "../HomeButton";
import IndianaPic from "../../images/indiana.jpg";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function InformaticsCard() {
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
        alt="Indiana University Campus"
        height="140"
        image={IndianaPic}
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
          My Education
        </Typography>
        <div className="redLine" />
        <Typography variant="body1">
          There are two degrees that I have completed at{" "}
          <b>Indiana University</b>. The first was a B.S. in{" "}
          <a
            className="hvr-sweep-to-top"
            href="https://informatics.indiana.edu/programs/bs-informatics/index.html"
          >
            Informatics
          </a>
          , with minors in Computer Science and Business. The second was a
          graduate degree in{" "}
          <a
            className="hvr-sweep-to-top"
            href="https://kelley.iu.edu/programs/ms-information-systems/index.html"
          >
            Information Systems
          </a>
          .
        </Typography>
      </CardContent>
      <hr className="cardLine" />
      <CardActions>
        <HomeButton
          text="See My Education"
          icon={<SchoolOutlinedIcon />}
          destination="/education"
        />
      </CardActions>
    </Card>
  );
}
