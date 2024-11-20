'use client'
// import next
import Image from 'next/image'
// import react
import { useEffect, useRef, useState } from 'react'
// import components
import Button from '@/components/basic/Button'
// import util
import Cookies from 'js-cookie'
// import api and interface
import getCompanies from '@/libs/companies/getCompanies'
import { CompanyItem } from '@/interface/companiesInterface'
import getTags from '@/libs/tags/getTags'
import { TagItem } from '@/interface/tagsInterface'

export default function CreateActivity() {
  // Variables
  // Primary
  const token = Cookies.get('token')
  const [fileName, setFileName] = useState('')
  const [companyValue, setCompanyValue] = useState()
  const [selectedTagsList, setSelectedTagsList] = useState<number[]>([])
  const [companyList, setCompanyList] = useState<CompanyItem[]>([])
  const [tagList, setTagList] = useState<TagItem[]>([])
  // Secondary
  const fileInputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Fetch list of companies
  const fetchCompanyList = async () => {
    const response = await getCompanies({})

    if (response && response.success) {
      const companies = response.company.items
      setCompanyList(companies)
    }
  }

  // Fetch list of existing tags
  const fetchTags = async () => {
    const response = await getTags({})

    if (response && response.success) {
      const tags = response.tags
      setTagList(tags)
    }
  }
  useEffect(() => {
    fetchCompanyList()
    fetchTags()
    console.log(companyList)
    console.log(tagList)
  }, [])

  // Handle for clicking the "upload file" button
  const handleFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // Handle for custom file input
  const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileName = event.target.files[0].name
      setFileName(fileName)
    }
  }

  // Handle for selecting a company
  const handleSelectCompany = (event: any) => {
    setCompanyValue(event.target.value)
  }

  // Handle for selecting tags
  const handleSelectTag = (event: any) => {
    const currentTags = selectedTagsList
    if ( currentTags.length === 0 || !currentTags.includes(event.target.value)) {
      currentTags.push(event.target.value)
      setSelectedTagsList(currentTags)
    } else if (currentTags.includes(event.target.value)) {
      const removedArray = currentTags.filter((member) => member !== event.target.value)
      setSelectedTagsList(removedArray)
    }
    console.log(currentTags)
  }

  // Handle for clicking the "save" button
  const handleSaveButtonClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click()
    }
  }

  // Handle for submitting form
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const submit = async () => {
      try {
        const formData = new FormData()
        Object.keys(data).forEach((key) => {
          // use startTime date as base
          if (key === 'startTime') {
            const date = new Date(data[key] as string)
            const startDate = date.getUTCDate()
            const startMonth = date.getUTCMonth()
            const startYear = date.getUTCFullYear()
            const startHour = date.getUTCHours()
            const startMinute = date.getUTCMinutes()
            const constructedDateString = `${startYear}-${startMonth}-${startDate}`
            const constructedTimeString = `${startHour}:${startMinute}:00`
            console.log(constructedDateString, constructedTimeString)
            formData.append('date', constructedDateString)
            formData.append('startTime', constructedTimeString)
          }
          if (key === 'endTime') {
            const date = new Date(data[key] as string)
            const endHour = date.getUTCHours()
            const endMinute = date.getUTCMinutes()
            const constructedTimeString = `${endHour}:${endMinute}:00`
            console.log(constructedTimeString) 
            formData.append('endTime', constructedTimeString)
          }
          formData.append(key, data[key])
        })

        if (companyValue) {
          formData.append('companyId', companyValue)
        }

        if (fileInputRef.current && fileInputRef.current.files) {
          formData.append('poster', fileInputRef.current.files[0])
        }

        const response = await fetch(`${process.env.PUBLIC_BACKEND_URL}/api/v1/activities`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })

        if (response.ok) {
          console.log('Success')
        } else {
          console.log('Creating activity failed with response: ' + response.statusText)
        }
      } catch (e) {
        console.log(e)
      }
    }
    submit()
  }

  // Return
  return (
    <main className='rounded-3xl bg-mgray-5 shadow-2 sm:bg-transparent lg:py-8 sm:shadow-none md:mx-12 lg:mx-24 xl:mx-48'>
      <div className='flex flex-col gap-y-5 pb-16 pt-16 sm:mt-6 md:mt-12'>
        <div className='flex items-center justify-center gap-x-4'>
          <Image
            src='/logo/Logo_Create.png'
            alt='Create Activity'
            width={40}
            height={40}
          />
          <h1 className='text-2xl font-semibold sm:text-[30px] md:text-[40px]'>
            Create Activity
          </h1>
        </div>
        <form
          className='flex flex-col gap-y-5 px-4 sm:mx-24 md:mx-12'
          onSubmit={handleSubmitForm}>
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-base text-mgray-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='rounded-xl border-1 border-mgray-6 bg-transparent p-2 placeholder-mgray-3'
              placeholder='Please Enter'
            />
          </div>
          <div className='flex items-center gap-x-5'>
            <label htmlFor='poster' className='text-base text-mgray-2'>
              Poster Image
            </label>
            <input
              type='file'
              id='poster'
              name='poster'
              className='hidden'
              ref={fileInputRef}
              onChange={handleUploadedFile}
            />
            <Button
              className='flex gap-x-2 rounded-xl bg-vidva px-5 py-3 text-white'
              onClick={handleFileInput}>
              <p>Upload file</p>
              <Image
                src='/logo/Logo_CloudUpload.png'
                alt='Upload'
                width={20}
                height={20}
              />
            </Button>
            {fileName && <p>{fileName}</p>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='companyId' className='text-base text-mgray-2'>
              Company{' '}
            </label>
            <select
              id='companyId'
              name='companyId'
              onChange={handleSelectCompany}
              className='rounded-xl border-1 border-mgray-6 bg-transparent p-2 placeholder-mgray-3'
            >
              {companyList.map((company) => (
                <option value={company.companyId}>{company.companyNameTh}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='description' className='text-base text-mgray-2'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className='min-h-32 resize-none rounded-xl border-1 border-mgray-6 bg-transparent p-2 placeholder-mgray-3'
              placeholder='Please Enter'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='startTime' className='text-base text-mgray-2'>
              Start Time
            </label>
            <input
              type='datetime-local'
              id='startTime'
              name='startTime'
              className='rounded-xl border-1 border-mgray-6 bg-transparent p-2 placeholder-mgray-3'
              placeholder='Please Enter'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='endTime' className='text-base text-mgray-2'>
              End Time
            </label>
            <input
              type='datetime-local'
              id='endTime'
              name='endTime'
              className='rounded-xl border-1 border-mgray-6 bg-transparent p-2 placeholder-mgray-3'
              placeholder='Please Enter'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='participants' className='text-base text-mgray-2'>
              Max Participants
            </label>
            <input
              type='text'
              id='maxParticipants'
              name='maxParticipants'
              className='rounded-xl border-1 border-mgray-6 bg-transparent p-2 placeholder-mgray-3'
              placeholder='Please Enter'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='tags' className='text-base text-mgray-2'>
              Tags
            </label>
            <input
              type='text'
              id='tags'
              name='tags'
              className='rounded-xl border-1 border-mgray-6 bg-transparent p-2 placeholder-mgray-3'
              placeholder='Please Enter'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='location' className='text-base text-mgray-2'>
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='rounded-xl border-1 border-mgray-6 bg-transparent p-2 placeholder-mgray-3'
              placeholder='Please Enter'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='speaker' className='text-base text-mgray-2'>
              Speakers
            </label>
            <input
              type='text'
              id='speaker'
              name='speaker'
              className='rounded-xl border-1 border-mgray-6 bg-transparent p-2 placeholder-mgray-3'
              placeholder='Please Enter'
            />
          </div>
          <button type='submit' className='hidden' ref={buttonRef} />
          <Button
            className={`my-4 rounded-xl py-3`}
            onClick={handleSaveButtonClick}>
            Save
          </Button>
        </form>
      </div>
    </main>
  )
}
