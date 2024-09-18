// id='16:6014'
import React from "react"

interface IconProps {
  style?: {
    width?: string | number
    height?: string | number
    [key: string]: any
  }
}

const QodeSvg166014: React.FC<IconProps> = ({
  style: { width, height } = {
    width: "160",
    height: "3",
  },
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill="#2D64BC" />
    </svg>
  )
}

export default QodeSvg166014
