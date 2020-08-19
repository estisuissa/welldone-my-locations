import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header'
import CategoriesList from './components/categories/CategoriesList';
import EditCategory from './components/categories/EditCategory';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path={["/", "/categories"]} exact component={CategoriesList} />
          <Route path='/categories/new' exact component={EditCategory} />
          <Route path='/categories/edit' exact component={EditCategory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
