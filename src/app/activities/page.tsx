// import components
import ActivitiesCatalog from "@/components/activities/ActivitiesCatalog";

// import lib
import { getActivities } from "@/libs/activities/getActivities";

// import interface
import { ActivityItem } from "@/interface/activitiesInterface";

export default function Activities() {
  // return
  return (
    <main className='flex flex-col gap-8 py-28 w-full'>
      <div className="flex flex-row justify-between w-full">
        <h1 className="font-semibold text-5xl text-mgray-1">Activities</h1>
      </div>

      <div className="flex flex-col justify-start items-start gap-8 py-8 w-full">
        <h2 className="font-normal text-3xl text-mgray-2">27 May 2024</h2>
        <div className="justify-start gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
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