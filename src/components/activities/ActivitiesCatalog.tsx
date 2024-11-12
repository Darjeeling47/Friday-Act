'use client';

// import react
import { useState, useMemo } from "react";

// import components
import ActivitiesItem from "@/components/activities/ActivitiesItem";
import SearchBar from "@/components/basic/SearchBar";

// import interface
import { ActivityItem, ActivitiesGroupByDateItem } from "@/interface/activitiesInterface";

export default function ActivitiesCatalog({
  activitiesGroupByDate
}: {
  activitiesGroupByDate: ActivitiesGroupByDateItem[];
}) {
  // Primary variables
  const [search, setSearch] = useState<string>("");

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

  // return
  return (
    <>
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold text-5xl text-mgray-1">Activities</h1>
        <SearchBar onChange={setSearch} />
      </div>

      {filteredActivitiesGroupByDate.map((groupDate: ActivitiesGroupByDateItem, index) => (
        <div key={index} className="w-full py-8 flex flex-col justify-start items-start gap-8 border-b-1 border-b-mgray-1">
          <h2 className="font-normal text-mgray-2 text-3xl">{new Date(groupDate.date).toLocaleDateString()}</h2>
          <div className="w-full grid justify-start grid-cols-1 lg:grid-cols-2 gap-8">
            {groupDate.activities.map((activity: ActivityItem) => (
              <div key={activity.id} className="col-span-1 w-full overflow-hidden">
                <ActivitiesItem item={activity} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
