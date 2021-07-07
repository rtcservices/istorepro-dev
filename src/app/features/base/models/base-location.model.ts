export interface BaseLocationModel {
    warehouse: string;
    row: string;
    unit: string;
    level: string;
    location: string;
    nature: string;
    zone: string;
    description: string;
    storageType: string;
    scanType: string;
    scanCode: string;
    storageStatus: string;
    freeze: boolean;
    reworkArea: boolean;
    walkSequence: number;
    floorSequence: number;
    lpnLocation: number;
    planning: boolean;
    autoAllocation: boolean;

    length: number;
    breadth: number;
    height: number;
    volume: number;
    volumeValidate: boolean;
    volumeSafePercentage: number;
    volumeFillPercentage: number;
    weight: number;
    weightValidate: boolean;
    weightSafePercentage: number;
    weightFillPercentage: number;
    autoFill: boolean;
}

export interface BaseLocationSearchModel {
    warehouse: string;
    row: string;
    unit: string;
    location: string;
    description: string;
    status: string;
    nature: string;
}