export interface SetupOwnerShipToModel {
    shipToCode: string;
    shipToName: string;
    address: string;
}

export interface SetupOwnerWHControlModel {
    code: string;
    name: string;
    checked: boolean;
}

export interface SetupOwnerEmailModel {
    type: string;
    autoEmail: boolean;
}