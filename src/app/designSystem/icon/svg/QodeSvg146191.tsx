// id='146:191'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg146191: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="4" fill="#82C8FA" />
      <path
        d="M11.1053 16.1041L11.0877 16.1217L6.68787 11.7218L8.12054 10.2892L11.1054 13.274L15.8794 8.5L17.3121 9.93268L11.123 16.1218L11.1053 16.1041Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvg146191
