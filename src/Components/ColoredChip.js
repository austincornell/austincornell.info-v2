import React from "react";
import Box from "@mui/system/Box";
import NavBarItem from "./NavBarItem";
import Chip from "@mui/material/Chip";

function ColoredChip(props) {
  return (
     <Chip icon={props.icon} label={props.title} sx={{
        backgroundColor: props.background,
        color: props.color,

     }}/>
  );
}

export default ColoredChip;
