import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IDpsRoute } from '../model/IDpsRoutes';
import { hasSubnavChildren, routes } from './routes';

/**
 * In addition to routes that we explicitly create, we also set up a catchall not found route and
 * index routes for any "abstract" parent routes that would be empty without a child route to display.
 */
export default class DpsRoutes extends React.Component {
  private static getFirstChild(parent: IDpsRoute): IDpsRoute {
    const child = Object.keys(parent.children!).map(key => parent.children![key])
      .find(child => child.navOrder === 0);
    return child!;
  }

  public render() {
    return (
      <Routes>
        {Object.keys(routes).map(key => routes[key])
          .map(route => <Route path={route.path} element={route.element} key={route.path}>
            {route.children &&
              Object.keys(route.children).map(key => route.children![key]).map((child) => <Route path={child.path} element={child.element} key={child.path} />)
            }
            {route.children && hasSubnavChildren(route) &&
              <Route index element={DpsRoutes.getFirstChild(route).element} />
            }
          </Route>)}
        <Route path="*" element={<main>Not found. Use the header to navigate to another page.</main>} />
      </Routes>
    );
  }
}
