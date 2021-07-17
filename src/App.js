import { useState, useEffect } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home';

function App() {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [twitts, setTwitts] = useState([])


  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://minitwitter-crossover.herokuapp.com/api/tweet')
      .then(response => response.json())
      .then(data => setTwitts(data));

      fetch('https://minitwitter-crossover.herokuapp.com/api/user')
        .then(response => response.json())
        .then(data => setUsers(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);


  const dummyTwitts = [{
    _id: 123,
    text: 'bla bla bla bla',
    date: Date.now(),
    user_id: 3
  },
  {
    _id: 13,
    text: 'bla bjjjla bla bla',
    date: Date.now(),
    user_id: 1
  }
  ]
  const dummyUsers = [{
    _id: 333,
    id: 3,
    username: 'Khaled',
    email: 'khaled@email',
    password: 'pass'
  }, {
    _id: 33,
    id: 1,
    username: 'Zoro',
    email: 'zoro@email',
    password: 'pass'
  }
  ]
  return (
    <Router>
      <div className="App">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" >
            <Home twitts={twitts} users={users} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}



export default App;
