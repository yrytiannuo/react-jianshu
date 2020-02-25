import React from 'react';
import Header from './common/header/';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

//pages
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js'

function App() {
  return (
    <Provider store = {store}>
      <Header />
      <BrowserRouter>
      	<div>
      		<Route path='/' exact component={Home}></Route>
      		<Route path='/detail' exact component={Detail}></Route>
      	</div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
