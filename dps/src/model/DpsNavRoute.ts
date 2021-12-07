export interface DpsNavRoute {
  name: string;
  route: string;
  children?: DpsNavRoute[];
}