import React, { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
     {!user ? (
       <Login />
     ) : (
      <div className="app__body">
        <Router>
          <Sidebar />
            <Switch>

              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>

            </Switch>
        </Router>
      </div>
     )}
      
    </div>
  );
}

export default App;
