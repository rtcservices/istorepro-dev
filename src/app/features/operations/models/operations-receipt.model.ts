export interface OperationReceiptModel {
    item: string;
    description: string;
    ru: string;
    sku: string;
    qtyexp: number;
    qtygood: number;
    qtydmg: number;
    netwt: number;
    netvol: number;
    mfgdate: string;
    expdate: string;
    batchno: string;
    remarks: string;
  }

  export interface OperationReceiptSearchModel {
    warehouse: string;
    owner: string;
    grn: string;
    receiptDate: string;
    po: string;
    status: string;
    remarks: string;
  }
  