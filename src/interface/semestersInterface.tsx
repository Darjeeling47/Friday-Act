import { Pagination } from './basicsInterface'

export interface Semesters {
  success: boolean
  count: number
  pagination: Pagination
  semesters: SemesterItem[]
}

export interface Semester {
  success: boolean
  semester: SemesterItem
}

export interface SemesterItem {
  id: number
  year: number
  semester: number
  start_date: string
  end_date: string
  created_at: string
  updated_at: string | null
}
