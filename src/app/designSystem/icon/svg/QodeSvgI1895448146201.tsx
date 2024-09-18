// id='I189:5448;146:201'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI1895448146201: React.FC<IconProps> = ({
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
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        fill="#E3E3E3"
      />
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#D5D5D5"
      />
      <path
        d="M11.1055 16.1041L11.0878 16.1217L6.68799 11.7218L8.12067 10.2892L11.1055 13.274L15.8795 8.5L17.3122 9.93268L11.1231 16.1218L11.1055 16.1041Z"
        fill="#A7A7A7"
      />
    </svg>
  )
}

export default QodeSvgI1895448146201
