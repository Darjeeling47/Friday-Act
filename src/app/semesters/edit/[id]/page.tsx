'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import updateSemester from '@/libs/semesters/updateSemester'

export default function EditSemester() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Primary variables for form fields
  const [id, setId] = useState<number>(0)
  const [year, setYear] = useState<number>(0)
  const [semester, setSemester] = useState<number>(0)
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [icon, setIcon] = useState<string>('/logo/Logo_Calendar.png')

  // Styling variables
  const [headerStyle, setHeaderStyle] = useState(
    'text-2xl font-semibold text-mgray-1'
  )
  const [imgStyle, setImgStyle] = useState('ml-4 mr-4')
  const [typeStyle, setTypeStyle] = useState(
    'block text-sm font-medium text-mgray-2'
  )
  const [inputStyle, setInputStyle] = useState(
    'w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mred'
  )
  const [submitStyle, setSubmitStyle] = useState(
    'w-full py-2 text-white font-semibold rounded-lg'
  )

  // Status variables
  const [isSaving, setIsSaving] = useState<boolean>(false)

  // Fetch data from query parameters and set initial state
  useEffect(() => {
    const id = searchParams.get('id')
    const year = searchParams.get('year')
    const semester = searchParams.get('semester')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    if (id && year && semester && startDate && endDate) {
      setId(parseInt(id))
      setYear(parseInt(year))
      setSemester(parseInt(semester))
      setStartDate(startDate)
      setEndDate(endDate)
    }
  }, [searchParams])

  // handleSave function to handle form submission
  const handleSave = async () => {
    setIsSaving(true)
    let data = {
      id: id,
      year: year,
      semester: semester,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    }
    await updateSemester(
      data.id,
      data.year,
      data.semester,
      data.startDate,
      data.endDate
    )
    setIsSaving(false)
    router.back()
  }

  return (
    <main className='container'>
      <div className='flex h-[50vh] flex-col items-center justify-center'>
        <div className='shadow-md w-full max-w-4xl rounded-lg bg-[#FAFAFA] p-8'>
          <div className='mb-6 flex items-center justify-center'>
            <Image
              src={icon}
              alt='icon'
              width={40}
              height={40}
              className={`${imgStyle}`}
            />
            <h2 className={`${headerStyle}`}>Edit Semester</h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSave()
            }}>
            <label className={`${typeStyle}`}>Year</label>
            <input
              type='text'
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <label className={`${typeStyle}`}>Semester</label>
            <input
              type='text'
              value={semester}
              onChange={(e) => setSemester(parseInt(e.target.value))}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <label className={`${typeStyle}`}>Start Date</label>
            <input
              type='date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <label className={`${typeStyle}`}>End Date</label>
            <input
              type='date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <button
              type='submit'
              className={`${isSaving ? 'bg-red-300' : 'bg-vidva'} ${submitStyle}`}
              disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
