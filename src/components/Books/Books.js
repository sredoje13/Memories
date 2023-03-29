import Shema from "./Shema";
import { useSelector } from "react-redux";
function Books(props) {
  const allitems=useSelector((state)=>state.booksandmovies)
  const allbooks=allitems.items.filter((item)=>item.isbook)
 return (
<Shema
allitems={allitems}
allbooks={allbooks}
/>
 )
}

export default Books;