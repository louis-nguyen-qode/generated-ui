// id='I5820:16943;146:854'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvgI582016943146854: React.FC<IconProps> = ({
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
        d="M6 10C6 7.79086 7.79086 6 10 6H14C16.2091 6 18 7.79086 18 10V14C18 16.2091 16.2091 18 14 18H10C7.79086 18 6 16.2091 6 14V10Z"
        fill="#A7A7A7"
      />
    </svg>
  )
}

export default QodeSvgI582016943146854
