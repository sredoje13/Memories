import React from 'react';
import { Paper, Box, TextField, Button, Typography } from '@mui/material';
import {Container} from '@mui/material';
import FileBase from 'react-file-base64'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useStyele from './style'
import { useDispatch } from 'react-redux';
import { postElement } from '../store/reduxthunk';
import { AddItems } from '../store/indexstore';
import {getElement} from '../store/reduxthunk'
import toast from 'react-hot-toast'
import '../../App.css'
import { useSelector } from 'react-redux';
import { updateElement } from '../store/reduxthunk';
import { Showchangeform } from '../store/indexstore';
function Form(props) {
    const  allbooks=useSelector((state)=>state.booksandmovies)
    const showchange=useSelector((state)=>state.showchange.showform)
    const show=useSelector((state)=>state.additem.showform)
    const chngeitem=useSelector((state)=>state.showchange.item)
    const[postData,setpostData]=useState({
        title:"",
        content:"",
        image:"",
        isbook:null
    })
let mmm;
let newtitle;
let newcontent;
let newimage
if(showchange){
    mmm=true;
    newtitle=chngeitem.title;
    newcontent=chngeitem.content;
    newimage=chngeitem.image
    
}
else{
    mmm=false
}
console.log(mmm,newtitle,newcontent)
const dispatch=useDispatch()
    const classes=useStyele()

const location=useLocation()
let loc;
let bokkk=null;
if(location.pathname==='/books'){
    loc="BOOK"
   bokkk=true
}
else if(location.pathname==='/movies'){
    loc="MOVIE"
    bokkk=false
}

let errtitle;
let errcontent;
let errimage;
 if(postData.image.trim()===""){
    errimage=true
}else{errimage=false}


 if(postData.title.trim()===""){
   errtitle=true
}
else{errtitle=false}

if(postData.content.trim()===""){
    errcontent=true
}else{errcontent=false}

console.log(errcontent,errimage,errtitle)
console.log(show,mmm)

const submitHandler=(e)=>{
e.preventDefault()

if(show&&!mmm){
    if(errimage){
        toast.error("Add picture!!!")
    }
    if(!errimage){
   const finnalypost={...postData, isbook:bokkk, date:new Date()}
   dispatch(postElement(finnalypost)).then(()=>dispatch(Showchangeform.close()))
.then(()=>dispatch(getElement()))}
 
    
}
else if(!show&&mmm){
    if(errtitle)
    { const finnalypost={...chngeitem,
        content:postData.content,
        image:postData.image,
        
     date:new Date()}
     dispatch(updateElement(finnalypost)).then(()=>dispatch(Showchangeform.close()))
.then(()=>dispatch(getElement()))}
else if (errimage){ const  finnalypost={
    ...chngeitem,
    title:postData.title,
    content:postData.content,
    image:newimage,
 date:new Date()}
 dispatch(updateElement(finnalypost)).then(()=>dispatch(Showchangeform.close()))
 .then(()=>dispatch(getElement()))}
 else if(errcontent){const finnalypost={
    ...chngeitem,
    title:postData.title,
    image:postData.image,
 date:new Date()}
 dispatch(updateElement(finnalypost)).then(()=>dispatch(Showchangeform.close()))
.then(()=>dispatch(getElement()))}
else{ console.log("extra2")
const finnalypost={
     ...chngeitem,
     title:postData.title,
     content:postData.content,
     image:postData.image,
     
  date:new Date()}
  dispatch(updateElement(finnalypost)).then(()=>dispatch(Showchangeform.close()))
.then(()=>dispatch(getElement()))

 
 }
   
}






}
    return (
       <Container>

<Paper elevation={20} className={classes.paper} sx={{ padding:"10px",marginTop:{md:20, sm:30, xs:5}, width:"90%"}}
>
   { !mmm&&show&&<Typography vatiant="h2" fontFamily="'EB Garamond', serif"> PUSH NEW {loc}
    </Typography>}
   {mmm&&!show&&<Typography vatiant="h2" fontFamily="'EB Garamond', serif"> CHANGE ITEM {newtitle.toUpperCase()}
    </Typography>}
    <form 
    onSubmit={submitHandler}
    style={{display:"flex", flexDirection:"column", justifyContent:"center",
    width:"97%",
   alignItems:"center"
}} >
       
        <TextField
        required={true}
        sx={{marginTop:1, width:"100%"}}
        name="title" 
        variant='outlined' 
        label="Title"
         fullWidth
         value={postData.title}
         onChange={(e)=>setpostData({...postData,title:e.target.value})}

        />

<TextField size="medium"

sx={{marginTop:1, marginBottom:1, width:"100%",


}}
        required={true}
        name="content" 
        variant='outlined' 
        label="Content"
         fullWidth
         value={postData.content}
         onChange={(e)=>setpostData({...postData,content:e.target.value})}

        />
      <div className="inputdiv">
      <FileBase type="file"
multiple={false}

onDone={({base64})=>{setpostData({...postData, image:base64})}}
/>
      </div>

      


<Button
fullWidth

sx={{marginTop:1, width:{xs:"70%"}}}
 variant="contained" 
 type="submit">SUBMIT</Button>
</form>
<Button onClick={()=>{
    dispatch(AddItems.close());
    dispatch(Showchangeform.close())
    }}sx={{width:"30%", display:"flex",textAlign:"end"}}>X</Button>

</Paper>

       </Container>
    );
}

export default Form;