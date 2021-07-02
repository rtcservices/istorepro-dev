
export interface BaseItemWhControlModel {
    checked: boolean;
    code: string;
    name: string;
    customers: boolean;
    vendors: boolean;
    sku: string;
}



export interface BaseItemInventoryAlertModel {
    warehouse: string;
    description: string;
    min: string;
    reorder: string;
    max: string;
    lastalert: string;
}



export interface BaseItemMatrixModel {
   
    from: {
        value: string;
        unit: string;
    };
    to: {
        value: string;
        unit: string;
        weight: string;
        length: string;
        breadth: string;
        height: string;
        volume: string;
    };   
}

