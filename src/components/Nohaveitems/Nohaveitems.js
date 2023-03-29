import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
function Nohaveitems(props) {
    return (
      <Box marginTop={30} sx={{display:"flex",
        flexDirection:"column",
      justifyContent:"center",
       alignItems:"center",
       width:"100%"
      }}>
        <Typography marginBottom={3} color="orange">
           {props.text}

        </Typography>
        <SentimentVeryDissatisfiedIcon fontSize='large' />
      </Box>
    );
}

export default Nohaveitems;