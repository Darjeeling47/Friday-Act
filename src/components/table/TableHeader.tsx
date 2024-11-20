import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../basic/Button';

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
  headerTitle: string;
  style?: string;
  headerStyle?: string;
  buttonStyle?: string;
  onClick?: () => void;
  href?: string;
} & (
  | { disableButton: true; buttonTitle?: never }
  | { disableButton?: false; buttonTitle: string }
)) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log('Attendance Button clicked')
    }
  };

  return (
    <div
      className={`flex ${disableButton ? 'justify-start' : 'w-full items-center justify-between'} ${style}`}>
      <p className={`text-2xl font-semibold ${headerStyle}`}>{headerTitle}</p>
      {!disableButton && (
        <Button className={`${buttonStyle}`} onClick={handleClick} href={href}>
          {buttonTitle}
        </Button>
      )}
    </div>
  );
}