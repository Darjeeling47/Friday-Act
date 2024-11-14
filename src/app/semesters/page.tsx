'use client'

import TableComponent from '@/components/basic/TableComponent'
import TableHeader from '@/components/basic/TableHeader'
import getSemesters from '@/libs/semesters/getSemesters'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import deleteSemester from '@/libs/semesters/deleteSemester'

export default function Semesters() {
  const router = useRouter()

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
        const data = await getSemesters()
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

  // Function for create semester
  const onClickCreate = () => {
    router.push(`semesters/create`)
  }

  // Function for edit semester
  const onClickEdit = (data: Semester) => {
    let uid = data.id
    const query = new URLSearchParams({
      id: data.id.toString(),
      year: data.year.toString(),
      semester: data.semester.toString(),
      startDate: data.start_date,
      endDate: data.end_date,
    }).toString()
    router.push(`semesters/edit/${uid}?${query}`)
  }

  // Function for delete semester
  const onClickDelete = async (data: Semester) => {
    await deleteSemester(data.id)
  }

  // return
  return (
    <main className='container'>
      <TableHeader
        onClick={onClickCreate}
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
        onClickDelete={onClickDelete}
      />
    </main>
  )
}
