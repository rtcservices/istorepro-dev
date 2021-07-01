export interface SetupWarehouseModel {
  companyCode: string;
  companyName: string;
}

export interface SetupWarehouseDocumentModel {
  type: string;
  prefix: string;
  currentNo: number;
  autoEmail: boolean;
}

export interface SetupWarehouseRuleBoxModel {
  serialNo: number;
  rule: string;
  value: string;
}

export interface SetupWarehouseContactModel {
  name: string;
  email: string;
}

export interface SetupWarehouseOperatorModel {
  code: string;
  name: string;
  loginName: string;
}
export interface SetupWarehouseSearchModel {
  warehouseCode: string;
  description: string;
  id: string;
  email: string;
}
