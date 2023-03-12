import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import EditCustomers from './pages/EditCustomers';
import AddCustomer from './pages/AddCustomer';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/edit/:id' component={EditCustomers}/>
                <Route path='/add' component={AddCustomer}/>
            </Switch>
        </BrowserRouter>
    );

}