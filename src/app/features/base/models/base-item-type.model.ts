export interface BaseItemTypeModel {
  code: string;
  description: string;
  storageType: string;
  expiry: string;
  manufacturingDate: boolean;
  batchNo: boolean;
  consolidateOn: string;
  defaultPick: string;
}

export interface BaseItemTypeCodeModel {
  checked: boolean;
  code: string;
  name: string;
}
