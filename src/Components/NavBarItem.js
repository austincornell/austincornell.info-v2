import React from "react";
import Box from "@mui/system/Box";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function NavBarItem(props) {
    return (
      <Box>
        <Link to={props.dest}>
          <Button
            variant="outlined"
            sx={{
              color: "black",
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