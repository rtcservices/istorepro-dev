export interface SetupCompanyModel {
  companyCode: string;
  companyName: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  telephone: string;
  fax: string;
  sector: string;
  email: string;
  contactPerson: string;
  website: string;
  suspendOperation: boolean;
  companyLogo: string;
  whAvailableUsed: number;
  userAvailableUsed: number;
  licenseAlertEmail: string;
}
export interface SetupCompanySearchModel {
  companyCode: string;
  companyName: string;
}
