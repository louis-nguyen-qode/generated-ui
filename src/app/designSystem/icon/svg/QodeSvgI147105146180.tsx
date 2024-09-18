// id='I147:105;146:180'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI147105146180: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "24",
    height: "24",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        fill="#1597F4"
      />
      <rect
        x="1"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#158DE2"
      />
      <path
        d="M11.6054 16.1041L11.5877 16.1217L7.1879 11.7218L8.62057 10.2892L11.6054 13.274L16.3794 8.5L17.8121 9.93268L11.623 16.1218L11.6054 16.1041Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvgI147105146180
