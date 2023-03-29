import Shema from "../Books/Shema";
import { useSelector } from "react-redux";
function Movies(props) {
  const allitems=useSelector((state)=>state.booksandmovies)
  const allbooks=allitems.items.filter((item)=>!item.isbook)
 return(
<Shema
allitems={allitems}
allbooks={allbooks}
/>
 )
}

export default Movies;