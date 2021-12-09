import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import navRoutes from './routes';

export interface IDpsRoutesProps {
}

export default class DpsRoutes extends React.Component<IDpsRoutesProps> {
  public render() {
    return (
      <Routes>
        {navRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path}>
          {route.children?.length &&
            route.children.map((child) => <Route path={child.path} element={child.element} key={child.path} />)
          }
          {route.children?.length &&
            <Route index element={route.children[0].element} />
          }
        </Route>)}
      </Routes>
    );
  }
}
