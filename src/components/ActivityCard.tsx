import Image from 'next/image'
import Link from 'next/link'

// import components
import Tag from './basic/Tag'

var mockData = {
  id: '1',
  name: 'Activity Name',
  company: 'Company Name',
  tags: ['tag1', 'tag2'],
  description:
    'ในสัปดาห์นี้นิสิตจะได้ทำความรู้จักกับลักษณะงานของ Data Scientist ผ่านการทำ Workshop ที่จะทำให้นิสิตได้รู้จักข้อมูลเชิงลึกทางด้านการเงินมากขึ้น และกิจกรรมนี้นิสิตสามารถเข้าร่วม Data Scientist Labs เพื่อชิงรางวัลอีกด้วย 🏆🏆🏆',
  startDate: new Date('2024-06-12T13:00:00'),
  endDate: new Date('2024-06-12T16:00:00'),
  capacity: 100,
  reserved: 60,
  picture: '/Poster/Psychological.png',
}

export default function ActivityCard({
  activity = mockData,
}: {
  activity?: {
    id: string
    name: string
    company: string
    tags: string[]
    description: string
    startDate: Date
    endDate: Date
    capacity: number
    reserved: number
    picture: string
  }
}) {
  const formatDate = (start: Date, end: Date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' } as const
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    } as const

    if (start.toDateString() === end.toDateString()) {
      // Same day
      return `${start.toLocaleTimeString('en-US', timeOptions)} - ${end.toLocaleTimeString(
        'en-US',
        timeOptions
      )} ${start.toLocaleDateString('en-US', options).replace(',', '')}`
    } else {
      // Different days
      const startDate = start
        .toLocaleDateString('en-US', options)
        .replace(',', '')
      const endDate = end.toLocaleDateString('en-US', options).replace(',', '')
      return `${startDate.split(' ')[0]} - ${endDate}`
    }
  }

  return (
    <Link href={`/activities/${activity.id}`}>
      <div className='flex w-full cursor-pointer flex-row space-x-6 rounded-md p-3 hover:bg-mgray-3/20'>
        <div className='h-fit w-48 overflow-clip rounded-md'>
          <Image
            src={activity.picture}
            alt='activity'
            width={500}
            height={500}
          />
        </div>
        <div className='flex h-full w-2/3 flex-col justify-between gap-6'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-xl font-medium text-mgray-1'>
              {activity.name}
            </h3>
            <p className='text-md text-mgray-2'>{activity.company}</p>
            <hr className='my-2' />
            <div className='flex flex-row gap-2 overflow-auto'>
              {activity.tags.map((tag, i) => (
                <Tag key={i} text={tag}></Tag>
              ))}
            </div>
            <p className='line-clamp-3 text-mgray-2'>{activity.description}</p>
          </div>
          <div className='flex flex-row items-center gap-2 text-mgray-2'>
            <i className='bi bi-clock'></i>
            <p className='text-sm text-mgray-2'>
              {formatDate(activity.startDate, activity.endDate)}
            </p>
          </div>
          {activity.capacity - activity.reserved > 0 ? (
            <p className='text-right text-emerald-500'>{`${activity.capacity - activity.reserved} Seats Left`}</p>
          ) : (
            <p className='text-right text-rose-600'>Full</p>
          )}
        </div>
      </div>
    </Link>
  )
}
