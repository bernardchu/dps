import React, { JSXElementConstructor, ReactElement } from "react";

export interface IDpsNavRoute {
  name: string;
  path: string;
  children?: IDpsNavRoute[];
  element?: ReactElement;
}