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
  
  export interface OperationReceiptOwnerDialog {
   type:string;
   code:string;
   name:string;
  }

  export interface OperationReceiptItemDialog {
    type:string;
    description:string;
    item:string;
    sku:string;
   }
   
  