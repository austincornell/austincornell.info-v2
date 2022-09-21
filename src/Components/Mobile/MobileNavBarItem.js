import React from "react";
import Box from "@mui/system/Box";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import Chip from "@mui/material/Chip";

function MobileNavBarItem(props) {
    return (
      <Box>
        <Link to={props.dest}>
          <Button
            startIcon={props.icon}
            variant="outlined"
            sx={{
              color: "black",
              borderStyle: "none",
              borderRadius: "0",
              width: "100%",
              margin: "5px 0px 5px 0px",
              "&:hover": {
                borderStyle: "none",
                backgroundColor: "var(--darkGrey)",
                color: "var(--mainRed)",
              },
            }}
          >
            {props.linkName}
          </Button>
        </Link>
      </Box>
    );
}

export default MobileNavBarItem;