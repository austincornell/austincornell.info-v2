import React from "react";
import Box from '@mui/system/Box';
import NavBarItem from "./NavBarItem";


function NavBar() {
    return (
      <Box
        sx={{
          backgroundColor: "var(--darkGrey)",
          width: "100wh",
          height: "70px",
          margin: "0",
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          alignItems: "center",
          paddingRight: "1rem",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <NavBarItem linkName="Home" dest="/" />
        <NavBarItem linkName="About" dest="/about" />
        <NavBarItem linkName="Work History" dest="/workHistory" />
        <NavBarItem linkName="Education" dest="/education" />
      </Box>
    );
}

export default NavBar;