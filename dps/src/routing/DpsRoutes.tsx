import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IDpsRoute } from '../model/IDpsRoutes';
import { hasSubnavChildren, routes } from './routes';

export interface IDpsRoutesProps {
}

export default class DpsRoutes extends React.Component<IDpsRoutesProps> {
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
      </Routes>
    );
  }
}
