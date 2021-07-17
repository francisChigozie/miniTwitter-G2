import Explore from './Component/Explore';
import User from './Component/User';
import UserDetail from './Component/UserDetail';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css'
import {Button} from 'rsuite'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <h1>Login</h1>
          </Route>
          <Route path="/explore" component={Explore} /> 
          <Route path="/user" exact component={User} />
          <Route path="/user/:id" component={UserDetail}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
