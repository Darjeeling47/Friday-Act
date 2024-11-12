// import components
import Tag from "../basic/Tag";

// import util
import { cn } from "@/utils/utils";

// import interface
import { ActivityItem, TagItem } from "@/interface/activitiesInterface";

export default function ActivitiesItem({
  item,
}: {
  item: ActivityItem;
}) {
  // Primary variables
  const seatLeft = Math.max(0, item.max_participants - parseInt(item.currentParticipants));

  // return
  return (
    <div className="flex w-full flex-row justify-start items-start gap-5 rounded-[30px] p-5 hover:bg-vidva/10 transition-transform duration-300">
      <img
        src="https://th.bing.com/th/id/OIP.8Ev-Jhu_SC9hLoqtarMrTQHaJQ?rs=1&pid=ImgDetMain"
        alt="Activity Image"
        className="h-80 w-64 rounded-3xl object-cover shadow-1"
      />
      <div className="flex flex-col items-start justify-start gap-3">
        <h3 className="text-2xl font-normal text-mgray-1">{item.name}</h3>
        <p className="text-xl font-light text-mgray-2">{item.company?.name}</p>
        <div className="flex flex-wrap gap-2 border-t border-white pt-3">
          {item.tags.sort().map((tag: TagItem) => (
            <Tag key={tag.id} text={tag.name} color={tag.color} />
          ))}
        </div>
        <div className="line-clamp-3 text-lg font-light text-mgray-2">
          {item.description}
        </div>
        <p className={cn("text-xl font-light", seatLeft > 0 ? "text-mgreen" : "text-mred")}>
          {seatLeft} Seat{seatLeft !== 1 ? "s" : ""} left
        </p>
      </div>
    </div>
  );
}
