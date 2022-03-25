import React from 'react'
import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Main from './views/Main';
import Create from './components/Create';
import Update from './views/Update'
import CreateView from './views/CreateView';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>

      <Switch>

        {/* Create */}
        <Route path="/authors/new">          
          <CreateView />
        </Route>

        {/* Update */}
        <Route path="/authors/update/:id">
          <Update />
        </Route>
        {/* Show All */}
        <Route path="/authors">
          <Main />
        </Route>

        {/* Redirect to Main */}
        <Route path="/"> 
          <Redirect to = "/authors" /> 
        </Route>
        
      
      </Switch>


    </div>
  );
}

export default App;
