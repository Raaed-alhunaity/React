import React, { Component } from 'react';

import {BrowserRouter,Route} from 'react-router-dom'
import Home from './home';
import Product from './product';
import Cart from './cart';
import Checkout from './checkout';
// import firebase from 'firebase/app';

class App extends Component {
render(){

    return (
        <BrowserRouter>
            <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cart/:id" component={Cart}/>
            <Route exact path="/product/:id" component={Product}/>
            <Route exact path="/checkout" component={Checkout}/>
            </div>
        </BrowserRouter>
    )
}
}

export default App;