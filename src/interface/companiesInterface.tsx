export interface Companies {
  items: CompanyItem[]
  meta: {
    totalItem: number,
    itemCount: number,
    itemsPerPage: number,
    totalPage: number,
    currentPage: number
  }
}

export interface CompanyItem {
  companyId: number;
  companyNameTh: string;
  companyNameEn: string;
  description: string;
  building: string;
  floor: string;
  room: string;
  houseNo: string;
  street: string;
  district: string;
  subDistrict: string;
  postalCode: string;
  province: string;
  website: string;
  facebook: string;
  line: string;
  profileExternalLink: string;
  profileDocumentUrl: string;
  logoUrl: string;
  companyType: CompanyType;
  companySize: CompanySize;
  openings: Opening[];
}

export interface CompanyType {
  companyTypeId: number;
  type: string;
}

export interface CompanySize {
  companySizeId: number;
  size: string;
}

export interface Opening {
  openingId: number;
  title: string;
}