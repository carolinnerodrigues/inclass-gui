import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom'

import {LoginComponent} from './components/pages/Login/Login'

import AuthService from './services/auth'

const isAuthenticated = AuthService.isAuthenticated;

const PrivateRouter = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ (props) => 
        isAuthenticated() ? (
            <div>
                <Component {...props} />
            </div>
        ) : (
            <div>
                <Redirect to={
                    {pathname: '/Login', state:{ from:props.location }}
                } />
            </div>
        )
    }/>
);

const Routes = () => (
    
        <Switch>
                <Route exact path='/Login' component={LoginComponent}/>
                <Route path='*' exact={true} component={({ props }) => <h1>Not Found</h1>} />
        </Switch>
   
);
export default Routes;