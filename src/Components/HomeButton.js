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
          backgroundColor: "black",
          border: "1px solid black",
          borderRadius: "100px",
          margin: "10px 5px 10px 5px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
        }}
        onClick={() => {
         
          if (props.isFile) {
            var link = document.createElement("a");
            link.download = "testin123";
            link.href = props.destination;
            console.log(props.destination);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }else{
            window.location.assign(props.destination);
          }
        }}
      >
        {props.text}
      </Button>
    );
}


export default HomeButton;