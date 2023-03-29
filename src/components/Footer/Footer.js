import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

function Footer(props) {
    return (
        <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0,backgroundColor:"white", width:"120vw" }}>
        <Toolbar>
          
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          width:"90%",
        }}
      >
        <Typography
        >
         by J Popovic
        </Typography>

        <Typography  level="body3" sx={{ ml: 'auto', display:"flex", color:"black",alignItems:"center" }}>
        <CopyrightIcon sx={{marginRight:"15px"}}/> 2023
        </Typography>
      </Box>
         
          
        </Toolbar>
      </AppBar>
    );
}

export default Footer;