// import components
import ActivitiesCatalog from "@/components/activities/ActivitiesCatalog";
import Cookies from "js-cookie";

// import lib
import { getActivities } from "@/libs/activities/getActivities";

// import interface
import { ActivitiesGroupByDate, ActivitiesGroupByDateItem } from "@/interface/activitiesInterface";

export default async function Activities() {
  // Get the token using js-cookie
  const token = Cookies.get('access_token')

  // Primary variables
  const response: ActivitiesGroupByDate = await getActivities({ token: token as string,group: "date" });
  const activities: ActivitiesGroupByDateItem[] = response.dates;

  // return
  return (
    <main className="flex flex-col gap-8 py-10 sm:py-28 w-full">
      <ActivitiesCatalog activitiesGroupByDate={activities} />
    </main>
  );
}
