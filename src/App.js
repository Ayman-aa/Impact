import Shop from './Pages/Shop';
import CartPage from './Pages/CartPage';
import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const App = () => {


    return ( 
    <Router>
        <div>
            
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/shop'>
                 <Shop />
                </Route>
                <Route exact path='/cart'>
                 <CartPage />
                </Route>
            </Switch>
            
        </div>
    </Router>
    )
}

export default App