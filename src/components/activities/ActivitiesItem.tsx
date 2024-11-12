// import components
import Tag from "../basic/Tag";

// import util
import { cn } from "@/utils/utils";

// import interface
import { ActivityItem } from "@/interface/activitiesInterface";
import { TagItem } from "@/interface/tagsInterface";

export default function ActivitiesItem({
  item,
}: {
  item: ActivityItem;
}) {
  // Primary variables
  const seatLeft = Math.max(0, item.max_participants - parseInt(item.currentParticipants));

  // return
  return (
    <div className="flex flex-row justify-start items-start gap-5 hover:bg-vidva/10 p-5 rounded-[30px] w-full transition-transform duration-300">
      <img
        src={mockImgSrc}
        alt=""
        className="shadow-1 rounded-3xl w-64 h-80 object-cover"
      />
      <div className="flex flex-col justify-start items-start gap-3 text-wrap">
        <h3 className="font-normal text-2xl text-mgray-1">Name of Activities</h3>
        <p className="font-light text-mgray-2 text-xl">Company Name</p>
        <div className="flex flex-wrap gap-2 pt-3 border-t-1 border-t-white">
          {mockTags.sort().map((tag: string, index) => (
            <span 
              key={index}
              className={`text-blue-800 bg-blue-200 px-3 py-1 rounded-full`}>
            {tag}
          </span>
          ))}
        </div>
        <div className="line-clamp-3 font-light text-lg text-mgray-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor explicabo, provident laboriosam rerum, debitis nobis sed aliquam minima porro qui, ipsa doloremque unde optio! Ducimus eveniet ad tempora pariatur quaerat.
          Hic minus amet quas culpa iusto veritatis velit laborum quasi, consectetur enim mollitia assumenda facere, placeat, omnis expedita praesentium tempora illo cumque sunt totam. Perspiciatis deleniti debitis accusamus cumque impedit.
        </div>
        <p className="font-light text-mgreen text-xl">40 Seat left</p>
      </div>
    </div>
  );
}
