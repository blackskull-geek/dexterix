import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import GetStarted from './components/layout/GetStarted'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddProduct from './components/templates/AddProduct';
import ProductDetail from './components/templates/ProductDetail'
import Store from './components/layout/Store';
import ProductList from './components/templates/ProductList';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>ROPAN</h1>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GetStarted}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/add' component={AddProduct}/>
        <Route path='/product/:id' component={ProductDetail}/>
        <Route path='/store' component={Store}/>
      </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;


