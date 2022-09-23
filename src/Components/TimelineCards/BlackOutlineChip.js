import React from 'react'
import { Chip } from '@mui/material';
import { Box } from '@mui/system';
export default function BlackOutlineChip(props) {
  return (
    <Box pb={1}>
      <Chip
        icon={props.icon}
        label={props.title}
        size="small"
        
        sx={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid gray",
        }}
      />
    </Box>
  );
}
