
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css'
import { Button } from 'rsuite'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home';

function App() {
  const dummyTwitts = [{
    _id: 123,
    text: 'bla bla bla bla',
    date: Date.now(),
    user_id: 3
  },
  {_id: 13,
    text: 'bla bjjjla bla bla',
    date: Date.now(),
    user_id: 1
  }
]
  const dummyUsers = [{
    _id : 333,
    id : 3,
    username: 'Khaled',
    email: 'khaled@email',
    password : 'pass'
  }, {
    _id : 33,
    id : 1,
    username: 'Zoro',
    email: 'zoro@email',
    password : 'pass'
  }
]
  return (
    <Router>
      <div className="App">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" >
            <Home twitts={dummyTwitts} users={dummyUsers} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}



export default App;
