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
  availablePrevileges: string[];
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
