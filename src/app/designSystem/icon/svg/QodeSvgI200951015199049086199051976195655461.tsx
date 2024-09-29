// id='I2009:51015;1990:49086;1990:51976;1956:55461'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI200951015199049086199051976195655461: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "65",
    height: "65",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65.7998 32.5C65.7998 50.4493 51.2491 65 33.2998 65C15.3506 65 0.799805 50.4493 0.799805 32.5C0.799805 14.5507 15.3506 0 33.2998 0C51.2491 0 65.7998 14.5507 65.7998 32.5ZM7.2998 32.5C7.2998 46.8594 18.9404 58.5 33.2998 58.5C47.6592 58.5 59.2998 46.8594 59.2998 32.5C59.2998 18.1406 47.6592 6.5 33.2998 6.5C18.9404 6.5 7.2998 18.1406 7.2998 32.5Z"
        fill="#E3E3E3"
      />
    </svg>
  )
}

export default QodeSvgI200951015199049086199051976195655461
