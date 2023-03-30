import React from 'react'
import {useSelector }from 'react-redux'
import {Card, CardMedia, Paper, Typography }from '@mui/material'
import { Container } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getElement } from '../store/reduxthunk'
import {CardHeader, CardContent,Button} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import moment from 'moment'
import { unfavitem } from '../store/reduxthunk'
import Loading from '../Loading'
import DeleteIcon from '@mui/icons-material/Delete';
import Nohaveitems from '../Nohaveitems/Nohaveitems'
import Footer from '../Footer/Footer'
const Favorite=()=>{

    const dispatch=useDispatch()
    useEffect(()=>{
   dispatch(getElement())
    },[dispatch])
    const allitems=useSelector((state)=>state.booksandmovies)
    console.log(allitems.items)
    let oneitem;
    const filteritem=allitems.items.filter((item)=>item.isfavorite)
    if(allitems.isloading){
        oneitem=(<div style={{display:"flex", justifyContent:"center",
        width:"100%", alignItems:"center", height:"100vh"}}>
        
        <Loading />
        </div>)
    }
    else{
        if(filteritem.length===0){
oneitem=(<Nohaveitems text="NO HAVE FAVORITE ITEMS!!!"/>)
        }
        else
   oneitem=filteritem.map((item)=>(
<Card sx={{ width:{ md:345, xs:280 }, margin:{md:10,xs:5}}} >
<div style={{position:"absolute", zIndex:100 ,marginTop:"2px",
   marginLeft:"-10px",
}}>
    <Button onClick={()=>dispatch(unfavitem(item))}>
    <DeleteIcon sx={{color:'green', fontSize:"x-large",
}} />
</Button>
</div>
<div style={{
    width:"100%",
    textAlign:"end",
    color: 'grey',}} >
        <Typography variant="body2">{moment(item.date).fromNow()}</Typography>
      </div>

    <Typography sx={{width:"100%",
    textAlign:"center",}}
     variant='subtitle1'
     color="orange"> {item.title.toUpperCase()}</Typography>
    
<CardContent>
<CardMedia  
    component="img"
    height="200px"
    width="280px"
    alt="movie or book"
    image={item.image}/>
    </CardContent>
    <div style={{position:"absolute", zIndex:100 ,marginTop:"-50px",
   marginLeft:"10px",
}}><StarIcon sx={{color:'orange', fontSize:"xx-large",


}} /></div>
</Card>

   

    ))}
    return(

        <Container sx={{marginTop:10, display:"flex", justifyContent:"center",
        flexDirection:{md:"row", sm:"column", xs:"column"}, alignItems:"center"
        }}>
       {oneitem}
       <Footer/>
        </Container>
    )
}
export default Favorite