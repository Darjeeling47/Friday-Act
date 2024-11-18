import Image from 'next/image'
import Link from 'next/link'

// import components
import Tag from '@/components/basic/Tag'

export default function ActivityCard({
  activity,
}: {
  activity: {
    id: number
    company_id: number
    semester_id: number
    company: {
      companyId: number
      companyNameTh: string
      companyNameEn: string
      description: string
      logoUrl: string
    }
    semester: {
      id: number
      year: Date
      semester: number
    }
    tags: {
      id: number
      name: string
      color: string
    }[]
    name: string
    description: string
    date: string
    start_time: string
    end_time: string
    poster_url: string
    location: string
    max_participants: number
    currentParticipants: number
    speaker: string
    createdAt: Date
    updatedAt: Date
  }
}) {
  function formatDate(date: string, start_time?: string, end_time?: string): string {
    const dateObj = new Date(date);

    // Format the date as "9 Dec 2024"
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('en-US', { month: 'short' });
    const year = dateObj.getFullYear();

    // Check if start_time and end_time are defined, if not set a default value
    const formattedStartTime = start_time ? start_time.slice(0, 5) : '00:00';
    const formattedEndTime = end_time ? end_time.slice(0, 5) : '00:00';

    // Combine date and time
    return `${day} ${month} ${year}, ${formattedStartTime} - ${formattedEndTime}`;
  }

  return (
    <Link href={`/activities/${activity.id}`}>
      <div className='flex flex-row space-x-6 hover:bg-mgray-3/20 p-3 rounded-md w-full cursor-pointer'>
        <div className='rounded-md w-48 h-fit overflow-clip'>
          <Image
            src={`${process.env.PUBLIC_BACKEND_URL}${activity.poster_url}`}
            alt='activity'
            width={500}
            height={500}
          />
        </div>
        <div className='flex flex-col justify-between gap-6 w-2/3 h-full'>
          <div className='flex flex-col gap-1'>
            <h3 className='font-medium text-mgray-1 text-xl'>
              {activity.name}
            </h3>
            <p className='text-md text-mgray-2'>{activity.company.companyNameEn}</p>
            <hr className='my-2' />
            <div className="flex flex-row justify-center items-start gap-2 w-full h-7 whitespace-nowrap overflow-x-scroll">
              {activity.tags.map((tag, i) => (
                <Tag key={i} text={tag.name} color={tag.color}></Tag>
              ))}
            </div>
            <p className='line-clamp-3 text-mgray-2'>{activity.description}</p>
          </div>
          <div className='flex flex-row items-center gap-2 text-mgray-2'>
            <i className='bi bi-clock'></i>
            <p className='text-mgray-2 text-sm'>
              {formatDate(activity.date, activity.start_time, activity.end_time)}
            </p>
          </div>
          {activity.max_participants - activity.currentParticipants > 0 ? (
            <p className='text-right text-emerald-500'>{`${activity.max_participants - activity.currentParticipants} Seats Left`}</p>
          ) : (
            <p className='text-right text-rose-600'>Full</p>
          )}
        </div>
      </div>
    </Link>
  )
}
