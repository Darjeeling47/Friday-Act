import Button from './Button'

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
    <div className={`flex max-md:flex-col items-center justify-center justify-between ${style}`}>
      <p className={`text-2xl font-semibold ${headerStyle}`}>{headerTitle}</p>
        <Button className={`max-md:mt-4 ${buttonStyle}`} onClick={onClick} href={href}>
          {buttonTitle}
        </Button>
    </div>
  )
}
