'use client';

// import react
import { useState, useMemo } from "react";

// import components
import ActivitiesItem from "@/components/activities/ActivitiesItem";
import SearchBar from "@/components/basic/SearchBar";

// import interface
import { ActivityItem } from "@/interface/activities/activities";

export default function ActivitiesCatalog({
  activities
}: {
  activities: ActivityItem[];
}) {
  // Primary variables
  const [search, setSearch] = useState<string>("");

  // useMemo for memoize filtered activities based on search term
  const filteredActivities = useMemo(() => {
    return search === ""
      ? activities
      : activities.filter(
        (item) =>
          item.company?.name?.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase())
      );
  }, [search, activities]);

  // return
  return (
    <>
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold text-5xl text-mgray-1">Activities</h1>
        <SearchBar onChange={setSearch} />
      </div>

      <div className="w-full py-8 flex flex-col justify-start items-start gap-8">
        <h2 className="font-normal text-mgray-2 text-3xl">{new Date().toLocaleDateString()}</h2>
        <div className="w-full grid justify-start grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredActivities.map((activity: ActivityItem) => (
            <div key={activity.id} className="col-span-1 w-full overflow-hidden">
              <ActivitiesItem item={activity} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
