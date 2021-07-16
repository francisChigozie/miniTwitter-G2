
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
          
        </Switch>
      </div>
    </Router>
  );
}



export default App;
