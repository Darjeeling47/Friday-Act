import Button from "./Button";

export default function TableHeader ({ 
    headerTitle,
    buttonTitle,
    style,
    headerStyle,
    buttonStyle,
  } : {
    headerTitle: string,
    buttonTitle: string,
    style?: string,
    headerStyle?: string,
    buttonStyle?: string,
  }
  ) {
  return (
    <div className={`flex max-md:flex-col items-center justify-center justify-between ${style}`}>
      <p className={`text-2xl font-semibold ${headerStyle}`}>{headerTitle}</p>
      <Button className={`max-md:my-4 ${buttonStyle}`}>
        {buttonTitle}
      </Button>
    </div>
  );
};
