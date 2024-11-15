'use client'
// import react
import { useState, useEffect } from "react";
// import libs
import getTags from "@/libs/tags/getTags"

// import interface
import { Tags, TagItem } from "@/interface/tagsInterface";

export default function Tag() {
  // Primary variable
  const [tags, setTags] = useState<TagItem[] | null>(null)
  const headers = [
    { key: 'year', title: 'Year' },
    { key: 'semester', title: 'Semester' },
    { key: 'start_date', title: 'Start Date' },
    { key: 'end_date', title: 'End Date' },
    { key: 'edit', title: '' },
    { key: 'delete', title: '' },
  ]

  // useEffect for fetch tags
  useEffect(() => {
    const fetchData = async () => {
      const allTags: Tags = await getTags({ search: "" });
      if (allTags) {
        setTags(allTags.tags)
      }
    }
    fetchData()
  }, [])

  // return
  return (
    <main className='container'>
      <h1>Tag</h1>
    </main>
  )
}