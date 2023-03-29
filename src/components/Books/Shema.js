import React from 'react';
import { Container } from '@mui/system';
import { Typography, Button, Box } from '@mui/material';
import { useEffect } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useSelector } from 'react-redux';
import Bookitem from '../Books/Bookitem';
import useStyle from './style'
import Form from '../Form/Form';
import { useRef } from 'react';
import { Showchangeform } from '../store/indexstore';
import { useDispatch } from 'react-redux';
import { getElement } from '../store/reduxthunk';
import { unLike } from '../store/reduxthunk';
import { updateLike } from '../store/reduxthunk';
import { useState } from 'react';
import { favitem } from '../store/reduxthunk';
import { AddItems } from '../store/indexstore';
import Nohaveitems from '../Nohaveitems/Nohaveitems';
import { deleteElement } from '../store/reduxthunk';
import {Popover} from '@mui/material';
import { Deleteone } from '../store/indexstore';
import Loading from '../Loading';
import Searchblank from '../Search/Search';
import Footer from '../Footer/Footer';
function Shema(props) {
const ref=useRef()
const ref2=useRef()

    const searchitem=useSelector((state)=>state.searchItem.item.toUpperCase())
    console.log(searchitem)
let issearch=false
if(searchitem.trim()!==""){
    issearch=true
}
  const [anchorEl, setAnchorEl] = useState(false);  

  const handleClose = () => {
    setAnchorEl(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const show=useSelector((state)=>state.additem.showform)
  const showchange=useSelector((state)=>state.showchange.showform)
  const deleteitemone=useSelector((state)=>state.deleteItem.item)
console.log(deleteitemone)

 
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(getElement())
  },[dispatch])
  const likePost=(item)=>{
      dispatch(updateLike(item))
     

     }

     const unlikePost=(item)=>{
  dispatch(unLike(item))
 

     }
     const [isCompleted, setIsCompleted] = useState(false)
     const[index,setindex]=useState(5)

   
 /*  const allitems=useSelector((state)=>state.booksandmovies) */
 
  const classes=useStyle()
 
  let all;
 
 /* const allbooks=allitems.items.filter((item)=>item.isbook) */

 if( props.allbooks.length<4){
  // eslint-disable-next-line no-unused-expressions
  ()=>setindex(props.allbooks.length)}
 else
 {
// eslint-disable-next-line no-unused-expressions
()=>setindex(4)}

 const chageitem=(item)=>{
  dispatch(Showchangeform.show(item))
  dispatch(AddItems.close())
    }
const deleteitem=(event)=>{
  dispatch(Deleteone.delete(event))
  setAnchorEl(true);
}

let haveitems;
console.log(show,showchange)

 const initialPosts = props.allbooks.slice( 0, index)
 console.log(initialPosts)
  if(props.allitems.isloading){
all=( <div style={{display:"flex", justifyContent:"center",
width:"100%", alignItems:"center", height:"100vh"}}>

<Loading />
</div>)
  }
  else{
    if(initialPosts.length===0&&!props.allitems.isloading){
      haveitems=false
all=(<Nohaveitems text="NO HAVE ITEMS YET!!!"/>)

}
    else{
haveitems=true
if(!issearch)
{all=initialPosts.map((item,i)=>(
 <Bookitem
 key={item._id}
 date={item.date}
 image={item.image}
 title={item.title}
 content={item.content}
 likes={item.likes}
 unlikes={item.unlikes}
 item={item}
 changeitem={()=>chageitem(item)}
 deleteitem={()=>deleteitem(item)}
 likePost={()=>likePost(item)}
 unlikePost={()=>unlikePost(item)}
 setitem={()=>dispatch(AddItems.setitem(i))}
 index={i}
 favitem={()=>dispatch(favitem({...item, isfavorite:!item.isfavorite}))}
 isfavorite={item.isfavorite}
 /> 
))}
else{
    const havesearch=initialPosts.filter((item)=>item.title.toUpperCase().includes(searchitem))
    if(havesearch.length!==0){
    all=havesearch.map((item,i)=>(
    <Bookitem
    key={item._id}
    date={item.date}
    image={item.image}
    title={item.title}
    content={item.content}
    likes={item.likes}
    unlikes={item.unlikes}
    item={item}
    changeitem={()=>chageitem(item)}
    deleteitem={()=>deleteitem(item)}
    likePost={()=>likePost(item)}
    unlikePost={()=>unlikePost(item)}
    setitem={()=>dispatch(AddItems.setitem(i))}
    index={i}
    favitem={()=>dispatch(favitem({...item, isfavorite:!item.isfavorite}))}
    isfavorite={item.isfavorite}
    /> 
   ))}
   else{
    all=(<Nohaveitems text="NO HAVE SEARCH ITEM!!!"/>)
   }

}
  }
}

const showfirst=show&&!props.allitems.isloading
console.log(ref)

if(show){
  const bottom=ref.current.offsetTop
  
  const executeScroll = () => window.scrollTo({ behavior: 'smooth',  
  top:bottom
} ) 
  executeScroll()
}
if(showchange){
  const bottom=ref2.current.offsetTop
  
  const executeScroll = () => window.scrollTo({ behavior: 'smooth',  
  top:bottom
} ) 
  executeScroll()
}

  return (
   <Container className={classes.books} >
    <Popover

id={id}
open={open}
anchorEl={anchorEl}
onClose={handleClose}
anchorOrigin={{
  vertical: 'top',
  horizontal: 'center',
}}
>
<Typography sx={{ p: 2 }}>Do you realy want to delete {deleteitemone.title}?
  <Button onClick={()=>{dispatch(deleteElement(deleteitemone));
  setAnchorEl(false)
  }}>OK</Button>
  </Typography>
</Popover>
<Box sx={{marginTop:10, display:"flex", justifyContent:"center"}}><Searchblank /></Box>

<Box sx={{display:"flex", flexWrap:"wrap",
justifyContent:"space-around"
}}>
 {all}
</Box>

<div style={{display:"flex", justifyContent:"center"}}>
      {isCompleted ?(
        <button
          
          style={{border:"0px", borderBottom:"1px solid grey",
      backgroundColor:"inherit",
      marginTop:"30px"
      }}
         
        >
         Don't have other items
        </button>
      ) : (
        <button 
        onClick={()=>{
          setindex(index + 4)
   if(index >= props.allbooks.length){
     setIsCompleted(true)}else
     setIsCompleted(false)
   
        }}
         type="button"  
          style={{border:"0px",
         backgroundColor:"inherit",marginTop:"30px"
         }}>
          {(!props.allitems.isloading&&haveitems)&&<MoreHorizIcon fontSize='large'/>}
        </button>
      )}
    </div>
    {!haveitems&&!props.allitems.isloading&&<Button  sx={{
      width:"100%",
      textAlign:"center",
      border:"0px", color:"orange", backgroundColor:"inherit"}} onClick={()=>dispatch(AddItems.show())}>
        Add item</Button>}
       
       
{showfirst&&<Form />}
<div ref={ref} ></div>

  {(showchange&&!props.allitems.isloading)&&<Form />}
  <div ref={ref2}  >
</div>
<Footer/>
   </Container>
  );
}



export default Shema;