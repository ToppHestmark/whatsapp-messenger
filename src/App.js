import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>

            <Route path="/app">
              <Sidebar />
              <Chat />
            </Route>

            <Route path="/">
              <h1>Home</h1>
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
