export interface OperationDeliveryModel {
  grn: string;
  item: string;
  description: string;
  po: string;
  sku: string;
  batchnumber: string;
  mfg: string;
  expiry: string;
  location: string;
  stock: string;
  alloc: string;
  pkd: string;
}

export interface OperationDeliverySearchModel {
  wh: string;
  owner: string;
  date: string;
  drn: string;
  shipto: string;
  status: string;
  return: string;
}
