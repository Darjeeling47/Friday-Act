'use client'

import TableComponent from '@/components/basic/TableComponent'
import TableHeader from '@/components/basic/TableHeader'
import getSemesters from '@/libs/semesters/getSemesters'
import updateSemester from '@/libs/semesters/updateSemester'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Semester {
  year: number
  semester: number
  start_date: string
  end_date: string
}

// Mock Data
var mockData = {
  success: true,
  count: 3,
  pagination: {
    current: 1,
    last: 1,
    next: null,
    prev: null,
    limit: 25,
  },
  semesters: [
    {
      id: 1,
      year: 2025,
      semester: 1,
      start_date: '2025-02-15T00:00:00.000Z',
      end_date: '2025-07-30T00:00:00.000Z',
      created_at: '2024-10-23T17:19:54.052Z',
      updated_at: null,
    },
    {
      id: 2,
      year: 2025,
      semester: 1,
      start_date: '2025-02-15T00:00:00.000Z',
      end_date: '2025-07-30T00:00:00.000Z',
      created_at: '2024-10-23T17:19:54.052Z',
      updated_at: null,
    },
    {
      id: 3,
      year: 2025,
      semester: 2,
      start_date: '2025-02-15T00:00:00.000Z',
      end_date: '2025-07-30T00:00:00.000Z',
      created_at: '2024-10-23T17:19:54.052Z',
      updated_at: null,
    },
    {
      id: 4,
      year: 2025,
      semester: 1,
      start_date: '2025-02-15T00:00:00.000Z',
      end_date: '2025-07-30T00:00:00.000Z',
      created_at: '2024-10-23T17:19:54.052Z',
      updated_at: null,
    },
    {
      id: 5,
      year: 2025,
      semester: 1,
      start_date: '2025-02-15T00:00:00.000Z',
      end_date: '2025-07-30T00:00:00.000Z',
      created_at: '2024-10-23T17:19:54.052Z',
      updated_at: null,
    },
    {
      id: 6,
      year: 2025,
      semester: 4,
      start_date: '2025-02-15T00:00:00.000Z',
      end_date: '2025-07-30T00:00:00.000Z',
      created_at: '2024-10-23T17:19:54.052Z',
      updated_at: null,
    },
    {
      id: 7,
      year: 2025,
      semester: 1,
      start_date: '2025-02-15T00:00:00.000Z',
      end_date: '2025-07-30T00:00:00.000Z',
      created_at: '2024-10-23T17:19:54.052Z',
      updated_at: null,
    },
  ],
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

  // useEffect for fetch data in table
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await getSemesters()
        const data = mockData
        const semesters = data.semesters
        setData(semesters)
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

  const router = useRouter()

  const onClickEdit = async (uid: number, data: Semester) => {
    const query = new URLSearchParams({
      year: data.year.toString(),
      semester: data.semester.toString(),
      startDate: data.start_date,
      endDate: data.end_date,
    }).toString()
    router.push(`semesters/edit/${uid}?${query}`)
  }

  // return
  return (
    <main className='container'>
      <TableHeader
        headerTitle='Semesters'
        buttonTitle='New Semesters'
        headerStyle='text-xl md:text-2xl'
        buttonStyle='text-sm md:text-xl'
      />
      <TableComponent
        headers={headers}
        data={data}
        defaultRowsPerPage={5}
        onClickEdit={onClickEdit}
      />
    </main>
  )
}
