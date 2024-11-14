import Button from './Button'

export default function TableHeader({
  headerTitle,
  buttonTitle,
  onClick,
  style,
  headerStyle,
  buttonStyle,
}: {
  headerTitle: string
  buttonTitle: string
  onClick?: Function
  style?: string
  headerStyle?: string
  buttonStyle?: string
}) {
  return (
    <div className={`mb-4 flex flex-row items-center justify-between ${style}`}>
      <p className={`text-2xl font-semibold ${headerStyle}`}>{headerTitle}</p>
      <Button
        onClick={() => {
          if (onClick) {
            onClick()
          }
        }}
        className={`max-md:my-4 ${buttonStyle}`}>
        {buttonTitle}
      </Button>
    </div>
  )
}
