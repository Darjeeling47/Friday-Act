import { Pagination } from "./basicsInterface"

export interface Tags{
    success: boolean,
    count: number,
    pagination: Pagination,
    tags: TagItem[]
}

export interface Tag{
  success: boolean,
  tag: TagItem
}

export interface TagItem {
  id: number,
  name: string,
  color: string,
  updated_at: string | null
}