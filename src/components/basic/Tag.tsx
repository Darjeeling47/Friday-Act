// import util
import { cn } from "@/utils/utils";

// Tag component
export default function Tag({
  text,
  color
}: {
  text: string,
  color?: string
}) {
  // return
  return (
    <div
      className={cn(
        "h-7 flex justify-center items-center px-2 rounded-full text-detail whitespace-nowrap",
      )}
      style={{
        color: color ? `#${color}` : "#000",
        backgroundColor: color ? `#${color}20` : "#00000020",
      }}
    >
      {text}
    </div>
  );
};
