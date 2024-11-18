// import interface
import { Pagination } from "./basicsInterface";
import { CompanyItem } from "./companiesInterface";
import Semesters from "./semestersInterface";
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
  company_id: number;
  semester_id: number;
  name: string;
  description: string;
  date: string;
  start_time: string;
  end_time: string;
  poster_url: string;
  location: string;
  max_participants: number;
  speaker: string;
  created_at: string;
  updated_at: string | null;
  currentParticipants: string;
  isApplied?: boolean,
  semester: Semester
  company: CompanyItem | null,
  tags: TagItem[]
}