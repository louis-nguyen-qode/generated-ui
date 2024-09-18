// id='2653:50139'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg265350139: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "72",
    height: "72",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 72H25L25 47H0V42H25L25 30L0 30V25L25 25L25 0H30L30 25H42L42 0H47L47 25L72 25V30L47 30V42L72 42V47L47 47L47 72H42L42 47H30L30 72ZM42 30H30L30 42H42V30Z"
        fill="#F5F7F8"
      />
    </svg>
  )
}

export default QodeSvg265350139
