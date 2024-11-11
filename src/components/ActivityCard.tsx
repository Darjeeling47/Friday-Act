import Image from 'next/image'
import Tag from './basic/Tag'

var mockData = {
  name: 'Activity Name',
  company: 'Company Name',
  tags: ['tag1', 'tag2'],
  description: 'ในสัปดาห์นี้นิสิตจะได้ทำความรู้จักกับลักษณะงานของ Data Scientist ผ่านการทำ Workshop ที่จะทำให้นิสิตได้รู้จักข้อมูลเชิงลึกทางด้านการเงินมากขึ้น และกิจกรรมนี้นิสิตสามารถเข้าร่วม Data Scientist Labs เพื่อชิงรางวัลอีกด้วย 🏆🏆🏆',
  startDate: new Date(),
  endDate: new Date(),
  capacity: 100,
  reserved: 60,
  picture: '/Poster/Psychological.png',
}


export default function ActivityCard({
  activity = mockData,
}: {
  activity?: {
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
  return (
    <div className="flex flex-row space-x-6 w-full">
      <div className='h-fit w-48'>
        <Image src={activity.picture} alt="activity" width={500} height={500}/>
      </div>
      <div className='flex flex-col justify-between gap-12 w-2/3 h-full'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-xl text-mgray-1 font-medium'>{activity.name}</h3>
          <p className='text-md text-mgray-2'>{activity.company}</p>
          <hr className='my-2' />
          <div className='flex flex-row gap-2 overflow-auto'>
            {activity.tags.map((tag, i) => (
              <Tag key={i} text={tag}></Tag>
            ))}
          </div>
          <p className='line-clamp-3 text-mgray-2 '>{activity.description}</p>
        </div>
        {
          activity.capacity - activity.reserved > 0 ? (
            <p className='text-emerald-500 text-right'>{`${activity.capacity - activity.reserved} Seats Left`}</p>
          ) : (
            <p className='text-rose-600 text-right'>Full</p>
          )}
      </div>
    </div>
  )
}