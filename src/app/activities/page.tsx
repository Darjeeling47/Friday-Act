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
    <main className="py-28 w-full flex flex-col gap-8">
      <ActivitiesCatalog activitiesGroupByDate={activities} />
    </main>
  );
}
