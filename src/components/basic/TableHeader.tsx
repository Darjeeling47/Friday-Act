import Button from "./Button";

export default function TableHeader ({ 
    headerTitle,
    buttonTitle,
    style,
    headerStyle,
    buttonStyle,
    onClick,
    href
  } : {
    headerTitle: string,
    buttonTitle: string,
    style?: string,
    headerStyle?: string,
    buttonStyle?: string,
    onClick?: () => void
    href?: string
  }
  ) {
  return (
    <div className={`flex flex-col items-center  mb-6 sm:flex-col justify-center space-y-4 md:flex-row justify-between ${style}`}>
      <p className={`text-2xl font-semibold ${headerStyle}`}>{headerTitle}</p>
      <Button className={`flex items-center justify-center ${buttonStyle}`} onClick={onClick} href={href}>
        {buttonTitle}
      </Button>
    </div>
  );
};
