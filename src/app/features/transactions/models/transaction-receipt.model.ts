export interface TransactionReceiptModel {
  itemId: number;
  item: string;
  description: string;
  sku: string;
  quantity: number;
  weight: number;
  volume: number;
  manufactureDate: string;
  expiry: string;
  batchNo: string;
  remarks: string;
  status: string;
}

export const defaultTransactionReceipt: TransactionReceiptModel = {
  itemId: Math.random(),
  item: '',
  description: '',
  sku: '',
  quantity: 0,
  weight: 0,
  volume: 0,
  manufactureDate: '',
  expiry: '',
  batchNo: '',
  remarks: '',
  status: '',

}
