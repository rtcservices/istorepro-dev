export interface QueryStockModel {
    WH: string;
    Owner: string;
    Item: string;
    Description: string;
    Type: string;
    SKU: string;
    Stock: number;
    Allocated: number;
    BalGood: number;
    BalDmgOrExp: number;
  }