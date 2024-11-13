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
    <div className={`flex flex-row items-center justify-between mb-4 ${style}`}>
      <p className={`text-2xl font-semibold ${headerStyle}`}>{headerTitle}</p>
      <Button className={`flex items-center justify-center ${buttonStyle}`}>
        {buttonTitle}
      </Button>
    </div>
  );
};
