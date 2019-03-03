/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import { ModalProvider } from 'styled-react-modal';
import routes from './config/routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <ModalProvider>
      <Switch>
        {routes.map(({ url, component: C }) => (
          <Route
            exact
            path={url}
            key={url}
            render={props => <C {...props} />} 
          />
        ))}
        <Route exact url="/*" render={() => <div>404</div>} />
      </Switch>
    </ModalProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
