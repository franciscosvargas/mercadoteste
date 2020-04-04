  
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';

const Routes = () => (
    <HashRouter>
        <Route exact path="/" component={Home}/>
    </HashRouter>
);

export default Routes