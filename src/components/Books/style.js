
import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
books:{
display:"flex",
flexDirection:"row",
flexWrap:"wrap",
paddingBottom:"200px",
alignItems:"center",
justifyContent:"center",

},
icon:{
    color:"blue",
"&:hover":{
scale:1.3,

}
}

}))