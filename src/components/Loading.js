import React from 'react';
import { CircularProgress } from '@mui/material';
import {Stack} from '@mui/material';
function Loading(props) {
    return (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    );
}

export default Loading;