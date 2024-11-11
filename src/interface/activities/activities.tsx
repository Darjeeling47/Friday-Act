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
  isApplied: Semester,
  company: Company | null,
  tags: TagItem[]
}

export interface Semester {
  id: number,
  year: number,
  semester: number,
  start_date: string,
  end_date: string,
  created_at: string,
  updated_at: string | null
}

export interface TagItem {
  id: number,
  name: string,
  color: string,
  updated_at: string | null
}

export interface Company {
  id: number,
  name: string,
  logoUrl: string
}