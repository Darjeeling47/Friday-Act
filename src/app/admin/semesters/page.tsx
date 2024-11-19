'use client'

import TableComponent from '@/components/table/TableComponent'
import TableHeader from '@/components/table/TableHeader'
import getSemesters from '@/libs/semesters/getSemesters'
import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import deleteSemester from '@/libs/semesters/deleteSemester'
import Button from '@/components/basic/Button'
import { formatDate_Utc_to_EN } from '@/utils/utils'
import SearchBar from '@/components/basic/SearchBar'
import ExpandList from '@/components/table/ExpandList'
import {
  SemesterItem,
  Semesters,
  Semester,
} from '@/interface/semestersInterface'
import { encodeBase64 } from '@/utils/hashUtils'

export default function SemestersPage() {
  const router = useRouter()

  // Primary variable
  const [semesters, setSemesters] = useState<SemesterItem[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const headers = [
    { key: 'year', title: 'Year' },
    { key: 'semester', title: 'Semester' },
    { key: 'start_date', title: 'Start Date' },
    { key: 'end_date', title: 'End Date' },
    { key: 'edit', title: '' },
    { key: 'delete', title: '' },
  ]

  // Function for fetch data
  const fetchSemesters = async () => {
    setLoading(true)
    const allSemesters: Semesters | null = await getSemesters({ search })
    if (allSemesters) {
      setSemesters(allSemesters.semesters)
    }
    setLoading(false)
  }

  // useEffect for fetch data
  useEffect(() => {
    fetchSemesters()
  }, [search])

  if (loading) return <div className='text-xl font-semibold'>Loading...</div>
  if (error) return <div className='text-xl font-semibold'>Error: {error}</div>

  // Function for create semester
  const onClickCreate = () => {
    router.push(`semesters/create`)
  }

  // Function for edit semester
  const onClickEdit = (data: SemesterItem) => {
    const id = encodeBase64(data.id.toString())
    router.push(`semesters/edit/${id}`)
    setSearch('')
  }

  // Function for delete semester
  const onClickDelete = async (data: SemesterItem) => {
    const result = await deleteSemester(data.id)
    setSearch('')
    if (result) fetchSemesters()
  }

  // handle for search
  const handleSearch = (value: string) => {
    setSearch(value)
  }

  // return
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className='container flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <TableHeader
            onClick={onClickCreate}
            headerTitle='Semesters'
            buttonTitle='New Semesters'
            headerStyle='text-[24px]'
            buttonStyle='text-[13px]'
          />
          <div className='hidden sm:flex'>
            <TableComponent
              headers={headers}
              data={semesters || []}
              defaultRowsPerPage={5}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              iconStyle='w-20'
              spaceText='80px'
            />
          </div>
        </div>
        <div className='flex justify-end p-2 sm:hidden'>
          <SearchBar onChange={handleSearch} />
        </div>
        <ExpandList
          title='Year'
          data={semesters || []}
          children={(data: SemesterItem) => (
            <div className='flex flex-col gap-y-5 border-b border-b-mgray-6 px-7 pb-5 text-mgray-2'>
              <div className='grid grid-cols-2'>
                <div>
                  <p className='text-[12px]'>Semester</p>
                  <p className='text-[10px]'>{data.semester}</p>
                </div>
              </div>
              <div className='grid grid-cols-2'>
                <div>
                  <p className='text-[12px]'>Start time</p>
                  <p className='text-[10px]'>
                    {formatDate_Utc_to_EN(data.start_date)}
                  </p>
                </div>
                <div>
                  <p className='text-[12px]'>End time</p>
                  <p className='text-[10px]'>
                    {formatDate_Utc_to_EN(data.end_date)}
                  </p>
                </div>
              </div>
              <div className='flex justify-end space-x-2'>
                <Button
                  className='rounded-xl bg-[#D9D9D9] px-10 py-2 text-center text-[10px] text-white'
                  onClick={() => {
                    if (onClickEdit) {
                      onClickEdit(data)
                    }
                  }}>
                  Edit
                </Button>
                <Button
                  className='rounded-xl bg-vidva px-10 py-2 text-center text-[10px] text-white'
                  onClick={() => {
                    if (onClickDelete) {
                      onClickDelete(data)
                    }
                  }}>
                  Delete
                </Button>
              </div>
            </div>
          )}
          listKey={'year'}></ExpandList>
      </main>
    </Suspense>
  )
}
