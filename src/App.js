import './App.css';
import { Container} from "@mui/material"
import Firstpage from './components/Firstpage/Firstpage';
import { Route, Switch } from 'react-router-dom';
import { Toaster} from 'react-hot-toast';
import useStyle from './Appstyle'
import ResponsiveAppBar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import Movies from './components/Movies/Movies';
import Favorite from './components/Favorite/Favorite';
function App() {
  const classes=useStyle()
  return (

<Container className={classes.app}>

<ResponsiveAppBar/>
<Toaster/>
<Switch>
  <Route path="/" exact>
  <Firstpage/>
  </Route>
<Route path="/books" exact>
<Books/>
</Route>
<Route path="/movies" exact> 
<Movies/>
</Route>
<Route path="/favorite" exact> 
<Favorite/>
</Route>
</Switch>

</Container>
   
  );
}

export default App;
