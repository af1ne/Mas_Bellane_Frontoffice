import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import routes from './config/routes';

class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, i, { component: C} ) => 
            <Route
              i={console.log(route)}
              exact
              path={route.path}
              key={i}
              render={`<${route.component} />`}
            />
          )}
          <Route
            exact
            path="/*"
            render={() => <div>404</div>}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
