import React from 'react';
import { Container, Box } from '@mui/system';
import useStyle from "./../../Appstyle"
import { Typography , Paper, Card} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import {CardMedia} from '@mui/material';
import { useState } from 'react';
import {Backdrop} from '@mui/material';
import {Grow} from '@mui/material';
import Image1 from '../../books.png'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Image2 from '../../png-transparent-songwriter-film-music-cinema-television-k-song-miscellaneous-music-video-musician.png'


function Firstpage(props) {
  const[showb,setshowb]=useState(false)

const classes=useStyle()
const titles=["PUT NEW BOOK", "PUT NEW MOVIE", "CHEK FAVORITE ITEM"]

const growing=titles.map((item,i)=>(
  <Grow
  in={showb}
  style={{ transformOrigin: '0 1 0' , padding:"10px", width:"150px"}}
  
  {...(showb ? { timeout: 1000*i } : {})}

>
 
  <Paper  elevation={20}
  
  sx={{marginTop:i*0.2, scale:`1.${1+i}`, }}>
    
    <Typography  textAlign="center">
      {item}
    </Typography>
  </Paper>
  </Grow>
))
const showbook=()=>{
  setshowb(true)
}




    return (
       <Container classes={classes.firstpage}  >
  <Box  sx={{paddingBottom:{md:30},overflow:"hidden" , bgcolor:{xs:"rgb(179, 240, 184)" ,md:'rgb(255, 226, 173)'}, height: '100vh', width:"100%" }} >
    <Typography   variant='h1' sx={{color:"white", paddingTop:{md:"10%", xs:"30%"}, textAlign:"center", fontFamily: "'EB Garamond', serif"
     ,fontSize:{xs:"200%", md:"500%"}}} >
   HELLO FROM MY PAGE 
  <span style={{display:"flex", alignItems:"center", justifyContent:"center"}}> 
  <AutoStoriesIcon className={classes.icons} fontSize="xx-large"/>
  <TheaterComedyIcon className={classes.icons} fontSize="xx-large"/>
  <StarOutlineIcon className={classes.icons} fontSize="xx-large"/></span> 
   </Typography >
   <Box sx={{ marginTop:{md:8, sm:5, xs:2}, marginBottom:{md:-2, sm:-5, xs:-8}}}>
    <Typography marginRight={5}

    className={classes.title}
   sx={{fontSize:{md:"200%", sm:"100%", xs:"50%"}}}
   variant="h4"
    textAlign="end"
      color="white">Make your own collection of movies or books!!!</Typography>
</Box>
{!showb&&<Box
 className={classes.itemone}
      sx={{
        display: 'flex',
        flexDirection:"column",
       marginTop:{xs:4},
        '& > :not(style)': {
            marginLeft:{xs:5, md:10},
          
          width: {md:300,sm:200, xs:150},
          height:{md:250,sm:200, xs:150},
        },
      }}
    >
     <Typography variant="h2"marginTop={10} color="white" textAlign="center" sx={{fontSize:{xs:"150%",sm:"200%", md:"300%"}, marginBottom:{xs:-15,sm:-17, md:-20}}}>My books</Typography>
      <Paper elevation={10} className={classes.paper}>
      <Card onClick={()=>showbook()}>
        <CardMedia
        component="img"
        height="250px"
        image={Image1}
        alt="Paella dish"
      />
        </Card>
      </Paper>
    </Box>
}
{ !showb&&<Box
    className={classes.itemtwo}
      sx={{
       
        display: 'flex',
        flexDirection:"column",
        width:"100%",
       justifyContent:"flex-end",
       alignItems:"flex-end",
      
       marginTop:{xs:-5,sm:-12, md:-30},
        '& > :not(style)': {
        marginRight:{xs:5, md:10},
          
        width: {md:300,sm:200, xs:150},
        height:{md:250,sm:200, xs:150},
        },
      }}
    >
     <Typography variant="h2"marginTop={10} color="white" textAlign="center" sx={{fontSize:{xs:"150%",sm:"200%", md:"300%"}, marginBottom:{xs:-15,sm:-17, md:-20}}}>My movies</Typography>
      <Paper elevation={10} className={classes.paper2}>
        <Card onClick={()=>showbook()}>
        <CardMedia
        component="img"
        height="250px"
        image={Image2}
        alt="Paella dish"
      />
        </Card>
    
      </Paper>

    </Box>
  }

  {showb&&<Backdrop
  sx={{ color: 'orange',
   zIndex: (theme) => theme.zIndex.drawer + 1 ,display:"flex", 
  width:"100%",
flexDirection:"column", alignItems:"center",
justifyContent:"center"}}
  open={showb}
  onClick={()=>setshowb(false)}

>
<Box sx={{display:"flex", 
flexDirection:"column", alignItems:"center",width:"100%",
justifyContent:"center"}} >
  <Typography variant='h4' marginBottom={5} width="70%"textAlign="center">MAKE NEW COLLECTION!!!</Typography>
{growing}
<Box display="flex" flexDirection="row" justifyContent="center"

 marginTop={5}>
  <DoneOutlineIcon fontSize='large' color="orange"/>
  <DoneOutlineIcon fontSize='large' color="orange"/>
  <DoneOutlineIcon fontSize='large' color="orange"/>
</Box>
</Box>
</Backdrop>}



 
 </Box>
       </Container>
    );
}

export default Firstpage;