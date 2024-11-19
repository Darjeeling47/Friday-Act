'use client'

// import react
import { useState, useEffect } from "react";

// import components
import SearchBar from "@/components/basic/SearchBar";
import ActivitiesCatalog from "@/components/activities/ActivitiesCatalog";
import ActivitiesCatalogLoad from "@/components/activities/ActivitiesCatalogLoad";

// import lib
import getActivities from "@/libs/activities/getActivities";

// import interface
import {  ActivitiesGroupByDateItem } from "@/interface/activitiesInterface";

export default function ActivitiesPage() {
  // Primary variables
  const [search, setSearch] = useState<string>("")
  const [activitiesByDate, setActivitiesByDate] = useState<ActivitiesGroupByDateItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function for fetch activities
  const fetchActivities = async () => {
    setLoading(true);
    const activities: any | null = await getActivities({ group: "date", search: search });
    if (activities) {
      setActivitiesByDate(activities.dates);
    }
    setLoading(false);
  };

  // UseEffect for fetch activities and find nearest Friday
  useEffect(() => {
    fetchActivities();
  }, [search]);

  // return
  return (
    <main className="flex flex-col gap-8 pt-6 md:pt-10 pb-10 w-full">
      <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10 mx-auto w-full max-w-7xl">
        <div className="justify-between gap-10 grid grid-cols-1 sm:grid-cols-2 w-full">
          <h1 className="col-span-1 font-bold text-center text-header-1 text-mgray-1 sm:text-left">Activities</h1>
          <div className="flex justify-end items-center col-span-1">
            <SearchBar onChange={setSearch} className="mt-1 w-full sm:w-80" />
          </div>
        </div>
        <div className="mx-auto px-2 w-full">
          {
            loading ?
              <ActivitiesCatalogLoad />
              :
              <ActivitiesCatalog activitiesGroupByDate={activitiesByDate} />
          }
        </div>
      </div>
    </main>
  );
}
