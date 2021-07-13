export interface RoutinesStockAdjustModel {
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
    adj: string;
  }

  export interface RoutinesStockAdjustSearchModel {
    wh: string;
    owner: string;
    date: string;
    san: string;
  }
