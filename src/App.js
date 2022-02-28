
import Login from './Components/Login/Login'
import Home from './Components/Home'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </BrowserRouter>

  );
}

