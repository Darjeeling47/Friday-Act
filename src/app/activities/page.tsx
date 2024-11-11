// import components
import ActivitiesCatalog from "@/components/activities/ActivitiesCatalog";

// import lib
import { getActivities } from "@/libs/activities/getActivities";

// import interface
import { ActivityItem } from "@/interface/activities/activities";

export default async function Activities() {
  // Primary variables
  const response = await getActivities();
  const activities: ActivityItem[] = response.groupActivities;

  // return
  return (
    <main className="py-28 w-full flex flex-col gap-8">
      <ActivitiesCatalog activities={activities} />
    </main>
  );
}
