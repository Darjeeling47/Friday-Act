'use client';

// import react
import { useState, useMemo, useEffect } from "react";

// import components
import ActivitiesItem from "@/components/activities/ActivityItem";
import SearchBar from "@/components/basic/SearchBar";
import ActivityItemApplied from "./ActivityItemApplied";

// import utils
import { formatDate } from "@/utils/dateUtils";

// import interface
import { ActivityItem, ActivitiesGroupByDateItem } from "@/interface/activitiesInterface";

export default function ActivitiesCatalog({
  activitiesGroupByDate
}: {
  activitiesGroupByDate: ActivitiesGroupByDateItem[];
}) {
  // Primary variables
  const [search, setSearch] = useState<string>("");
  const [nearestFriday, setNearestFriday] = useState<Date>(new Date());


  // useMemo for memoize filtered activities based on search term
  const filteredActivitiesGroupByDate = useMemo(() => {
    if (search === "") return activitiesGroupByDate;
    return activitiesGroupByDate.map(group => ({
      ...group,
      activities: group.activities.filter(
        (item) =>
          item.company?.name?.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase())
      )
    })).filter(group => group.activities.length > 0);
  }, [search, activitiesGroupByDate]);

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
      <div className="justify-between gap-10 grid grid-cols-1 sm:grid-cols-2 w-full">
        <h1 className="col-span-1 font-bold text-center text-header-1 text-mgray-1 sm:text-left">Activities</h1>
        <div className="flex justify-end items-center col-span-1">
          <SearchBar onChange={setSearch} className="mt-1 w-full sm:w-80" />
        </div>
      </div>

      {filteredActivitiesGroupByDate.map((groupDate: ActivitiesGroupByDateItem, index) => (
        <div key={index} className="flex flex-col justify-start items-start gap-8 py-8 border-b-1 border-b-mgray-2 w-full">
          <h2 className="font-normal text-header-2 text-mgray-2">{formatDate(groupDate.date)}</h2>
          <div className="justify-start gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
            {
              (new Date(groupDate.date) >= new Date(nearestFriday.getTime() - (6 * 24 * 60 * 60 * 1000))) && (new Date(groupDate.date) <= nearestFriday) ?
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
      ))}
    </>
  );
}