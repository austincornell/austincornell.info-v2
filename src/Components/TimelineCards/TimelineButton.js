import React from "react";
import Button from "@mui/material/Button";



function HomeButton(props){
    return (
      <Button
        startIcon={props.icon}
        variant="contained"
        disableElevation
        size="small"
        sx={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
          borderRadius: "100px",
          margin: "10px 5px 10px 5px",
          fontWeight: 600,
          maxWidth: "150px",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        onClick={() => {
          
          
        }}
      >
        {props.text}
      </Button>
    );
}


export default HomeButton;