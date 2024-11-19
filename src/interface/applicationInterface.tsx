import { Pagination } from './basicsInterface'

export interface Applications {
  success: boolean
  count: number
  pagination: Pagination
  applications: ApplicationItem[]
}

export interface Application {
  success: boolean
  application: ApplicationItem
}

export interface ApplicationItem {
    id: number;
    user: {
      id: string;
      thaiName: string;
      studentId: string;
    };
    activity: {
      id: number;
      name: string;
      company: {
        id: number;
        name: string;
      };
      semester: {
        id: number;
        year: number;
        semester: number;
      };
    };
    createdAt: string;
    updatedAt: string;
    isQrGenerated: boolean;
    qrString: string | null;
    qrGeneratedAt: string;
    isApproved: boolean;
    isCanceled: boolean;
    cancellationReason: string | null;
}