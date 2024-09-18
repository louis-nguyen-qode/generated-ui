// id='81:3812'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg813812: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "8.353553771972656",
    height: "8.353553771972656",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8L0.353554 8.35355L8.35355 0.353554L8 0L0 8ZM4.35355 8.35355L8.35355 4.35355L8 4L4 8L4.35355 8.35355Z"
        fill="black"
        fillOpacity="0.45"
      />
    </svg>
  )
}

export default QodeSvg813812
