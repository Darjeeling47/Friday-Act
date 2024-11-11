// import util
import { cn } from "@/utils/utils";

// Tag component
export default function Tag({
  text,
  color
}: {
  text: string,
  color: string
}) {
  // return
  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full bg-opacity-20",
        !color && "border border-mgray-1"
      )}
      style={{
        color: color ? `#${color}` : "#000",
        backgroundColor: color ? `#${color}20` : "#000020",
      }}
    >
      {text}
    </span>
  );
};
