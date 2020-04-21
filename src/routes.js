  
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Category from './Pages/Category'
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import Order from './Pages/Order';



const Routes = () => (
    <BrowserRouter >
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/category/:name" component={Category}/>
			<Route path="/product/:category/:id" component={ProductDetails}/>
			<Route path="/cart" component={Cart}/>
			<Route exact path="/orders" component={Orders}/>
			<Route path="/order" component={Order}/>


		</Switch>
			
    </BrowserRouter>
);

export default Routes