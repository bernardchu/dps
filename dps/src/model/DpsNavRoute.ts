export interface IDpsNavRoute {
  name: string;
  route: string;
  children?: IDpsNavRoute[];
}