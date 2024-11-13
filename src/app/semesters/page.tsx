"use client"

import TableComponent from "@/components/basic/TableComponent";
import TableHeader from "@/components/basic/TableHeader";
import getSemesters from "@/libs/semesters/getSemesters";
import { formatDate_Utc_to_EN } from "@/utils/utils";
import { error } from "console";
import { useEffect, useState } from "react";

interface Semester {
  year: number;
  semester: number;
  start_date: string;
  end_date: string;
}


export default function Semesters() {
  // Primary variable
  const [data, setData] = useState<Semester[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const headers = [
    { key: 'year', title: 'Year' },
    { key: 'semester', title: 'Semester' },
    { key: 'start_date', title: 'Start Date' },
    { key: 'end_date', title: 'End Date' },
    { key: 'edit', title: '' },
    { key: 'delete', title: '' },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSemesters()
        const semesters = data.semesters
        console.log(semesters)
        const formattedData = semesters.map((semester: Semester) => ({
          ...semester,
          start_date: formatDate_Utc_to_EN(semester.start_date),
          end_date: formatDate_Utc_to_EN(semester.end_date),
        }))
        setData(formattedData)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className='text-xl font-semibold'>Loading...</div>
  if (error) return <div className='text-xl font-semibold'>Error: {error}</div>

  // return
  return (
    <main className='container'>
      <TableHeader
        headerTitle="Semesters"
        buttonTitle="New Semesters"
        headerStyle="text-xl md:text-2xl"
        buttonStyle="text-sm md:text-xl"
      />
      <TableComponent
        headers={headers}
        data={data}
        defaultRowsPerPage={10}
      />
    </main>
  )
}