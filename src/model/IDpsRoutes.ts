import { ReactElement } from "react";

export interface IDpsRoute {
  name: string;
  path: string;
  children?: {
    [key: string]: IDpsRoute
  }
  inNav: boolean;
  navOrder?: number;
  hideDonate?: boolean;
}

export interface IDpsNavRoute {
  name: string;
  path: string;
  children?: IDpsNavRoute[];
}