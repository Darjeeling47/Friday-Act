'use client';

// import react
import { useState, useEffect } from "react";

// import components
import ActivitiesItem from "@/components/activities/ActivityItem";
import ActivityItemApplied from "./ActivityItemApplied";

// import utils
import { formatDate } from "@/utils/dateUtils";

// import interface
import { ActivityItem, ActivitiesGroupByDateItem } from "@/interface/activitiesInterface";

export default function ActivitiesCatalog({
  activitiesGroupByDate
}: {
  activitiesGroupByDate: ActivitiesGroupByDateItem[] | null;
}) {
  // Primary variables
  const [nearestFriday, setNearestFriday] = useState<Date>(new Date());


  // useMemo for memoize filtered activities based on search term

  const getNearestFriday = (date: Date): Date => {
    const dayOfWeek = date.getDay();
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    const nearestFriday = new Date(date);
    nearestFriday.setDate(date.getDate() + daysUntilFriday);
    return nearestFriday;
  }

  useEffect(() => {
    setNearestFriday(getNearestFriday(new Date()));
  }, [])

  // return
  return (
    <>
      {
        activitiesGroupByDate && activitiesGroupByDate.length != 0 ?
          activitiesGroupByDate.map((groupDate: ActivitiesGroupByDateItem) => (
            <div key={groupDate.date} className="flex flex-col justify-start items-start gap-8 py-8 border-b-1 border-b-mgray-2 w-full">
              <h2 className="font-normal text-header-2 text-mgray-2">{formatDate(groupDate.date)}</h2>
              <div className="justify-start gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
                {
                  (
                    new Date(groupDate.date) >= new Date(nearestFriday.getTime() - (6 * 24 * 60 * 60 * 1000))) && (new Date(groupDate.date) <= nearestFriday) ?
                    groupDate.activities.map((activity: ActivityItem) => (
                      <div key={activity.id} className="col-span-1 w-full overflow-hidden">
                        <ActivityItemApplied activity={activity} />
                      </div>
                    )) :
                    groupDate.activities.map((activity: ActivityItem) => (
                      <div key={activity.id} className="col-span-1 w-full overflow-hidden">
                        <ActivitiesItem activity={activity} />
                      </div>
                    ))
                }
              </div>
            </div>
          )) :
          <div className="flex justify-center items-center py-5 w-full text-body-1">
            <p className="text-body-1 text-mgray-2">Not have activities</p>
          </div>
      }
    </>
  );
}