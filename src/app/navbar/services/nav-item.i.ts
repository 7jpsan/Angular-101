export interface NavItem {
    title: string,
    icon: string,
    route: string
    children?: NavItem[],
    loginRequired?: boolean,
    action?: (...args:any[]) => void,
    state: string
  }