// import interface
import { Pagination } from "./basicsInterface";
import { CompanyItem } from "./companiesInterface";
import { Semester } from "./semestersInterface";
import { TagItem } from "./tagsInterface";

export interface Activities {
  success: boolean;
  count: number;
  activities: ActivityItem[];
  pagination: Pagination;
}
export interface ActivitiesGroupByDate {
  success: boolean;
  count: number;
  dates: ActivitiesGroupByDateItem[];
  pagination: Pagination;
}

export interface ActivitiesGroupBySemester {
  success: boolean;
  count: number;
  semesters: ActivitiesGroupBySemesterItem[];
  pagination: Pagination;
}

export interface ActivitiesGroupByDateItem {
  date: string;
  activities: ActivityItem[];
  semester: Semester
}

export interface ActivitiesGroupBySemesterItem {
  semester: Semester
  activities: ActivityItem[];
}

export interface ActivityItem {
  id: number;
  companyId: number;
  semesterId: number;
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  posterUrl: string;
  location: string;
  maxParticipants: number;
  speaker: string;
  createdAt: string;
  updatedAt: string | null;
  currentParticipants: number;
  isApplied?: boolean,
  semester: Semester
  company: CompanyItem | null,
  tags: TagItem[]
}

export interface ActivityParticipants {
  success: boolean;
  count: number;
  participants: ActivityParticipantItem[];
}

export interface ActivityParticipantItem {
  studentId: string,
  firstNameTh: string,
  firstNameEn: string,
  lastNameTh: string,
  lastNameEn: string,
  program: {
    programId: number,
    programName: string
  },
  faculty: {
    facultyId: number,
    facultyName: string
  },
  department: {
    departmentId: number,
    departmentName: string
  },
  university: {
    universityId: number,
    universityName: string
  },
  admissionYear: number
}