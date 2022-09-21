import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeButton from "../HomeButton";
import ResumePic from "../../images/resumeImage.jpg";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function ResumeCard(props) {
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
          alt="Resume Picture"
          height="140"
          image={ResumePic}
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
            My Resume
          </Typography>
          <div className="redLine" />
          <Typography variant="body1">
            Although I believe people are made of more than what's on a resume,
            I understand that a quick overview of my history is helpful. As
            such, you can download my resume below or consider connecting with
            me on{" "}
            <a
              className="hvr-sweep-to-top"
              href="https://www.linkedin.com/in/austincornell/"
            >
              LinkedIn
            </a>
            to see my education and work progressions.
          </Typography>
        </CardContent>
        <hr className="cardLine" />
        <CardActions>
          <HomeButton
            text="Download My Resume"
            icon={<FileDownloadOutlinedIcon />}
            destination="../../images/CornellAustin_Resume_Redacted.pdf"
          />
        </CardActions>
      </Card>
    );

}

export default ResumeCard;