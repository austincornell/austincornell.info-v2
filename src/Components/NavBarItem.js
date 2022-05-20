import React from "react";
import Box from "@mui/system/Box";
import Button from '@mui/material/Button';
import "../App.css";
import { motion } from "framer-motion";
import { ThemeProvider, styled, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
// borderStyle: "none",
//             "&:hover": {
//               borderColor: "var(--mainRed)",
//               color: "var(--mainRed)",
//             },


function NavBarItem(props) {
    return (
      <Box>
        <Link to={props.dest}>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderStyle: "none",
              borderRadius: "0",
              "&:hover": {
                borderStyle: "none",
                backgroundColor: "var(--darkGrey)",
                color: "var(--mainRed)",
              },
            }}
            className="hvr-underline-from-left"
          >
            {props.linkName}
          </Button>
        </Link>
      </Box>
    );
}

export default NavBarItem;