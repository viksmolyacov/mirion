import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Catalog from './components/catalog/catalog';
import News from './components/news/news';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';

import { BrowserRouter ,Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Header />
          <Switch>
            <Route exact path='/' render={Main} />
            <Route exact path='/catalog' render={Catalog} />
            <Route exact path='/news' render={News} />
            <Route exact path='/about' render={About} />
            <Route exact path='/contacts' render={Contacts} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
