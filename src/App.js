import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmenu from './Components/NavMenu'
import ItemList from './Components/ItemList'
import ItemInfo from './Components/ItemInfo'
import Cart from './Components/Cart/Cart'
import Error from './Components/Error'
import Confirmation from './Components/Confirmation'

function App() {
  return (
    
    <>
    <Navmenu> </Navmenu>
    <Switch>
      
      <Route exact path="/" component={ItemList} />
      <Route path="/success" component={Confirmation} />
      <Route path="/itemInfo" component={ItemInfo} />
      <Route path="/cart" component={Cart} />
      <Route component={Error} />

    </Switch>
    
    </>
  );
}

export default App;

