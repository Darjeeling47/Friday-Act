import ActivitiesItem from "@/components/activities/ActivitiesItem"

export default function Activities() {
  // return
  return (
    <main className='py-28 w-full flex flex-col gap-8'>
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold text-5xl text-mgray-1">Activities</h1>
      </div>

      <div className="w-full py-8 flex flex-col justify-start items-start gap-8">
        <h2 className="font-normal text-mgray-2 text-3xl">27 May 2024</h2>
        <div className="w-full grid justify-start grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1 w-full overflow-hidden">
            <ActivitiesItem/>
          </div>
          <div className="col-span-1 w-full overflow-hidden">
            <ActivitiesItem/>
          </div>
          <div className="col-span-1 w-full overflow-hidden">
            <ActivitiesItem/>
          </div>
        </div>
      </div>
    </main>
  )
}