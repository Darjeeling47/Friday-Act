// import components
import Button from "./Button"
import ExpandCard from "./ExpandCard"

export default function ExpandList({
  title,
  children,
  data,
  listKey,
}: {
  title: string
  children: (data: any) => React.ReactNode
  data: any[]
  listKey: string
}) {
  // Return
  return (
    <div className='mt-6 flex flex-col border-t border-t-mgray-6 sm:hidden'>
      <p className='pl-7 py-2 text-base font-medium text-mgray-2 border-b border-b-mgray-6'>{title}</p>
      {data.map((data, _) => (
        <ExpandCard 
          key={listKey}
          title={data[listKey]} 
          children={children(data)}
        />
      ))}
    </div>
  )
}