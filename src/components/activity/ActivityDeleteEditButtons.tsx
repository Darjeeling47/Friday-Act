'use client'
import deleteActivity from '@/libs/activities/deleteActivity'
import Button from '../basic/Button'

export default function ActivityDeleteEditButtons({ id }: { id: string }) {
  return (
    <div className='mt-8 flex content-end gap-x-5 text-center'>
      <Button href={`${id}/edit`} className='w-full rounded'>
        Edit
      </Button>
      {/* Desktop: Variant Outline */}
      <Button
        onClick={() => deleteActivity({ id })}
        variant='outline'
        className='hidden w-full rounded sm:block'>
        Delete
      </Button>
      <Button
        onClick={() => deleteActivity({ id })}
        variant='text'
        className='w-full rounded sm:hidden'>
        Delete
      </Button>
    </div>
  )
}
