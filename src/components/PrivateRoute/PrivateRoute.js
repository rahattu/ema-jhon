import React from 'react';
import { Route,Redirect } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute({ children, ...rest }) {
  const {user}= useAuth();
  return ( 
      
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          >
          </Redirect>
          )
        }
      >
          </Route> 
   
    );
};

export default PrivateRoute;