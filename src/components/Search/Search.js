import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Searcheone } from '../store/indexstore';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "green",
    '&:hover': {
      backgroundColor: "rgb(146, 255, 91)",
    },
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      backgroundColor: "orange",
      '&:hover': {
        backgroundColor: "rgb(248, 214, 143)",
      },
     
    },
   
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
   
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
        '&:focus': {
          width: '35ch',
        },
      },
    },
  }));
function Searchblank(props) {
    const dispatch=useDispatch()
    return (
        <Search 
          
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e)=>dispatch(Searcheone.search(e.target.value))} 
          />
        </Search>
    );
}

export default Searchblank;