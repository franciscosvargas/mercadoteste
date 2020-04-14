  
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Category from './Pages/Category'
import ProductDetails from './Pages/ProductDetails';

const Routes = () => (
    <BrowserRouter >
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/product/:category/:id" component={ProductDetails}/>
			<Route path="/category/:name" component={Category}/>
		</Switch>
			
    </BrowserRouter>
);

export default Routes