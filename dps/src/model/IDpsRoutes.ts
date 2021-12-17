import { ReactElement } from "react";

export interface IDpsRoute {
  name: string;
  path: string;
  children?: {
    [key: string]: IDpsRoute
  }
  element: ReactElement;
  inNav: boolean;
  navOrder?: number;
}

export interface IDpsNavRoute {
  name: string;
  path: string;
  children?: IDpsNavRoute[];
  element: ReactElement;
}