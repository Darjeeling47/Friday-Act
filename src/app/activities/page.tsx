// import components
import ActivitiesCatalog from "@/components/activities/ActivitiesCatalog";

// import lib
import { getActivities } from "@/libs/activities/getActivities";

// import interface
import { ActivitiesGroupByDate, ActivitiesGroupByDateItem } from "@/interface/activitiesInterface";

export default async function Activities() {
  // Primary variables
  const response: ActivitiesGroupByDate = await getActivities({ group: "date" });
  const activities: ActivitiesGroupByDateItem[] = response.dates;

  // return
  return (
    <main className="flex flex-col gap-8 py-10 sm:py-28 w-full">
      <ActivitiesCatalog activitiesGroupByDate={activities} />
    </main>
  );
}
