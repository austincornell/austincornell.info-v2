import React from "react";
import Box from "@mui/system/Box";
import NavBarItem from "./NavBarItem";
import "../App.css";

function VerticalNav(props) {
    return (
      <Box
        sx={{
          backgroundColor: "var(--darkGrey)",
          width: "75px",
          height: "90vh",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: "1rem",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <NavBarItem linkName="Home" dest="/" />
        <NavBarItem linkName="Home" dest="/" />
      </Box>
    );
}

export default VerticalNav;