'use client'

import { Semester, SemesterItem } from '@/interface/semestersInterface'
import getSemester from '@/libs/semesters/getSemester'
import updateSemester from '@/libs/semesters/updateSemester'
import { decodeBase64 } from '@/utils/hashUtils'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
// Import react
import React, { useEffect, useState } from 'react'

// Import components (if any)

// Import util (if any)

// Import icon
// import { FaCalendarAlt } from 'react-icons/fa';

// API (if any)

// require (if any)

export default function CreateSemester() {
  const router = useRouter()
  const { id } = useParams()
  // Primary variables for form fields
  const [uid, setUId] = useState<number>(0)
  const [year, setYear] = useState<string>('')
  const [semester, setSemester] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  // Styling variables
  const [headerStyle, setHeaderStyle] = useState(
    'text-[24px] font-semibold text-mgray-1 item-center text-center'
  )
  const [iconStyle, setIconStyle] = useState(' text-[40px] text-vidva')
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

  // fetch previous data
  const fetchSemester = async () => {
    if (!id) return

    const original = decodeBase64(id as string)
    if (isNaN(parseInt(original))) return
    setUId(parseInt(original))
    try {
      const semesterResponse: Semester | null = await getSemester(
        parseInt(original)
      )
      if (semesterResponse && semesterResponse.success) {
        const semester: SemesterItem = semesterResponse.semester
        setYear(semester.year.toString())
        setSemester(semester.semester.toString())
      } else {
        console.error('Failed to fetch semester data')
        router.push('/admin/semesters')
      }
    } catch (error) {
      console.error('Error fetching semester:', error)
      router.push('/admin/semesters')
    }
  }

  useEffect(() => {
    fetchSemester()
  }, [id])

  // handleSave function to handle form submission
  const handleSave = async () => {
    setIsSaving(true)
    if (year && semester && startDate && endDate)
      await updateSemester(
        uid,
        parseInt(year),
        parseInt(semester),
        startDate,
        endDate
      )
    else router.push('/admin/semesters')
    setIsSaving(false)
  }

  return (
    <main className='container'>
      <div className='flex h-[50vh] flex-col items-center justify-center'>
        <div className='shadow-md w-full max-w-4xl rounded-lg bg-[#FAFAFA] p-8'>
          <div className='mb-6 mt-6 flex flex-wrap items-center justify-center space-x-4'>
            <i className={`bi-calendar2-week-fill ${iconStyle}`}></i>
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
              onChange={(e) => setYear(e.target.value)}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <label className={`${typeStyle}`}>Semester</label>
            <input
              type='text'
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
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
