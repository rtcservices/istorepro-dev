export interface HeaderNavItem {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: HeaderNavItem[];
}
