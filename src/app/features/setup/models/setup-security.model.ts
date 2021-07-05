export interface SetupSecurityModel {
  loginName: string;
  license: string;
  expiryOn: string;
  fullName: string;
  password: string;
  confirm: string;
  designation: string;
  department: string;
  email: string;
  telephone: string;
  suspended: boolean;
  suspendFrom: string;
  suspendTo: string;
  lastSuspended: string;
  lastRevoked: string;
  warehouse: string[];
  availablePrevileges: PrevilegeNode[];
  allocatedPrevileges: PrevilegeNode[];
}
export interface SetupSecuritySearchModel {
  loginName: string;
  fullName: string;
  suspended: boolean;
}
export interface SetupSecurityPrevilegesTreeModel {
  id: string;
  name: string;
  parentId: string;
  selected: boolean;
}

export interface PrevilegeNode {
  id: number;
  name: string;
  parentId?: number;
  children?: PrevilegeNode[];
}
export interface FlattenedPrevilegeNode {
  id?: number;
  name: string;
  level: number;
  expandable: boolean;
  parentId?: number;
}
