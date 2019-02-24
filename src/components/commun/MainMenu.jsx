import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../../config/routes';

const MainMenu = () => (
  <ul>
    {routes.filter(elem => elem.mainMenu).map((route, i) => 
      <li key={route.url}>
        <NavLink
          key={i}
          exact={true}
          to={route.url}
          activeClassName="active"
        >
          {route.textMenu}
        </NavLink>
      </li>
    )}
  </ul>
);

export default MainMenu; 