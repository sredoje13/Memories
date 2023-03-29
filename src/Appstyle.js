import { duration } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
    app:{width:"100%", overflowX:"hidden"},   
appbarItems:{
    margin:"2px",
    padding:"5px",
    textDecoration:"none",
    "&:hover":{
        
       opacity:"0.5" ,
       boxShadow:"0px 0px 10px 2px black"
    },
    color:"black"
},
firstpage:{
   display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"
},
icons:{
    fontSize:"xx-large",
    padding:"5px",
    "&:hover":{
        color:"black"
    }
},
itemone:{
  animation:"$mykey 0.7s ease"
},
"@keyframes mykey":{
"0%":{
    transform:"translateX(-50%)"
},
"100%":{
    transform:"translateX(0%)" 
}
},
itemtwo:{
    
transform:"translateX(50%)",
    animation:"$mykey2 0.7s forwards",
    animationDelay:"0.5s"
  },
"@keyframes mykey2":{
    "0%":{
        transform:"translateX(50%)" 
   },
    "100%":{
        transform:"translateX(0%)" 
    }
    },
    
  paper:{
    maxHeight:"350px",
    overflow:"hidden",
   
        "&:hover":{scale:1.1},

  } ,

  paper2:{
    maxHeight:"350px",
    overflow:"hidden",
   
    "&:hover":{scale:1.1},
} ,
title:{
animation:"$title 2s infinite linear"
},
"@keyframes title":{
"0%":{
scale:0.8
},
"25%":{
scale:0.9
},
"50%":{
scale:1
},
"75%":{
   scale:0.9
},
"100%":{
    scale:0.8
}

},

}


))

