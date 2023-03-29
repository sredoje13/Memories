import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import useStyle from './../../Appstyle'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddItems } from '../store/indexstore';
import { Showchangeform } from '../store/indexstore';
import { useLocation } from 'react-router-dom';
;
const pages = ['BOOKS', 'MOVIES', 'FAVORITE'];




function ResponsiveAppBar() {
  const location=useLocation()
let lok;
if(location.pathname==="/"||location.pathname==="/favorite"){
  lok=true
}
else {lok=false}
  const dispatch=useDispatch()
  const classes=useStyle()
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
const handleOpenMenu=(event)=>{
    setAnchorElNav(prevval=>!prevval);
}

  return (
    <AppBar position="fixed" sx={{backgroundColor:{md:"orange", xs:"green"},
    
    }} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters className={classes.sx}>
          <MenuBookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
           
          >
            COLLECTION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            onClick={handleOpenMenu}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
             
              sx={{
                display: { xs: 'block',

                 md: 'none' },
                scale:"0.85",

              }}
            >
              <Box sx={{display: { xs: 'flex', md: 'none' },
              
              flexDirection:"column" }}
            onClick={handleCloseNavMenu}
            >
              
                <Link
                  onClick={handleCloseNavMenu}
                  className={classes.appbarItems}
                  to="/books"
                >
                  {pages[0]}
                </Link>
                <Link
                to="/movies"
                 onClick={handleCloseNavMenu}
                  className={classes.appbarItems}
                  
                >
                  {pages[1]}
                </Link>
                <Link
                 to="/favorite"
                 className={classes.appbarItems}
                
               >
                 {pages[2]}
               </Link>
            </Box>
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontSize:{xs:"60%", sm:"x-large"},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COLLECTION
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            
          >
            
              <Link
              
              to="/books"
                className={classes.appbarItems}
                style={{ my: 2, color: 'white', marginLeft:"10px" ,textDecoration:"none"}}
              >
                {pages[0]}
              </Link>
              <Link
                to="/movies"
                className={classes.appbarItems}
                style={{ my: 2, color: 'white',  marginLeft:"10px" ,textDecoration:"none"}}
              >
                {pages[1]}
              </Link>
              <Link
               to="/favorite"
               className={classes.appbarItems}
               style={{ my: 2, color: 'white',  marginLeft:"10px", textDecoration:"none" }}
             >
               {pages[2]}
             </Link>
             
          </Box>
        
          <Button color="inherit"
          sx={{ width:{md:"30%",sm:"35%",xs:"30%"}, fontSize:{md:"medium", xs:"x-small"}}}
          disabled={lok}
          onClick={()=>{dispatch(AddItems.show()); dispatch(Showchangeform.close())}}
          >Add item</Button>
        </Toolbar>
      </Container>
     
    </AppBar>
  );
}
export default ResponsiveAppBar;
