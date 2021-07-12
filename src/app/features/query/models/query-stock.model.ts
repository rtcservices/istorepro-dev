export interface QueryStockModel {
  wh: string;
  owner: string;
  item: string;
  description: string;
  type: string;
  sku: string;
  stock: number;
  allocated: number;
  balGood: number;
  balDmgOrExp: number;
}