// id='I147:174;146:847'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvgI147174146847: React.FC<IconProps> = ({
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
      <rect x="1" y="0.5" width={width} height={height} rx="3.5" fill="white" />
      <rect
        x="1"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        stroke="#82C8FA"
      />
      <path
        d="M6.5 10C6.5 7.79086 8.29086 6 10.5 6H14.5C16.7091 6 18.5 7.79086 18.5 10V14C18.5 16.2091 16.7091 18 14.5 18H10.5C8.29086 18 6.5 16.2091 6.5 14V10Z"
        fill="#82C8FA"
      />
    </svg>
  )
}

export default QodeSvgI147174146847
