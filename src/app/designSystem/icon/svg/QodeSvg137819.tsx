// id='137:819'
import React from "react"

interface IconProps {
  style?: {
    width?: string
    height?: string
    [key: string]: any
  }
}

const QodeSvg137819: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "40",
    height: "40",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        rx="20"
        fill="black"
        fillOpacity="0.06"
      />
    </svg>
  )
}

export default QodeSvg137819
