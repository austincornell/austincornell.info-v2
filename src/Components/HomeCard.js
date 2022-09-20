import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function HomeCard(props) {
    return (
      <Card
        sx={{ maxWidth: 700 }}
        variant="outlined"
        data-aos="fade-up"
        data-aos-delay="{{200}}"
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.imagePref}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {props.titleText}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.detailText}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" disableElevation size="small">
            {props.buttonText}
          </Button>
        </CardActions>
      </Card>
    );

}

export default HomeCard;