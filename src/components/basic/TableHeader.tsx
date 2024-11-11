import Button from "./Button";

interface TableHeader {
  style? : string
  title : {
    title : string,
    style? : string
  },
  button : {
    title : string,
    style? : string,
    onClick? : Function,
  },
}

export default function TableHeader ({ title, button, style } : TableHeader) {
  return (
    <div className={`flex items-center justify-between p-4 ${style}`}>
      <p className={`text-2xl font-semibold ${title.style}`}>{title.title}</p>
      <Button>
        <p className={`${button.style}`}>{button.title}</p>
      </Button>
    </div>
  );
};
