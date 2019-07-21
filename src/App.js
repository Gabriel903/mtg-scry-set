import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SearchCard from './components/SearchCard'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">  
        <SearchCard />
        <Switch>
          <Route path="/setChoosen" component={SearchCard}/>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
