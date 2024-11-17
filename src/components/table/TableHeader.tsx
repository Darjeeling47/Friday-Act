import Button from '../basic/Button'

export default function TableHeader({
  headerTitle,
  buttonTitle,
  style,
  headerStyle,
  buttonStyle,
  disableButton,
  onClick,
  href,
}: {
  headerTitle: string
  style?: string
  headerStyle?: string
  buttonStyle?: string
  onClick?: () => void
  href?: string
} & (
  | { disableButton: true; buttonTitle?: never }
  | { disableButton?: false; buttonTitle: string }
)) {
  return (
    <div
      className={`flex ${disableButton ? 'justify-start' : 'items-center justify-center justify-between'} ${style}`}>
      <p className={`text-2xl font-semibold ${headerStyle}`}>{headerTitle}</p>
      {!disableButton && (
        <Button className={`${buttonStyle}`} onClick={onClick} href={href}>
          {buttonTitle}
        </Button>
      )}
    </div>
  )
}
