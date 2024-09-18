// id='I354:9277;146:180'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI3549277146180: React.FC<IconProps> = ({
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
        fill="#1597F4"
      />
      <rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#158DE2"
      />
      <path
        d="M11.1055 16.1041L11.0878 16.1217L6.68799 11.7218L8.12067 10.2892L11.1055 13.274L15.8795 8.5L17.3122 9.93268L11.1231 16.1218L11.1055 16.1041Z"
        fill="white"
      />
    </svg>
  )
}

export default QodeSvgI3549277146180
