import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CompareCitys from './Components/CompareCitys';
import Content from './Components/Content';
import { UserStorage } from './UserContext';

function App() {
  return (
    <div className="root">
      <main className="test">
        <UserStorage>
          <Router>
            <Switch>
              <Route exact path="/">
                <Content />
              </Route>
              <Route path="/compare">
                <CompareCitys />
              </Route>
            </Switch>
          </Router>
        </UserStorage>
      </main>
    </div>
  );
}

export default App;
