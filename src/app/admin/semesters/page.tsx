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

export default function Semesters() {
  const router = useRouter()

  // Primary variable
  const [data, setData] = useState<Semester[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchValue, setSearchValue] = useState('')
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

  if (loading) return <div className='font-semibold text-xl'>Loading...</div>
  if (error) return <div className='font-semibold text-xl'>Error: {error}</div>

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
    router.push(`admin/semesters/edit/${uid}?${query}`)
  }

  // Function for delete semester
  const onClickDelete = async (data: Semester) => {
    await deleteSemester(data.id)
  }

  // handle for search
  const handleSearch = (value: string) => {
    // TODO: handle search logic
    setSearchValue(value)
    console.log('Search Value:', value)
  }

  // return
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className='flex flex-col gap-5 container'>
        <div className='flex flex-col gap-5'>
          <TableHeader
            onClick={onClickCreate}
            headerTitle='Semesters'
            buttonTitle='New Semesters'
            headerStyle='text-xl md:text-2xl'
            buttonStyle='text-sm md:text-xl'
          />
          <div className='sm:flex hidden'>
            <TableComponent
              headers={headers}
              data={data}
              defaultRowsPerPage={5}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              iconStyle='w-20'
              spaceText='80px'
            />
          </div>
        </div>
        <div className='flex justify-end sm:hidden p-2'>
          <SearchBar
            onChange={handleSearch}
          />
        </div>
        <ExpandList
          title='Year'
          data={data}
          children={(data: Semester) => (
            <div className='flex flex-col gap-y-5 px-7 pb-5 border-b border-b-mgray-6 text-mgray-2'>
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
                  className='bg-[#D9D9D9] px-10 py-2 rounded-xl text-[10px] text-center text-white'
                  onClick={() => {
                    if (onClickEdit) {
                      onClickEdit(data)
                    }
                  }}>
                  Edit
                </Button>
                <Button
                  className='bg-vidva px-10 py-2 rounded-xl text-[10px] text-center text-white'
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
