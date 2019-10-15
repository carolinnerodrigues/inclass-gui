import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import AuthService from './services/auth'

import {LoginComponent} from './components/pages/Login/Login'
import {HomeComponent} from './components/pages/Home/Home'
import {ToModelComponent} from './components/pages/ToModel/ToModel'
import {ModelingComponent} from './components/pages/Modeling/Modeling'

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
                <Route exact path='/' component={() => HomeComponent }/>
                <Route exact path='/ToModel' component={ToModelComponent }/>
                <Route exact path='/Modeling' component={ModelingComponent }/>
                <Route path='*' exact={true} component={({ props }) => <h1>Not Found</h1>} />
        </Switch>
);
export default Routes;