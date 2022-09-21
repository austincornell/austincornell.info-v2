import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import HomeButton from "../HomeButton";
import PhilPic from "../../images/philosophy.png"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function PhilCard(props) {
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
         alt="green iguana"
         height="140"
         image={PhilPic}
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
           My Philosophy
         </Typography>
         <div className="redLine" />
         <Typography variant="body1">
           My philosophy is this: <br />{" "}
           <i>
             I aim to have the highest caliber of dedication and adaptability
             while fostering, rather than sacrificing, the strongest sense of
             communication and humanity with those around me.
           </i>
         </Typography>
       </CardContent>
       <hr className="cardLine" />
       <CardActions>
         <HomeButton
           text="More Philosophy"
           icon={<LightbulbOutlinedIcon />}
           destination="/about#philosophy"
         />
       </CardActions>
     </Card>
   );

}

export default PhilCard;