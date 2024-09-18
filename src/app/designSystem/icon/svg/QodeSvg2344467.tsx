// id='234:4467'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg2344467: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "119",
    height: "31",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 121 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M118.75 1H2.75C2.19772 1 1.75 1.44772 1.75 2V30C1.75 30.5523 2.19772 31 2.75 31H118.75C119.302 31 119.75 30.5523 119.75 30V2C119.75 1.44772 119.302 1 118.75 1Z"
        fill="white"
      />
      <path
        opacity="0.15"
        d="M114.25 0.5H7.25C3.93629 0.5 1.25 3.18629 1.25 6.5V25.5C1.25 28.8137 3.93629 31.5 7.25 31.5H114.25C117.564 31.5 120.25 28.8137 120.25 25.5V6.5C120.25 3.18629 117.564 0.5 114.25 0.5Z"
        stroke="black"
      />
    </svg>
  )
}

export default QodeSvg2344467
