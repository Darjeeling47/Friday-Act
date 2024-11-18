export interface Pagination {
  now: number;
  last: number;
  next: number | null;
  prev: number | null;
  limit: number;
}