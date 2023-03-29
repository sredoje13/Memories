import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

import { useSelector } from 'react-redux';
import moment from 'moment'
const ExpandMore = styled((props) => {
 

    const { expand, ...other } = props;
    return <Button {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
function Bookitem(props) {
  let isdown;
  const indexy=useSelector((state)=>state.additem.index)
  if(indexy===props.index){
    isdown=true
  }
  else{isdown=false}
  const[showcomments,setshowcomments]=React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [ind,setind]=React.useState(null);
    const handleExpandClick = () => {
      setExpanded(!expanded);
      setind(props.index)
    props.setitem()
    }
   


    return (
        <Card  sx={{ maxWidth: {md:345, xs:250}, marginTop:{md:10, xs:6},
       marginLeft:{md:"10px", xs:"0px"}
        }}>
        <CardHeader
         
          action={
            <Button aria-label="settings">
              <MoreVertIcon onClick={()=>setshowcomments((prevval)=>!prevval)} />
            </Button>
          }
          title={props.title}
          subheader={<Typography variant="body2">{moment(props.date).fromNow()}</Typography>}
        />
        <Collapse in={showcomments} timeout="auto" unmountOnExit>
          <Button type="link" onClick={()=>props.changeitem()}> Change item</Button>
         
        </Collapse>
        <Collapse in={showcomments} timeout="auto" unmountOnExit>
        <Button type="link"  onClick={()=>props.deleteitem()}> Delete item</Button>
        </Collapse>
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt="movie or book"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={()=>props.likePost()}aria-label="add to favorites">
            <ThumbUpAltIcon  />
          </Button>
          <Button onClick={()=>props.favitem()}>
          {!props.isfavorite&&<StarOutlineIcon />}
          {props.isfavorite&&<StarOutlinedIcon/>}
          </Button>
         <Button onClick={()=>props.unlikePost()}>
          
             <ThumbDownAltIcon  />
         </Button>
          <ExpandMore
            expand={ind===indexy&&expanded}
            onClick={handleExpandClick}
            aria-expanded={ind===indexy&&expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={ind===indexy&&expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Content:</Typography>
           
            <Typography paragraph>
             {props.content}
            </Typography>
            <Typography paragraph color="blue" sx={{display:"flex", alignItems:"center"}} >
             Likes:   {props.likes}<ThumbUpAltIcon sx={{marginLeft:"10px"}} />
            </Typography>
            <Typography sx={{display:"flex", alignItems:"center"}} paragraph color="orange">
             Unlikes:   {props.unlikes}<ThumbDownAltIcon sx={{marginLeft:"10px"}}   />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
}

export default Bookitem;