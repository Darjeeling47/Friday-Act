'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function CreateActivity() {
  const [fileName, setFileName] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileInput = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click()
      }
    }

    const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const fileName = event.target.files[0].name
        setFileName(fileName)
      }
    }

    return (
      <main className='container px-24 py-8'>
        <div className='flex flex-col gap-y-5 mt-12'>
          <div className='flex justify-center gap-x-4 items-center'>
            <Image
              src='/logo/Logo_Create.png'
              alt='Create Activity'
              width={40}
              height={40}
            />
            <h1 className='font-bold text-4xl'>Create Activity</h1>
          </div>
          <form className='flex flex-col gap-y-5 mx-24 px-16'>
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-lg text-mgray-2'>Name</label>
              <input type='text' id='name' name='name' className='rounded-xl border-1 border-mgray-6 placeholder-mgray-3 p-2 bg-transparent' placeholder='Please Enter'/>
            </div>
            <div className='flex gap-x-5 items-center'>
              <label htmlFor='posterimage' className='text-lg text-mgray-2'>Poster Image</label>
              <input type='file' id='posterimage' name='posterimage' className='hidden' ref={fileInputRef} onChange={handleUploadedFile}/>
              <button type='button' className='flex rounded-xl gap-x-2 px-5 py-3 bg-vidva text-white' onClick={handleFileInput}>
                <p>Upload file</p>
                <Image
                  src='/logo/Logo_CloudUpload.png'
                  alt='Upload'
                  width={20}
                  height={20}
                />
              </button>
              { fileName && <p>{fileName}</p> }
            </div>
            <div className='flex flex-col'>
              <label htmlFor='company' className='text-lg text-mgray-2'>Company </label>
              <input type='text' id='company' name='company' className='rounded-xl border-1 border-mgray-6 placeholder-mgray-3 p-2 bg-transparent' placeholder='Please Enter'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='description' className='text-lg text-mgray-2'>Description</label>
              <textarea id='description' name='description' className='rounded-xl border-1 border-mgray-6 placeholder-mgray-3 p-2 min-h-32 bg-transparent resize-none' placeholder='Please Enter'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='start' className='text-lg text-mgray-2'>Start Time</label>
              <input type='text' id='start' name='start' className='rounded-xl border-1 border-mgray-6 placeholder-mgray-3 p-2 bg-transparent' placeholder='Please Enter'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='end' className='text-lg text-mgray-2'>End Time</label>
              <input type='text' id='end' name='end' className='rounded-xl border-1 border-mgray-6 placeholder-mgray-3 p-2 bg-transparent' placeholder='Please Enter'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='participants' className='text-lg text-mgray-2'>Max Participants</label>
              <input type='text' id='participants' name='participants' className='rounded-xl border-1 border-mgray-6 placeholder-mgray-3 p-2 bg-transparent' placeholder='Please Enter'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='tags' className='text-lg text-mgray-2'>Tags</label>
              <input type='text' id='tags' name='tags' className='rounded-xl border-1 border-mgray-6 placeholder-mgray-3 p-2 bg-transparent' placeholder='Please Enter'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='location' className='text-lg text-mgray-2'>Location</label>
              <input type='text' id='location' name='location' className='rounded-xl border-1 border-mgray-6 placeholder-mgray-3 p-2 bg-transparent' placeholder='Please Enter'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='speakers' className='text-lg text-mgray-2'>Speakers</label>
              <input type='text' id='speakers' name='speakers' className='rounded-xl border-1 border-mgray-6 placeholder-mgray-3 p-2 bg-transparent' placeholder='Please Enter'/>
            </div>
            <button type='submit' className='flex justify-center rounded-xl mt-4 p-2 px-5 py-4 bg-vidva text-white text-lg'>Save</button>
        </form>
        </div>
      </main>
    )
  }