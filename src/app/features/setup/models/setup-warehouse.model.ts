export interface SetupWarehouseModel{
    companyCode: string;
    companyName: string;
  }
  
  export interface SetupWarehouseDocumentModel{
    type: string;
    prefix: string;
    currentNo: number;
  }

  export interface SetupWarehouseRuleBoxModel{
    serialNo: number;
    rule: string;
    value: string;
  }

  export interface SetupWarehouseContactModel{
    name: string;
    email: string;
  }

  export interface SetupWarehouseOperatorModel{
    code: string;
    name: string;
    loginName: string;
  }